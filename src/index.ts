import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-dark.css";

Vue.use(Vuex);
Vue.use(VueRouter);

import App from "./vue/App.vue";
import NPC from "./vue/npcs/NPC.vue";

import { base } from "./stores/base/index";
import { RootState } from "./states";

const store = new Vuex.Store<RootState>({
    state: {
        version: '1.0.0'
    },
    modules: {
        base
    }
});

require("./initVueMaterial");
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
