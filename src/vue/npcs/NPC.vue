<template>
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>
</template>

<script lang="ts">
    import Vue from "Vue";
    import Component from "vue-class-component";

    @Component({
        components: { }
    })
    export default class NPC extends Vue {
        name: string = "World";
    }
</script>