<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="showSidebar = !showSidebar">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Cataclym: Dark Days Ahead Json Editor</span>
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="showSidebar" v-on:md-closed="$emit('hide-sidebar')">
                <md-toolbar class="md-transparent" md-elevation="0">Json Type</md-toolbar>
                <md-list :md-expand-single="true">
                    <md-list-item md-expand>
                        <md-icon>people</md-icon>
                        <span class="md-list-item-text">NPCs</span>
                        
                        <md-list slot="md-expand">
                            <md-list-item class="md-inset">New</md-list-item>
                            <md-list-item class="md-inset">Load</md-list-item>
                        </md-list>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>map</md-icon>
                        <span class="md-list-item-text">Map Generation</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>category</md-icon>
                        <span class="md-list-item-text">Items</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>local_dining</md-icon>
                        <span class="md-list-item-text">Recipes</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
            </md-app-content>
        </md-app>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { mapGetters, mapMutations } from "vuex";
    import { getters as baseGetterMethods } from "../stores/base/getters";
    import { mutations as baseMutationMethods } from "../stores/base/mutations";
    
    const namespace: string = "base";

    @Component({
        components: { },
        computed: {
            ...mapGetters(namespace, 
                Object.keys(baseGetterMethods)
            )
        },
        methods: {
            ...mapMutations(namespace,
                Object.keys(baseMutationMethods)
            )
        }
    })
    export default class App extends Vue {
        private showSidebar:boolean = false;
    }
</script>