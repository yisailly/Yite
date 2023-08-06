import si from "systeminformation";
import os from "os";
import { WebCPU } from 'webcpu/dist/umd/webcpu.js';

export default async function getSystemState() {
    const cpuUsage = os.cpus().map(cpu => cpu.times).reduce((prev, cur) => {
        const total = Object.values(cur).reduce((a, b) => a + b);
        const idle = cur.idle;
        return prev + (1 - idle / total);
    }, 0) / os.cpus().length;

    const cpuLength = os.cpus().length;
    const cpuAvgLoad = os.loadavg().map(load => load / cpuLength);

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const memUsage = (totalMem - freeMem) / totalMem;

    const cpuUsagePercent = (cpuUsage * 100).toFixed(2);
    const memUsagePercent = (memUsage * 100).toFixed(2);

    const totalMemMB = Math.floor(totalMem / 1024 / 1024);
    const usedMemMB = Math.floor((totalMem - freeMem) / 1024 / 1024);

    const sata = await si.fsSize();

    const disk = sata[0]
    const totalSizeGB = disk.size / (1024 * 1024 * 1024);
    const usedSizeGB = disk.used / (1024 * 1024 * 1024);

    const usedPercentage = Math.floor((usedSizeGB / totalSizeGB) * 100);
    const cpuCount = (await si.cpu()).cores;
    const cpuBrand = (await si.cpu()).manufacturer + " " + (await si.cpu()).brand;

    const webCPU = await WebCPU.detectCPU();

    const cpu = await si.currentLoad();

    return {
        // 磁盘
        disk: {
            totalSize: totalSizeGB.toFixed(2), // 总大小
            usedSize: usedSizeGB.toFixed(2), // 已使用
            usedPercentage, // 使用率
        },
        master: {
            // cpu
            cpu: {
                cpuUsagePercent, // cpu使用率
                cpuBrand, // cpu品牌
                avgLoad: {
                    main: Number(cpu.avgLoad.toFixed(2)), // 平均负载
                    one: cpuAvgLoad[0], // 1分钟
                    five: cpuAvgLoad[1], // 5分钟
                    fifth: cpuAvgLoad[2], // 15分钟
                },
                currentLoad: Number(cpu.currentLoad.toFixed(2)), // cpu负载
                count: {
                    Main: cpuCount, // cpu核心数
                    Idle: webCPU.estimatedIdleCores, // cpu逻辑核心数
                    Physical: webCPU.estimatedPhysicalCores, // cpu物理核心数
                }
            },
            memory: {
                memUsagePercent, // 内存使用率
                totalMemMB, // 总大小
                usedMemMB, // 已使用
            },
        },
    }
};