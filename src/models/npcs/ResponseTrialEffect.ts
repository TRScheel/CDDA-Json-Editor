import { MissionEffect, StatEffect, CharacterEffect, TradeEffect, BehaviorEffect, EffectModifier } from "./Enums";

export default class ResponseTrialEffect {
    public topic: string = "";
    public effect?: MissionEffect | StatEffect | CharacterEffect | TradeEffect | BehaviorEffect |
                    MissionEffect[] | StatEffect[] | CharacterEffect[] | TradeEffect[] | BehaviorEffect[] |
                    Map<MissionEffect | StatEffect | CharacterEffect | TradeEffect | BehaviorEffect | EffectModifier, string | number | boolean>;
}