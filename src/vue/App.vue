<template>
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        components: { }
    })
    export default class App extends Vue {
        name: string = "World";
    }
</script>