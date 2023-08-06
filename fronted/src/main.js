import { createApp } from 'vue'
import './assets/border.less'
import "./assets/reset.less"
import "./assets/base.less"
import App from './App.vue'
import 'tdesign-vue-next/es/style/index.css';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
