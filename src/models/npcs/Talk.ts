import { Guid } from "guid-typescript";
import ConditionalLine from "./ConditionalLine";
import SpeakerEffect from "./SpeakerEffect";

export default class Talk {
    public type: string = "talk_topic";
    public id: Guid | Guid[] | string | string[] = Guid.create();
    public dyanamic_line?: string | string[] | ConditionalLine = undefined;
    public speaker_effect?: SpeakerEffect = undefined;
    public responses?: Response[] = undefined;
}