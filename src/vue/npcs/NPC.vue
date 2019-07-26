<template>
    <div class="container">
         <md-speed-dial class="speed-dial" md-direction="bottom">
            <md-speed-dial-target class="md-primary">
                <md-icon>more_vert</md-icon>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <md-button class="md-icon-button">
                    <md-icon>add</md-icon>
                    <md-tooltip md-direction="right">New</md-tooltip>
                </md-button>

                <md-button class="md-icon-button" @click="uploadFile()">
                    <md-icon>cloud_upload</md-icon>
                    <md-tooltip md-direction="right">Upload</md-tooltip>
                    <input ref="fileinput" type="file" accept="*.json" style="display: none" @change="loadFile" />
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>cloud_download</md-icon>
                    <md-tooltip md-direction="right">Download</md-tooltip>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>
        <div class="content">
            <md-card v-bind:key="dialog.id" v-for="dialog in dialogs" class="md-primary" md-with-hover>
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{ dialog.id }}</div>
                    </md-card-header-text>
                        
                </md-card-header>
                <md-card-expand>

                    <md-card-expand-content>
                        <md-card-content>
                            
                        </md-card-content>
                    </md-card-expand-content>
                    <md-card-actions md-alignment="space-between">
                        <div>
                            <md-button>
                                <md-icon>add</md-icon>
                                Dynamic Line
                            </md-button>
                            <md-button>
                                <md-icon>add</md-icon>
                                Speaker Effect
                            </md-button>
                            <md-button>
                                <md-icon>add</md-icon>
                                Response
                            </md-button>
                        </div>

                        <md-card-expand-trigger>
                            <md-button class="md-icon-button">
                                <md-icon>keyboard_arrow_down</md-icon>
                            </md-button>
                        </md-card-expand-trigger>
                    </md-card-actions>
                </md-card-expand>
            </md-card>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Talk from "../../models/npcs/Talk";

    @Component({
        components: { }
    })
    export default class NPC extends Vue {
        public dialogs:Talk[] = [ new Talk() ];

        loadFile() {
            let file = ((this.$refs.fileinput as any).files as FileList)[0];
            
            if (!!file) {                
                let reader = new FileReader();
                let vueInstance = this;
                reader.onload = function(e) {
                    vueInstance.parseDialog(reader.result as string);
                }
                
                reader.readAsText(file);
            }

        };

        parseDialog(dialog:string) {
            this.dialogs = (JSON.parse(dialog) as Talk[]);
        }

        uploadFile() {
            if (this.$refs.fileinput) {
                (this.$refs.fileinput as any).click();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .speed-dial {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .container {
        position: relative;
    }

    .content {
        z-index: 1;
        margin-left: 5vw;
    }  
</style>
