<template>
    <t-loading :loading="loading" fullscreen />
    <t-dialog v-model:visible="setVisible" header="设置" attach="body" :footer="false">
        <template #body>
            <t-tabs v-model="tabValue">
                <t-tab-panel :value="1" label="详细信息" :destroy-on-hide="false">
                    <ul class="serinfo">
                        <li>
                            <span class="serinfo-name">主机供应商</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.vendor }}</t-tag>
                        </li>
                        <li>
                            <span class="serinfo-name">主机名</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.name }}</t-tag>
                        </li>
                        <li>
                            <span class="serinfo-name">IP</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.ip }}</t-tag>
                        </li>
                        <li>
                            <span class="serinfo-name">用户名</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.username }}</t-tag>
                        </li>
                        <li>
                            <span class="serinfo-name">端口</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.port }}</t-tag>
                        </li>
                        <li>
                            <span class="serinfo-name">配置信息</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.config ? setModelValue.config : "未填写"
                            }}</t-tag>
                        </li>
                        <li>
                            <span class="serinfo-name">备注</span>
                            <t-tag theme="primary" variant="light">{{ setModelValue.mark ? setModelValue.mark : "无备注"
                            }}</t-tag>
                        </li>
                    </ul>
                </t-tab-panel>
                <t-tab-panel :value="2" label="修改信息" :destroy-on-hide="false">
                    <template #panel>
                        <t-form ref="updateform" style="margin-top: 15px;" :data="updateformData" :rules="updaterules"
                            @submit="onupdateSubmit">

                            <t-form-item label="主机供应商" name="vendor">
                                <t-select v-model="updateformData.vendor" clearable filterable>
                                    <t-option v-for="(item, index) in updateoptions" :key="index" :value="item.value"
                                        :label="item.label">
                                        {{ item.label }}
                                    </t-option>
                                </t-select>
                            </t-form-item>

                            <t-form-item label="主机名" name="name">
                                <t-input v-model="updateformData.name"></t-input>
                            </t-form-item>

                            <t-form-item label="IP" name="ip">
                                <t-input v-model="updateformData.ip"></t-input>
                            </t-form-item>

                            <t-form-item label="用户名" name="username">
                                <t-input v-model="updateformData.username" placeholder="例如：root"></t-input>
                            </t-form-item>

                            <t-form-item label="端口" name="port">
                                <t-input v-model="updateformData.port"></t-input>
                            </t-form-item>

                            <t-form-item label="配置信息" name="config">
                                <t-input v-model="updateformData.config"></t-input>
                            </t-form-item>

                            <t-form-item label="备注" name="mark">
                                <t-input v-model="updateformData.mark"></t-input>
                            </t-form-item>

                            <t-form-item>
                                <t-space size="small">
                                    <t-button theme="primary" type="submit">提交</t-button>
                                </t-space>
                            </t-form-item>
                        </t-form>
                    </template>
                </t-tab-panel>
            </t-tabs>
        </template>
    </t-dialog>
    <t-dialog v-model:visible="addVisible" header="新增主机" attach="body" :footer="false">
        <template #body>
            <t-form ref="addform" style="margin-top: 15px;" :data="addformData" :rules="addrules" @submit="onaddSubmit">

                <t-form-item label="主机供应商" name="vendor">
                    <t-select v-model="addformData.vendor" clearable filterable>
                        <t-option v-for="(item, index) in addoptions" :key="index" :value="item.value" :label="item.label">
                            {{ item.label }}
                        </t-option>
                    </t-select>
                </t-form-item>

                <t-form-item label="主机名" name="name">
                    <t-input v-model="addformData.name"></t-input>
                </t-form-item>

                <t-form-item label="IP" name="ip">
                    <t-input v-model="addformData.ip"></t-input>
                </t-form-item>

                <t-form-item label="用户名" name="username">
                    <t-input v-model="addformData.username" placeholder="例如：root"></t-input>
                </t-form-item>

                <t-form-item label="端口" name="port">
                    <t-input v-model="addformData.port"></t-input>
                </t-form-item>

                <t-form-item label="配置信息" name="config">
                    <t-input v-model="addformData.config"></t-input>
                </t-form-item>

                <t-form-item label="备注" name="mark">
                    <t-input v-model="addformData.mark"></t-input>
                </t-form-item>

                <t-form-item>
                    <t-space size="small">
                        <t-button theme="primary" type="submit">提交</t-button>
                    </t-space>
                </t-form-item>
            </t-form>
        </template>
    </t-dialog>
    <t-dialog v-model:visible="temVisible" header="请输入密码以连接主机" attach="body" :footer="false">
        <template #body>
            <t-form ref="temform" style="margin-top: 15px;" :data="temformData" :rules="temrules" @submit="ontemSubmit">
                <t-form-item label="密码" name="password">
                    <t-input type="password" v-model="temformData.password"></t-input>
                </t-form-item>

                <t-form-item>
                    <t-space size="small">
                        <t-button theme="primary" type="submit">提交</t-button>
                    </t-space>
                </t-form-item>
            </t-form>
        </template>
    </t-dialog>
    <t-dialog v-model:visible="delVisible" theme="info" header="提示" :closeOnOverlayClick="false" body="确认删除？"
        :cancel-btn="null" @confirm="deleteData" />
    <t-card ref="servercard" style="height: 100%;width: 100%;" :bordered="false">
        <t-row justify="space-around">
            <t-col flex="1">
                <t-button @click="addVisible = !addVisible">新增主机</t-button>
            </t-col>
            <t-col>
                <t-input @keyup="searchEvent" v-model="filterCont" placeholder="请输入...">
                    <template #suffixIcon>
                        <search-icon :style="{ cursor: 'pointer' }" />
                    </template>
                </t-input>
            </t-col>
        </t-row>
        <t-table ref="servertable" :style="{ marginTop: '20px' }" v-model:displayColumns="displayColumns" row-key="id"
            :loading="tableLoading" :height="sertableHeight" :data="newData" :columns="columns" :column-controller="{
                placement,
                fields: ['oprate', 'vendor', 'name', 'port', 'config', 'mark'],
                dialogProps: { preventScrollThrough: true },
                hideTriggerButton: true,
            }
                " :bordered="bordered" :lazyLoad="true" :stripe="false" :hover="true" resizable>
        </t-table>
    </t-card>
</template>

<script setup lang="jsx">
import { ref, onMounted, reactive, onBeforeMount } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { SearchIcon, LinkIcon, SettingIcon, CloseIcon } from "tdesign-icons-vue-next"
import { useRouter } from "vue-router"
import io from "socket.io-client";

var socket = io("", {
    transports: ['websocket'],
    withCredentials: false
})

const router = useRouter();
const loading = ref(false)
const tableLoading = ref(true)
const placement = ref('top-right');
const bordered = ref(false);
const setVisible = ref(false);
const addVisible = ref(false);
const delVisible = ref(false);
const temVisible = ref(false);
const tabValue = ref(1);
const deleteId = ref(null);
const activeRow = ref(null);
const initialData = ref([]);
const newData = ref([])
const staticColumn = ['oprate', 'vendor', 'name', 'ip', 'port', 'config', 'mark'];
const displayColumns = ref(staticColumn.concat(['oprate', 'vendor', 'name', 'ip', 'port', 'config', 'mark']));
const columns = ref([
    {
        colKey: 'name',
        title: '主机名',
        ellipsis: true,
    },
    { colKey: 'ip', title: 'IP', ellipsis: true },
    {
        title: '操作',
        colKey: 'oprate',
        cell: (h, { row }) => (
            <div>
                <t-button shape="circle" variant="text" onClick={() => (activeRow.value = row, temVisible.value = true)}><LinkIcon /></t-button>
                <t-button shape="circle" variant="text" onClick={() => openSetModel(row)}><SettingIcon /></t-button>
                <t-button shape="circle" variant="text" onClick={() => (deleteId.value = row.id, delVisible.value = true)}><CloseIcon /></t-button>
            </div>
        ),
    },
]);
const servercard = ref(null);
const sertableHeight = ref(300);
const filterCont = ref('');
const servertable = ref(null);
const updateform = ref(null);
const addform = ref(null);
const temform = ref(null);
const setModelValue = ref({});
const updateformData = reactive({
    name: '',
    vendor: '',
    ip: '',
    username: "",
    port: "",
    config: "",
    mark: "",
    id: "",
});
const updaterules = {
    name: [
        { required: true, message: '主机名必填', type: 'error', trigger: 'blur' },
        { required: true, message: '主机名必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '主机名不能为空' },
    ],
    vendor: [
        { required: true, message: '主机供应商必选', type: 'error', trigger: 'blur' },
        { required: true, message: '主机供应商必选', type: 'error', trigger: 'change' },
        { whitespace: true, message: '主机供应商不能为空' },
    ],
    ip: [
        { required: true, message: 'IP必填', type: 'error', trigger: 'blur' },
        { required: true, message: 'IP必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: 'IP不能为空' },
    ],
    username: [
        { required: true, message: '用户名必填', type: 'error', trigger: 'blur' },
        { required: true, message: '用户名必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '用户名不能为空' },
    ],
    port: [
        { required: true, message: '端口必填', type: 'error', trigger: 'blur' },
        { required: true, message: '端口必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '端口不能为空' },
    ],
};
const updateoptions = [
    { label: '腾讯云', value: '1' },
    { label: '阿里云', value: '2' },
    { label: '华为云', value: '3' },
    { label: '百度云', value: '4' },
    { label: '网易云', value: '5' },
    { label: '京东云', value: '6' },
    { label: '其他', value: '7' },
];

const addformData = reactive({
    name: '',
    vendor: '',
    ip: '',
    username: "",
    port: "",
    config: "",
    mark: "",
});
const addrules = {
    name: [
        { required: true, message: '主机名必填', type: 'error', trigger: 'blur' },
        { required: true, message: '主机名必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '主机名不能为空' },
    ],
    vendor: [
        { required: true, message: '主机供应商必选', type: 'error', trigger: 'blur' },
        { required: true, message: '主机供应商必选', type: 'error', trigger: 'change' },
        { whitespace: true, message: '主机供应商不能为空' },
    ],
    ip: [
        { required: true, message: 'IP必填', type: 'error', trigger: 'blur' },
        { required: true, message: 'IP必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: 'IP不能为空' },
    ],
    username: [
        { required: true, message: '用户名必填', type: 'error', trigger: 'blur' },
        { required: true, message: '用户名必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '用户名不能为空' },
    ],
    port: [
        { required: true, message: '端口必填', type: 'error', trigger: 'blur' },
        { required: true, message: '端口必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '端口不能为空' },
    ],
};
const addoptions = [
    { label: '腾讯云', value: '1' },
    { label: '阿里云', value: '2' },
    { label: '华为云', value: '3' },
    { label: '百度云', value: '4' },
    { label: '网易云', value: '5' },
    { label: '京东云', value: '6' },
    { label: '其他', value: '7' },
];

const temformData = reactive({
    password: '',
});
const temrules = {
    password: [
        { required: true, message: '密码必填', type: 'error', trigger: 'blur' },
        { required: true, message: '密码必填', type: 'error', trigger: 'change' },
        { whitespace: true, message: '密码不能为空' },
    ],
};

const getServer = () => {
    socket.emit("getServer")
    socket.on("getServer", (msg) => {
        const data = JSON.parse(msg)
        initialData.value = data
        searchEvent();
        tableLoading.value = false
    })
}

onMounted(() => {
    const servercardHeight = servercard.value.$el.offsetHeight;
    sertableHeight.value = servercardHeight - servercard.value.$el.offsetTop - 120
})

onBeforeMount(() => {
    getServer();
})

const searchEvent = () => {
    const filterVal = String(filterCont.value).trim().toLowerCase()
    if (filterVal) {
        const searchProps = ['vendor', 'name', 'ip', 'port', 'config', 'mark']
        const rest = initialData.value.filter(item => searchProps.some(key => String(item[key]).toLowerCase().indexOf(filterVal) > -1))
        newData.value = rest.map(row => {
            const item = Object.assign({}, row)
            return item
        })
    } else {
        newData.value = initialData.value
    }
}

const openSetModel = (row) => {
    setVisible.value = !setVisible.value
    setModelValue.value = row
    if (row.vendor == "腾讯云") {
        updateformData.vendor = "1"
    }
    if (row.vendor == "阿里云") {
        updateformData.vendor = "2"
    }
    if (row.vendor == "华为云") {
        updateformData.vendor = "3"
    }
    if (row.vendor == "百度云") {
        updateformData.vendor = "4"
    }
    if (row.vendor == "网易云") {
        updateformData.vendor = "5"
    }
    if (row.vendor == "京东云") {
        updateformData.vendor = "6"
    }
    if (row.vendor == "其他") {
        updateformData.vendor = "7"
    }
    updateformData.ip = row.ip
    updateformData.config = row.config
    updateformData.mark = row.mark
    updateformData.name = row.name
    updateformData.port = String(row.port)
    updateformData.username = row.username
    updateformData.id = row.id
}

const onupdateSubmit = ({ validateResult, firstError, e }) => {
    e.preventDefault();
    if (validateResult === true) {
        const data = {
            vendor: "",
            name: "",
            ip: "",
            port: null,
            config: "",
            mark: "",
            username: "",
        }
        if (updateformData.vendor == "1") {
            data.vendor = "腾讯云"
        }
        if (updateformData.vendor == "2") {
            data.vendor = "阿里云"
        }
        if (updateformData.vendor == "3") {
            data.vendor = "华为云"
        }
        if (updateformData.vendor == "4") {
            data.vendor = "百度云"
        }
        if (updateformData.vendor == "5") {
            data.vendor = "网易云"
        }
        if (updateformData.vendor == "6") {
            data.vendor = "京东云"
        }
        if (updateformData.vendor == "7") {
            data.vendor = "其他"
        }
        data.ip = updateformData.ip
        data.config = updateformData.config
        data.mark = updateformData.mark
        data.name = updateformData.name
        data.port = Number(updateformData.port)
        data.username = updateformData.username

        const endData = {
            id: updateformData.id,
            data,
        }
        socket.emit("updateServer", JSON.stringify(endData));
        socket.on("updateServer", (msg) => {
            const data = JSON.parse(msg);
            if (data.type == "success") {
                MessagePlugin.success(data.msg)
                setVisible.value = false;
                getServer();
            } else {
                MessagePlugin.error(data.msg)
            }
        })
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};

const onaddSubmit = ({ validateResult, firstError, e }) => {
    e.preventDefault();
    if (validateResult === true) {
        const data = {
            vendor: "",
            name: "",
            ip: "",
            port: null,
            config: "",
            mark: "",
            username: "",
        }
        if (addformData.vendor == "1") {
            data.vendor = "腾讯云"
        }
        if (addformData.vendor == "2") {
            data.vendor = "阿里云"
        }
        if (addformData.vendor == "3") {
            data.vendor = "华为云"
        }
        if (addformData.vendor == "4") {
            data.vendor = "百度云"
        }
        if (addformData.vendor == "5") {
            data.vendor = "网易云"
        }
        if (addformData.vendor == "6") {
            data.vendor = "京东云"
        }
        if (addformData.vendor == "7") {
            data.vendor = "其他"
        }
        data.ip = addformData.ip
        data.config = addformData.config
        data.mark = addformData.mark
        data.name = addformData.name
        data.port = Number(addformData.port)
        data.username = addformData.username

        socket.emit("addServer", JSON.stringify(data));
        socket.on("addServer", (msg) => {
            const data = JSON.parse(msg);
            if (data.type == "success") {
                MessagePlugin.success(data.msg)
                addVisible.value = false;
                getServer();
            } else {
                MessagePlugin.error(data.msg)
            }
        })
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
};

const deleteData = () => {
    if (deleteId.value != null) {
        socket.emit("delServer", deleteId.value)
        socket.on("delServer", (msg) => {
            const data = JSON.parse(msg)
            if (data.type == "success") {
                MessagePlugin.success(data.msg)
                getServer();
            } else {
                MessagePlugin.error(data.msg)
            }
        })
        delVisible.value = false;
    } else {
        MessagePlugin.error("删除失败")
        delVisible.value = false;
    }
}

const ontemSubmit = ({ validateResult, firstError, e }) => {
    e.preventDefault();
    if (validateResult === true) {
        openTerm();
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.warning(firstError);
    }
}

const openTerm = () => {
    const data = {
        ip: activeRow.value.ip,
        password: temformData.password,
        port: activeRow.value.port,
        username: activeRow.value.username,
    }
    router.push({
        name: "term",
        state: { data },
    })
}
</script>

<style scoped lang="less">
.table-scrollbar {
    margin-top: 10px;
}

.table-scrollbar ::-webkit-scrollbar {
    display: none;
}

.serinfo {
    margin: 0;
    margin-top: 10px;
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
</style>