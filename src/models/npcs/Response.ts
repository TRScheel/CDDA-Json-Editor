import ConditionalLine from "./ConditionalLine";
import { MissionEffect, StatEffect, CharacterEffect, TradeEffect, BehaviorEffect, EffectModifier } from "./Enums";
import TrueFalseText from "./TrueFalseText";
import Trial from "./Trial";
import ResponseTrialEffect from "./ResponseTrialEffect";

export default class Response {
    public text: string = "";
    public condition?: ConditionalLine;    
    public truefalsetext?: TrueFalseText;
    public trial?: Trial;
    public success?: ResponseTrialEffect;
    public failure?: ResponseTrialEffect;
    public effect?: MissionEffect | StatEffect | CharacterEffect | TradeEffect | BehaviorEffect |
                    MissionEffect[] | StatEffect[] | CharacterEffect[] | TradeEffect[] | BehaviorEffect[] |
                    Map<MissionEffect | StatEffect | CharacterEffect | TradeEffect | BehaviorEffect | EffectModifier, string | number | boolean>;
    public topic?: string;
    public switch?: boolean;
    public default?: boolean;
}