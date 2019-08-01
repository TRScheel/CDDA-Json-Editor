import joint = require("jointjs");

export default class Canvas {
    public graph!: joint.dia.Graph;
    public paper!: joint.dia.Paper;

    public element!: Element;

    private prevPosition: { x: number, y: number} | undefined;
    private translate: { x: number, y: number} | undefined;

    constructor(containerElement: Element) {
        this.initialize(containerElement);

        this.registerEventHandlers();    }

    public clear() {
        this.graph.clear();
    }

    public addRect(translation: {x: number, y: number}, text: string) {
        const rect = this.baseRect;
        rect.translate(translation.x, translation.y);
        rect.attr("label/text", text);
        rect.addTo(this.graph);
    }

    public get baseRect(): joint.shapes.standard.Rectangle {
        const baseRect = new joint.shapes.standard.Rectangle();
        baseRect!.position(this.element.clientWidth / 2 - 200, 0);
        baseRect!.resize(400, 40);
        baseRect!.attr({
            body: {
                fill: "#2C3E50",
                rx: 5,
                ry: 5,
                strokeWidth: 2,
            },
            label: {
                fill: "#3498DB",
                fontSize: 18,
                fontVariant: "small-caps",
                fontWeight: "bold",
            },
        });

        return baseRect;
    }

    public get baseLink(): joint.shapes.standard.Link {
        const baseLink = new joint.shapes.standard.Link();
        baseLink!.router("orthogonal");
        baseLink!.connector("rounded");
        baseLink!.attr({
            line: {
                stroke: "gray",
            },
        });
        return baseLink;
    }

//#region Initializers
    private initialize(containerElement: Element) {
        this.graph = new joint.dia.Graph();

        this.element = containerElement;

        this.paper = new joint.dia.Paper({
            el: this.element,
            gridSize: 1,
            height: this.element.clientHeight,
            model: this.graph ,
            width: this.element.clientWidth,
        } as any);
    }

    private registerEventHandlers() {
        (this.paper! as any).on("blank:pointermove", this.onBlankPointerMove, this);

        (this.paper! as any).on("blank:pointerup", this.onBlankPointerUp, this);
    }
//#endregion

//#region EventHandlers
    private onBlankPointerMove(evt: any, x: number, y: number) {
        const curPosition = {x: evt.originalEvent.clientX, y: evt.originalEvent.clientY};

        if (!this.prevPosition || !this.translate) {
            this. prevPosition = {
                x: curPosition.x,
                y: curPosition.y,
            };
            this.translate = {
                x: this.paper.translate().tx,
                y: this.paper.translate().ty,
            };
        } else {
            this.paper.translate(
                this.translate.x + curPosition.x - this.prevPosition.x,
                this.translate.y + curPosition.y - this.prevPosition.y,
            );
        }
    }

    private onBlankPointerUp(evt: any, x: number, y: number) {
        this.prevPosition = undefined;
    }

//#endregion
}
