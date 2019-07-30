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

                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>cloud_download</md-icon>
                    <md-tooltip md-direction="right">Download</md-tooltip>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>
        <div class="content" ref="paperContainer">
            
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
    import Condition from "./Condition.vue";
    import jointTS from "jointjs";
    let joint = require("jointjs");

    @Component({
        components: { Condition }
    })
    export default class NPC extends Vue {
        public dialogs:Talk[] = [ new Talk() ];
        public menuVisible:boolean = false;

        private baseRect?:joint.shapes.standard.Rectangle;
        private baseLink?: joint.shapes.standard.Link;

        private graph?:joint.dia.Graph;
        private paper?:joint.dia.Paper;

        private element?:Element;

        mounted() {
            // this will be pulled out into a separate object once I'm done here
            this.graph = new joint.dia.Graph;

            this.element = this.$refs.paperContainer as Element;

            this.paper = new joint.dia.Paper({
                el: this.$refs.paperContainer,
                model: this.graph ,
                width: this.element.clientWidth,
                height: this.element.clientHeight,
                gridSize: 1
            } as any);

            let prevPosition:{x: number, y:number} | undefined = undefined;
            let curPosition:{x: number, y:number} | undefined = undefined;
            let translate:{x: number, y:number} | undefined = undefined;
            
            let innerPaper = this.paper!;

            (this.paper! as any).on('blank:pointermove',
                function(evt:any, x:number, y:number) {
                    let curPosition = {x: evt.originalEvent.clientX, y: evt.originalEvent.clientY};

                    if (!prevPosition || !translate){
                        prevPosition = {
                            x: curPosition.x,
                            y: curPosition.y
                        };
                        translate = {
                            x: innerPaper.translate().tx,
                            y: innerPaper.translate().ty
                        };
                    } else {
                        innerPaper.translate(
                            translate.x + curPosition.x - prevPosition.x,
                            translate.y + curPosition.y - prevPosition.y
                        );
                    }
                }
            );

            (this.paper! as any).on('blank:pointerup',
                function(evt:any, x:number, y:number) {
                    prevPosition = undefined;
                }
            );

            this.baseRect = new joint.shapes.standard.Rectangle();
            this.baseRect!.position(this.element.clientWidth / 2 - 200, 0);
            this.baseRect!.resize(400, 40);
            this.baseRect!.attr({
                body: {
                    fill: '#2C3E50',
                    rx: 5,
                    ry: 5,
                    strokeWidth: 2
                },
                label: {
                    fill: '#3498DB',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontVariant: 'small-caps'
                }
            });

            this.baseLink = new joint.shapes.standard.Link();
            this.baseLink!.router('orthogonal');
            this.baseLink!.connector('rounded');
            this.baseLink!.attr({
                line: {
                    stroke: 'gray'
                }
            });

            this.createTalkDiagram();
        }

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

        createTalkDiagram() {
            this.graph!.clear();

            for(let i:number = 0; i < this.dialogs.length; i++) {  
                if (this.dialogs[i].type !== "talk_topic") continue; // break out if this isnt a talk topic
                
                let rect = this.baseRect!.clone() as joint.shapes.standard.Rectangle;
                rect.translate(0, i * 100);

                let isArray = Array.isArray(this.dialogs[i].id);

                let title:string = isArray ? 
                        (this.dialogs[i].id as string[])[0] :
                        this.dialogs[i].id as string;

                title = [
                    isArray ? "[" : "",
                    title.length > 36 ? `${title.substring(0, 30)}...` : title,
                    isArray ? `, +${(this.dialogs[i].id as string[]).length}]` : ""
                ].join('');

                rect.attr("label/text", title);
                rect.addTo(this.graph!);
            }
        }

        parseDialog(dialog:string) {
            let temp = (JSON.parse(dialog) as Talk[]);
            this.dialogs = temp.filter(x => x.type === "talk_topic" );
            this.createTalkDiagram();
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
        height: 100%;
        width: 100%
    }

    .content {
        z-index: 1;
        height: 90%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url("/imgs/grid.png");
    }  
</style>
