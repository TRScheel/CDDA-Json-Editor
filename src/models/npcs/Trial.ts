import { TrialType, Modifier } from "./Enums";
import ConditionalLine from "./ConditionalLine";

export default class Trial {
    public type: TrialType = TrialType.NONE;
    public difficulty?: number;
    public condition?: ConditionalLine;
    public mod?: [Modifier, number][];
}