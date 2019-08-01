import Vue from "vue";
import Component from "vue-class-component";

import Canvas from "../../../models/jointjs/Canvas";
import Talk from "../../../models/npcs/Talk";

@Component({
    components: { },
})
export default class NPC extends Vue {
    public dialogs: Talk[] = [ new Talk() ];
    public menuVisible: boolean = false;

    private canvas!: Canvas;

    public mounted() {
        this.canvas = new Canvas(this.$refs.paperContainer as Element);

        this.createTalkDiagram();
    }

    public loadFile() {
        const file = ((this.$refs.fileinput as any).files as FileList)[0];

        if (!!file) {
            const reader = new FileReader();
            const vueInstance = this;
            reader.onload = () => vueInstance.parseDialog(reader.result as string);
            reader.readAsText(file);
        }

    }

    public createTalkDiagram() {
        this.canvas.clear();

        for (let i: number = 0; i < this.dialogs.length; i++) {
            if (this.dialogs[i].type !== "talk_topic") { continue; } // break out if this isnt a talk topic
            const isArray = Array.isArray(this.dialogs[i].id);
            let title: string = isArray ?
                    (this.dialogs[i].id as string[])[0] :
                    this.dialogs[i].id as string;

            title = [
                isArray ? "[" : "",
                title.length > 36 ? `${title.substring(0, 30)}...` : title,
                isArray ? `, +${(this.dialogs[i].id as string[]).length}]` : "",
            ].join("");

            this.canvas.addRect({x: 0, y: i * 100}, title);
        }
    }

    public parseDialog(dialog: string) {
        const temp = (JSON.parse(dialog) as Talk[]);
        this.dialogs = temp.filter((x) => x.type === "talk_topic" );
        this.createTalkDiagram();
    }

    public uploadFile() {
        if (this.$refs.fileinput) {
            (this.$refs.fileinput as any).click();
        }
    }
}
