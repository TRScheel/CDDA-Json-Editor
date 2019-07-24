import Vue from "Vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-dark.css";

Vue.use(VueMaterial);
Vue.use(Vuex);
Vue.use(VueRouter);

import App from "./vue/App.vue";
import NPC from "./vue/npcs/NPC.vue";

import store from "./stores/store";

(window as any).$ = require("jquery");
(window as any).joint = require("jointjs");

const routes = [
    { path: "/npcs", component: NPC }
];

const router = new VueRouter({
    mode: "history",
    routes
});

const newApp = new App({
    el: "#app",
    router,
    store
});
