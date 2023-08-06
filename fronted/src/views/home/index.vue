<template>
    <t-loading :loading="loading" fullscreen />
    <t-row :gutter="[{ xs: 4, sm: 8, md: 12, lg: 16, xl: 16, xxl: 20 }, {
        xs: 16, sm: 16, md: 16, lg: 16, xl: 16, xxl: 20
    }]">
        <t-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <t-card title="- 概览" :bordered="false">
                <t-row justify="space-around">
                    <t-col>
                        <span class="overview-text">主机</span>
                        <div class="overview-count">
                            <span>1</span>
                        </div>
                    </t-col>
                    <t-col>
                        <span class="overview-text">日志</span>
                        <div class="overview-count">
                            <span>1</span>
                        </div>
                    </t-col>
                </t-row>
            </t-card>
            <t-card title="- 系统状态" style="margin-top: 10px;" :bordered="false">
                <t-row justify="space-around" :gutter="[{ xs: 4, sm: 8, md: 12, lg: 16, xl: 16, xxl: 20 }, {
                    xs: 16, sm: 16, md: 16, lg: 16, xl: 16, xxl: 20
                }]">
                    <t-col class="systemstate-col">
                        <t-popup placement="bottom" show-arrow destroy-on-close>
                            <t-progress theme="circle" :percentage="SystemState.master.cpu.avgLoad.main" />
                            <div class="systemstate">{{ SystemState.master.cpu.avgLoad.main < 75 ? "运行流畅" : "运行负载" }}</div>
                                    <template #content>
                                        <t-space direction="vertical" align="center" size="small">
                                            <t-tag theme="primary" variant="light">最近 1 分钟平均负载: {{
                                                SystemState.master.cpu.avgLoad.one }}</t-tag>
                                            <t-tag theme="primary" variant="light">最近 5 分钟平均负载: {{
                                                SystemState.master.cpu.avgLoad.five }}</t-tag>
                                            <t-tag theme="primary" variant="light">最近 15 分钟平均负载: {{
                                                SystemState.master.cpu.avgLoad.fifth }}</t-tag>
                                        </t-space>
                                    </template>
                        </t-popup>
                    </t-col>
                    <t-col class="systemstate-col">
                        <t-popup placement="bottom" show-arrow destroy-on-close>
                            <t-progress theme="circle" :percentage="SystemState.master.cpu.cpuUsagePercent" />
                            <div class="systemstate">CPU<br>{{ SystemState.master.cpu.count.Main }} 核心</div>
                            <template #content>
                                <t-space direction="vertical" align="center" size="small">
                                    <t-tag theme="primary" variant="light">{{ SystemState.master.cpu.cpuBrand }}</t-tag>
                                    <t-tag theme="primary" variant="light">物理核心 *{{ SystemState.master.cpu.count.Physical }}
                                        逻辑核心 *{{ SystemState.master.cpu.count.Idle }}</t-tag>
                                </t-space>
                            </template>
                        </t-popup>
                    </t-col>
                    <t-col class="systemstate-col">
                        <t-progress theme="circle" :percentage="SystemState.master.memory.memUsagePercent" />
                        <div class="systemstate">内存<br>{{ SystemState.master.memory.usedMemMB }} / {{
                            SystemState.master.memory.totalMemMB }}<br>MB</div>
                    </t-col>
                    <t-col class="systemstate-col">
                        <t-progress theme="circle" :percentage="SystemState.disk.usedPercentage" />
                        <div class="systemstate">/<br>{{ SystemState.disk.usedSize }} / {{ SystemState.disk.totalSize
                        }}<br>GB</div>
                    </t-col>
                </t-row>
            </t-card>
        </t-col>
        <t-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <t-card title="- 系统信息" :bordered="false">
                <ul class="systeminfo">
                    <li>
                        <span class="systeminfo-name">主机IP</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.ip }}</t-tag>
                    </li>
                    <li>
                        <span class="systeminfo-name">主机名称</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.hostname }}</t-tag>
                    </li>
                    <li>
                        <span class="systeminfo-name">操作系统</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.platform }}</t-tag>
                    </li>
                    <li>
                        <span class="systeminfo-name">发行版本</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.kernel }}</t-tag>
                    </li>
                    <li>
                        <span class="systeminfo-name">内核版本</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.release }}</t-tag>
                    </li>
                    <li>
                        <span class="systeminfo-name">系统类型</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.arch }}</t-tag>
                    </li>
                    <li>
                        <span class="systeminfo-name">运行时间</span>
                        <t-tag theme="primary" variant="light">{{ SystemInfo.runningTime }}</t-tag>
                    </li>
                </ul>
            </t-card>
        </t-col>
    </t-row>
</template>

<script setup>
import { onMounted, ref, inject } from "vue";
import io from "socket.io-client";

const socket = io("", {
    transports: ['websocket'],
    withCredentials: false
})

const SystemInfo = ref({
    ip: "127.0.0.1",
    hostname: "Loading",
    platform: "Loading",
    release: "Loading",
    kernel: "Loading",
    arch: "Loading",
    runningTime: "Loading",
});
const SystemState = ref({
    disk: {
        totalSize: "Loading",
        usedSize: "Loading",
        usedPercentage: 0,
    },
    master: {
        cpu: {
            cpuUsagePercent: 0,
            cpuBrand: "Loading",
            avgLoad: {
                main: 0,
                one: 0,
                five: 0,
                fifth: 0,
            },
            currentLoad: 0,
            count: {
                Main: 0,
                Idle: 0,
                Physical: 0,
            }
        },
        memory: {
            memUsagePercent: 0,
            totalMemMB: "Loading",
            usedMemMB: "Loading",
        },
    }
});

const loading = ref(true);

let systemInternal;

onMounted(() => {
    socket.on("connect", () => {
        systemInternal = setInterval(() => {
            socket.emit("get")
        }, 3000)
        socket.on("get", (msg) => {
            const data = JSON.parse(msg)
            SystemInfo.value = data.systeminfo
            SystemState.value = data.systemstate
            socket.send("getSystemInfo")
            socket.send("getSystemState")
            loading.value = false
        })
    })
    socket.on("disconnect", () => {
        clearInterval(systemInternal)
        console.log("Disconnect");
    });
})


</script>

<style scoped lang="less">
.overview-text {
    font-size: 14px;
    color: var(--td-gray-color-6);
}

.overview-count {
    font-size: 25px;
    text-align: center;
    color: var(--td-brand-color);
    font-weight: 500;
    line-height: 40px;
    cursor: pointer;
}

.systeminfo {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 30px;

    &-name {
        margin-right: 16px;
    }

    &-text {
        color: var(--td-gray-color-6);
    }
}

.systemstate-col {
    cursor: pointer;
}

.systemstate {
    text-align: center;
    color: var(--td-gray-color-6);
    padding-top: 10px;
    font-size: 12px;
}
</style>