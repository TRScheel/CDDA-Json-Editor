<template>
    <div class="md-layout-item md-size-15">
        Sidebar
    </div>
</template>

<script lang="ts">
    import Vue from "Vue";
    import Component from "vue-class-component";

    @Component({
        components: { }
    })
    export default class Sidebar extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "~vue-material/dist/theme/engine";

    .md-layout-item {
        height: 40px;
    }
</style>