require("./bootstrap");
require('alpinejs');

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import CKEditor from '@ckeditor/ckeditor5-vue';
import routes from './routes.js';

import { store } from './store/app';

const router = createRouter({
    history: createWebHistory(),
    routes: routes.routes,
});

import TheApp from "./base/components/TheApp.vue";
import Dashboard from "./components/Dashboard.vue";
import Home from "./components/Home.vue";
import Status from "./components/common/Status";
import Required from "./components/common/Required";
import InputError from "./components/common/InputError";
import ConfirmDelete from "./components/common/ConfirmDelete";

const app = createApp({
    components: {
        TheApp,
        Dashboard,
        Home,
    }
});
app.component('app-status', Status);
app.component('app-confirm-delete', ConfirmDelete);
app.component('app-required', Required);
app.component('app-input-error', InputError);
app.use(router);
app.use(store);
app.use(CKEditor);
app.mount("#app");