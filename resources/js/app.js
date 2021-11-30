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
import Pagination from "./components/common/Pagination";
import EditIcon from "./components/common/EditIcon";
import DeleteIcon from "./components/common/DeleteIcon";
import ViewIcon from "./components/common/ViewIcon";
import ConfirmDelete from "./components/common/ConfirmDelete";
import Datatables from "./components/common/datatables/Datatables";

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
app.component('edit-icon', EditIcon);
app.component('delete-icon', DeleteIcon);
app.component('view-icon', ViewIcon);
app.component('app-datatables', Datatables);
app.component('app-pagination', Pagination);
app.use(router);
app.use(store);
app.use(CKEditor);
app.mount("#app");