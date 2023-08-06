import express from 'express';
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
import { Client } from "ssh2";
import utf8 from "utf8";
import { v4 } from "uuid";
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import NeDB from 'nedb';
const DB = new NeDB({
    autoload: true,
    filename: (__dirname, './db.db')
})

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});
import { getSystemInfo, getSystemState } from "../module/index.js";

app.use(express.static(join(__dirname, "../public")))
console.log(join(__dirname, "../public"));

io.on('connection', async (socket) => {

    socket.on("get", async () => {
        socket.emit("get", JSON.stringify({
            systeminfo: await getSystemInfo(),
            systemstate: await getSystemState(),
        }));
    })

    socket.on("create", (msg) => {
        const data = JSON.parse(msg)
        const conn = new Client();
        conn.on("ready", () => {
            socket.emit('shell-output', "\r\n***" + data.ip + " SSH CONNECTION ESTABLISHED ***\r\n")
            conn.shell({
                cols: data.cols,
                rows: data.rows
            }, function (err, stream) {
                if (err) {
                    return socket.emit(
                        'shell-output',
                        "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
                    );
                }
                socket.on('resize', function socketOnResize(data) {
                    stream.setWindow(data.rows, data.cols)
                })
                socket.on('shell-input', function (data) {
                    stream.write(JSON.parse(data).e);
                });
                stream
                    .on("data", function (d) {
                        socket.emit('shell-output', utf8.decode(d.toString("binary")));
                    })
                    .on("close", function () {
                        conn.end();
                    });
            });
        }).on('error', (err) => {
            socket.emit('shell-output', "\r\n***密码验证错误，请检查密码***\r\n");
            conn.end();
        }).connect({
            host: data.ip,
            port: data.port,
            username: data.username,
            password: data.password
        });
        socket.on("disssh", () => {
            conn.end();
        })
    })

    socket.on("addServer", async (msg) => {
        const data = JSON.parse(msg);
        const uuid = v4()
        const listData = {
            id: uuid,
            ...data,
        }
        DB.insert(listData, function (err, doc) {
            if (err) {
                socket.emit("addServer", JSON.stringify({ type: "error", msg: "新增主机失败" }))
                return;
            }
            socket.emit("addServer", JSON.stringify({ type: "success", msg: "新增主机成功" }))
        });
    })

    socket.on("delServer", async (msg) => {
        DB.remove({ id: msg }, {}, function (err, data) {
            if (err) {
                socket.emit("delServer", JSON.stringify({ type: "error", msg: "删除主机失败" }))
                return;
            }
            socket.emit("delServer", JSON.stringify({ type: "success", msg: "删除主机成功" }))
        });
    })

    socket.on("getServer", async () => {
        DB.find({}, (err, docs) => {
            if (err) {
                console.log(err);
                return;
            }
            socket.emit('getServer', JSON.stringify(docs) ? JSON.stringify(docs) : JSON.stringify([]))
        });
    })

    socket.on("updateServer", async (msg) => {
        const data = JSON.parse(msg)
        DB.update({ id: data.id }, { $set: data.data }, function (err, data) {
            if (err) {
                socket.emit("updateServer", JSON.stringify({ type: "error", msg: "修改主机失败" }))
                return;
            }
            socket.emit("updateServer", JSON.stringify({ type: "success", msg: "修改主机成功" }))
        });
    })

    console.log("eee");
});

server.listen(3000, () => {
    console.log("listening on port *:3000");
})