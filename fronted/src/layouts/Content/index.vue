<template>
    <div class="layout-content">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style lang="less" scoped>
.layout-content {
    flex: 1;
    overflow: auto;
    padding: 15px;
}
</style>