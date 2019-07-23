import App from "./vue/App.vue";
import Vue from "Vue";
import VueMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-dark.css";

Vue.use(VueMaterial);

const newApp = new App({
    el: "#app",
});
