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
            <md-card v-bind:key="idx" v-for="(dialog, idx) in dialogs" class="md-primary" md-with-hover>
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{ dialog.id }}</div>
                    </md-card-header-text>
                    <md-menu md-size="big" md-direction="bottom-end">
                        <md-button class="md-icon-button" md-menu-trigger>
                            <md-icon>add_circle_outline</md-icon>
                        </md-button>

                        <md-menu-content>
                            <md-menu-item>
                                <span>Dynamic Line</span>
                                <md-icon>record_voice_over</md-icon>
                            </md-menu-item>

                            <md-menu-item @click="addSpeakerEffect(dialog)">
                                <span>Speaker Effect</span>
                                <md-icon>surround_sound</md-icon>
                            </md-menu-item>

                            <md-menu-item>
                                <span>Response</span>
                                <md-icon>message</md-icon>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>
                </md-card-header>
                <md-card-expand>
                    <md-card-expand-content>
                        <md-card-content>
                            <md-card v-if="!!dialog.speaker_effect">
                                <md-card-header>
                                    <md-card-header-text>
                                        <div class="md-subtitle">
                                            <md-icon>surround_sound</md-icon>
                                            {{ dialog.speaker_effect.sentinel }}
                                        </div>
                                    </md-card-header-text>
                                    <md-menu md-size="big" md-direction="bottom-end">
                                        <md-button class="md-icon-button" md-menu-trigger>
                                            <md-icon>add_circle_outline</md-icon>
                                        </md-button>

                                        <md-menu-content>
                                            <md-menu-item @click="addCondition(dialog.speaker_effect)">
                                                <span>Condition</span>
                                                <md-icon>flag</md-icon>
                                            </md-menu-item>

                                            <md-menu-item>
                                                <span>Effect</span>
                                                <md-icon>notifications</md-icon>
                                            </md-menu-item>
                                        </md-menu-content>
                                    </md-menu>
                                </md-card-header>
                                <md-card-content>
                                    <md-card v-if="!!dialog.speaker_effect.condition">
                                        <div v-bind:key="conid" v-for="(con, conid) in dialog.speaker_effect.condition">    
                                            <md-card-header>
                                                <md-card-header-text>
                                                    <div class="md-subtitle">
                                                        <md-icon>flag</md-icon>
                                                        {{ con[0] }}
                                                    </div>
                                                </md-card-header-text>
                                            </md-card-header>
                                            <md-card-content>
                                                {{ con[1] }}
                                            </md-card-content>
                                        </div>
                                    </md-card>
                                </md-card-content>
                            </md-card>
                        </md-card-content>
                    </md-card-expand-content>
                    <md-card-actions md-alignment="space-between">
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
    import SpeakerEffect from "../../models/npcs/SpeakerEffect";
import ConditionalLine from "../../models/npcs/ConditionalLine";
import { SimpleConditional, DeclarativeConditional } from "../../models/npcs/Enums";

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

        }

        parseDialog(dialog:string) {
            this.dialogs = (JSON.parse(dialog) as Talk[]);
        }

        uploadFile() {
            if (this.$refs.fileinput) {
                (this.$refs.fileinput as any).click();
            }
        }

        addSpeakerEffect(parent:Talk) {
            parent.speaker_effect = new SpeakerEffect();
        }

        addCondition(parent:SpeakerEffect) {
            parent.condition = new ConditionalLine();
            parent.condition.set(SimpleConditional.u_male, "");
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
