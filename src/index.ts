import Vue from "vue";
import "vue-material/dist/theme/black-green-dark.css";
import "vue-material/dist/vue-material.min.css";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueRouter);

import App from "./vue/App.vue";
import NPC from "./vue/npcs/NPC/NPC.vue";

import { IRootState } from "./states";
import { base } from "./stores/base/index";

const store = new Vuex.Store<IRootState>({
    modules: {
        base,
    },
    state: {
        version: "1.0.0",
    },
});

// tslint:disable-next-line: no-var-requires
require("./initVueMaterial");
// tslint:disable-next-line: no-var-requires
(window as any).$ = require("jquery");
// tslint:disable-next-line: no-var-requires
(window as any).joint = require("jointjs");

const routes = [
    { path: "/npcdialogs", component: NPC },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

const newApp = new App({
    el: "#app",
    router,
    store,
});
