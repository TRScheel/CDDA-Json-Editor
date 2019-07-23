import ConditionalLine from "./ConditionalLine"
import { MissionEffect, StatEffect, CharacterEffect, TradeEffect, BehaviorEffect, EffectModifier } from "./Enums";
import { Guid } from "guid-typescript";

export default class SpeakerEffect {
    public sentinel: string | Guid = Guid.create();
    public condition?: ConditionalLine;
    public effect?: MissionEffect | StatEffect | CharacterEffect | TradeEffect | BehaviorEffect |
                    MissionEffect[] | StatEffect[] | CharacterEffect[] | TradeEffect[] | BehaviorEffect[] |
                    Map<MissionEffect | StatEffect | CharacterEffect | TradeEffect | BehaviorEffect | EffectModifier, string | number | boolean>;
}