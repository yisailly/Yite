<template>
    <t-menu v-if="!isMobile" class="sliderbar-menu" theme="light" :default-value="defaultMenu" :collapsed="collapsed"
        @change="changeHandler" height="100%">
        <div class="logo">
            <img :width="collapsed ? 35 : 136" :src="imgUrl" alt="logo" />
        </div>
        <t-menu-item value="dashboard" to="/">
            <template #icon>
                <t-icon name="dashboard" />
            </template>
            仪表盘
        </t-menu-item>
        <t-menu-item value="server" to="/server">
            <template #icon>
                <t-icon name="server" />
            </template>
            主机列表
        </t-menu-item>
        <t-menu-item value="logs" to="/logs">
            <template #icon>
                <t-icon name="root-list" />
            </template>
            日志
        </t-menu-item>
        <template #operations>
            <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
                <template #icon><t-icon name="view-list" /></template>
            </t-button>
        </template>
    </t-menu>
    <t-drawer v-model:visible="visible" placement="left" size="250px" :footer="false">
        <t-menu v-if="isMobile" class="sliderbar-menu" theme="light" :default-value="defaultMenu" @change="changeHandler"
            height="100%" width="100%">
            <div class="logo">
                <img width="136" :src="logoUrl" alt="logo" />
            </div>
            <t-menu-item value="dashboard" to="/">
                <template #icon>
                    <t-icon name="dashboard" />
                </template>
                仪表盘
            </t-menu-item>
            <t-menu-item value="server" to="/server">
                <template #icon>
                    <t-icon name="server" />
                </template>
                主机列表
            </t-menu-item>
            <t-menu-item value="logs" to="/logs">
                <template #icon>
                    <t-icon name="root-list" />
                </template>
                日志
            </t-menu-item>
        </t-menu>
    </t-drawer>
</template>

<script setup>
import { ref, defineExpose, toRef, defineProps, onBeforeMount } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps({
    isMobile: Boolean,
});
const isMobile = toRef(props, 'isMobile');
const collapsed = ref(false);
const visible = ref(false);
const iconUrl = ref("https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png");
const logoUrl = ref("https://tdesign.gtimg.com/site/baseLogo-light.png");
const imgUrl = ref(logoUrl.value);
const router = useRouter();
const defaultMenu = ref("");

const changeCollapsed = () => {
    collapsed.value = !collapsed.value;
    imgUrl.value = collapsed.value
        ? iconUrl.value
        : logoUrl.value;
};

const changeSlider = () => {
    if (document.body.clientWidth <= 1080) {
        collapsed.value = true;
        imgUrl.value = collapsed.value
            ? iconUrl.value
            : logoUrl.value;
    } else {
        collapsed.value = false;
        imgUrl.value = collapsed.value
            ? iconUrl.value
            : logoUrl.value;
    }
}

const handleClick = () => {
    visible.value = true;
};

const changeHandler = (active) => {
    localStorage.setItem("menu_active", active);
    const menu_active = localStorage.getItem("menu_active")
    defaultMenu.value = menu_active;
}

onBeforeMount(() => {
    if (localStorage.getItem("menu_active") == null) {
        localStorage.setItem("menu_active", defaultMenu.value ? defaultMenu.value : "dashboard");
    } else {
        const menu_active = localStorage.getItem("menu_active")
        defaultMenu.value = menu_active;
    }
})

defineExpose({
    handleClick,
    changeSlider,
})
</script>

<style lang="less" scoped>
.sliderbar-menu {
    flex: 1;
    height: 100%;
}

.logo {
    box-sizing: border-box;
    width: 100%;
    height: var(--td-comp-size-xxxl);
    border-bottom: 1px solid var(--td-component-stroke);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
}
</style>