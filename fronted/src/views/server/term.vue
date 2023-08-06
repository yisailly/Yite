<template>
    <div class="terminal">
        <div class="link-info">
            <div>
                <span>
                    当前连接IP: <t-tag theme="primary" variant="light">{{ stateData.ip ? stateData.ip : "127.0.0.1" }}</t-tag>
                </span>
                &nbsp;
                <span>
                    端口: <t-tag theme="primary" variant="light">{{ stateData.port ? stateData.port : 22 }}</t-tag>
                </span>
            </div>
            <div>
                <t-button @click="disSSH">断开连接</t-button>
            </div>
        </div>
        <div id="terminal-container"></div>
    </div>
</template>

<script setup lang="jsx">
import { onMounted, ref, onBeforeMount } from "vue"
import { useRouter } from "vue-router"
import { MessagePlugin } from "tdesign-vue-next";
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import 'xterm/lib/xterm.js'
import io from 'socket.io-client'

const cols = ref(0)
const rows = ref(0)
const router = useRouter();
const stateData = ref(history.state.data ? history.state.data : {})
var socket = io("", {
    transports: ['websocket'],
    withCredentials: false
})

let term;
let fitAddon;
const runTerminal = () => {
    const terminalContainer = document.getElementById("terminal-container")
    term = new Terminal({
        rendererType: 'canvas',
        cursorBlink: true,
        convertEol: true,
        scrollback: 800,
        windowsMode: true,
        rows: rows.value,
        cols: cols.value,
        theme: {
            foreground: 'white',
            background: '#181E29'
        }
    })

    fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalContainer);
    fitAddon.fit();
    term.focus();
    term.write('Connecting...');
}

const resizeScreen = () => {
    try {
        fitAddon.fit();
        term.onResize((e) => {
            e.cols = cols.value
            e.rows = rows.value
            socket.emit('resize', { cols: e.cols, rows: e.rows })
        });
    } catch (e) {
        console.log('e', e.message);
    }
};

onBeforeMount(() => {
    if (history.state.data !== undefined) {
        return;
    } else {
        router.push("/server")
        MessagePlugin.error("禁止非法访问")
    }
})

onMounted(() => {
    runTerminal();
    resizeScreen();
    window.addEventListener('resize', resizeScreen);
    socket.on('connect', () => {
        const data = {
            ip: history.state.data.ip,
            password: history.state.data.password,
            port: history.state.data.port,
            username: history.state.data.username,
            cols: term.cols,
            rows: term.rows,
        }
        socket.emit("create", JSON.stringify(data));
    });
    socket.on('error', (e) => {
        console.log(e);
        MessagePlugin.error('连接失败，请检查服务器账号密码是否正确！');
        router.push("/server")
    });
    socket.onclose = e => {
        setTimeout(() => term.write('\r\nConnection is closed.\r\n'), 200);
    };
    socket.on('shell-output', (e) => {
        term.write(e);
    });
    term.onData((e) => {
        socket.emit('shell-input', JSON.stringify({ e }));
    })
})

const disSSH = () => {
    socket.emit("disssh");
    MessagePlugin.success("已断开连接！")
    router.push("/server")
}
</script>

<style scoped lang="less">
.terminal {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fff;
    border-radius: 10px;
}

.link-info {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#terminal-container {
    flex: 1;

    ::-webkit-scrollbar {
        display: none;
    }
}
</style>