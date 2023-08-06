<template>
    <div class="layout">
        <div class="menu">
            <Menu ref="menu" :isMobile="isMobile"></Menu>
        </div>
        <div class="layout_right">
            <t-card size="small" :bordered="false">
                <t-row align="center" justify="space-between">
                    <t-col>
                        <t-button v-if="isMobile" @click="handleClick" theme="default" variant="text">
                            <template #icon>
                                <BulletpointIcon />
                            </template>
                        </t-button>
                    </t-col>
                    <t-col>
                        <!-- <t-popup placement="bottom" show-arrow destroy-on-close>
                            <template #content>
                                主题设置：<t-switch v-model="checkTheme" @change="changeTheme" />
                            </template>
                            <t-avatar>Admin</t-avatar>
                        </t-popup> -->
                        <t-dropdown :min-column-width="88" :options="menuOptions">
                            <t-avatar style="cursor: pointer;">Admin</t-avatar>
                        </t-dropdown>
                    </t-col>
                </t-row>
            </t-card>
            <Content><router-view></router-view></Content>
        </div>
    </div>
</template>

<script setup>
import Menu from "@/layouts/Menu/index.vue"
import Content from "@/layouts/Content/index.vue"
import { BulletpointIcon } from 'tdesign-icons-vue-next';
import { ref, onMounted } from "vue";

const menu = ref(null)
const isMobile = ref(false)
const checkTheme = ref(false)

const menuOptions = [
    {
        content: '个人设置',
        value: 1,
        onClick: () => MessagePlugin.success('选项一'),
    },
    {
        content: '设置中心',
        value: 2,
        onClick: () => MessagePlugin.success('选项二'),
    },
    {
        content: '退出登录',
        value: 3,
        onClick: () => MessagePlugin.success('选项三'),
    },
];

const handleClick = () => {
    menu.value.handleClick();
}

const changeMenu = () => {
    if (document.body.clientWidth <= 992) {
        isMobile.value = true;
    } else {
        isMobile.value = false;
    }
}

const changeTheme = (e) => {
    if (e) {
        document.documentElement.setAttribute('theme-mode', 'dark');
    } else {
        document.documentElement.removeAttribute('theme-mode');
    }
}

onMounted(() => {
    changeMenu();
    menu.value.changeSlider();
    window.onresize = () => {
        changeMenu();
        menu.value.changeSlider();
    }
})
</script>

<style lang="less" scoped>
.layout {
    height: 100%;
    overflow: hidden;
    display: flex;

    &_right {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
}
</style>