import si from "systeminformation";
import ipify from 'ipify';
import { ConversionTime } from "../utils/index.js";

// 获取系统信息
export default async function getSystemInfo() {
    const Osdata = await si.osInfo();
    const ip = await ipify({ useIPv6: false })
    return {
        hostname: Osdata.hostname,
        platform: Osdata.platform,
        release: Osdata.distro + "." + Osdata.release,
        kernel: Osdata.kernel,
        arch: Osdata.arch,
        runningTime: ConversionTime(si.time().uptime),
        ip,
    }
}