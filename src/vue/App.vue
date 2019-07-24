<template>
    <div class="md-layout">
        <Sidebar />
        <div class="md-layout-item">
            <div>Hello {{name}}!</div>
            Name: <input v-model="name" type="text">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "Vue";
    import Component from "vue-class-component";
    import Sidebar from "./base/Sidebar.vue";

    @Component({
        components: { Sidebar }
    })
    export default class App extends Vue {
        name: string = "World";
    }
</script>