<template>
    <div>    
        <md-card-header>
            <md-card-header-text>
                <div class="md-subtitle">
                    <md-icon>flag</md-icon>
                    {{ conditional[0] }}
                </div>
            </md-card-header-text>
            <md-menu md-size="big" md-direction="bottom-end">
                <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>add_circle_outline</md-icon>
                </md-button>

                <md-menu-content>
                    <md-menu-item @click="addConditional(conditional[0])">
                        <span>Condition</span>
                        <md-icon>flag</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                        <span>String</span>
                        <md-icon>short_text</md-icon>
                    </md-menu-item>
                </md-menu-content>
            </md-menu>
        </md-card-header>
        <md-card-content>
            <Condition v-if="conditional[1] instanceof (Map)" :conditional="conditional[1]" />
            <div v-else-if="Array.isArray(conditional[1])">
                <div v-bind:key="idx" v-for="(con, idx) in conditional[1]">
                    {{ con }}
                </div>
            </div>
            <div v-else>
                {{ conditional[1] }}
            </div>
        </md-card-content>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component";
    import { Prop, Emit } from "vue-property-decorator";
    import ConditionalLine from '../../models/npcs/ConditionalLine';

    @Component({
        components: { Condition }
    })
    export default class Condition extends Vue {
        @Prop({required: true}) public conditional!:ConditionalLine;

        @Emit() addConditional(parent: ConditionalLine) { }
    };
</script>

<style lang="scss" scoped>

</style>


