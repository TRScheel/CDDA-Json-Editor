export enum DeclarativeConditional {
    "give_hint",
    "level"
}

export enum SimpleConditional {
	"u_male",
	"u_female",
	"npc_male",
	"npc_female",
	"has_no_assigned_mission",
	"has_assigned_mission",
	"has_many_assigned_missions",
	"has_no_available_mission",
	"has_available_mission",
	"has_many_available_missions",
	"mission_complete",
	"mission_incomplete",
	"npc_available",
	"npc_following",
	"npc_friend",
	"npc_hostile",
	"npc_train_skills",
	"npc_train_styles",
	"at_safe_space",
	"is_day",
	"npc_has_activity",
	"is_outside",
	"u_has_camp",
	"u_can_stow_weapon",
	"npc_can_stow_weapon",
	"u_has_weapon",
	"npc_has_weapon",
	"u_driving",
	"npc_driving",
	"has_pickup_list",
	"is_by_radio",
    "has_reason"
}

export enum ComplexConditional {
    "u_has_any_trait",
	"npc_has_any_trait",
	"u_has_trait",
	"npc_has_trait",
	"u_has_trait_flag",
	"npc_has_trait_flag",
	"npc_has_class",
	"u_has_mission",
	"u_has_strength",
	"npc_has_strength",
	"u_has_dexterity",
	"npc_has_dexterity",
	"u_has_intelligence",
	"npc_has_intelligence",
	"u_has_perception",
	"npc_has_perception",
	"u_is_wearing",
	"npc_is_wearing",
	"u_has_item",
	"npc_has_item",
	"u_has_items",
	"npc_has_items",
	"u_has_item_category",
	"npc_has_item_category",
	"u_has_bionics",
	"npc_has_bionics",
	"u_has_effect",
	"npc_has_effect",
	"u_need",
	"npc_need",
	"u_at_om_location",
	"npc_at_om_location",
	"npc_role_nearby",
	"npc_allies",
	"npc_service",
	"u_has_cash",
	"u_are_owed",
	"npc_aim_rule",
	"npc_engagement_rule",
	"npc_rule",
	"npc_override",
	"npc_cbm_reserve_rule",
	"npc_cbm_recharge_rule",
	"days_since_cataclysm",
	"is_season",
	"mission_goal",
	"u_has_var",
	"npc_has_var"
}

export enum OperatorConditional {
    "not",
    "and",
    "or"
}

export enum MissionEffect {
    "assign_mission",
    "mission_success",
    "mission_failure",
    "clear_mission",
    "mission_reward"
}

export enum StatEffect {
    "give_aid",
    "give_aid_all",
    "buy_haircut",
    "buy_shave",
    "morale_chat",
    "player_weapon_away",
    "player_weapon_drop"
}

export enum CharacterEffect {
    "u_add_effect",
    "u_add_trait",
    "u_lose_effect",
    "u_lose_trait",
    "u_add_var",
    "u_lose_var",
    "npc_add_effect",
    "npc_add_trait",
    "npc_lose_effect",
    "npc_lose_trait",
    "npc_add_var",
    "npc_lose_var",
    "barber_hair",
    "barber_beard"
}

export enum TradeEffect {
    "start_trade",
    "buy_10_logs",
    "buy_100_logs",
    "give_equipment",
    "npc_gets_item",
    "npc_gets_item_to_use",
    "u_buy_item",
    "u_sell_item",
    "u_bulk_trade_accept",
    "npc_bulk_trade_accept",
    "u_bulk_donate",
    "npc_bulk_donate",
    "u_spend_cash",
    "add_debt",
    "u_consume_item",
    "npc_consume_item",
    "u_remove_item_with",
    "npc_remove_item_with"
}

export enum BehaviorEffect {
    "assign_guard",
    "stop_guard",
    "start_camp",
    "recover_camp",
    "remove_overseer",
    "wake_up",
    "reveal_stats",
    "end_conversation",
    "insult_combat",
    "hostile",
    "flee",
    "follow",
    "leave",
    "follow_only",
    "stop_following",
    "npc_thankful",
    "drop_weapon",
    "stranger_neutral",
    "start_mugging",
    "lead_to_safety",
    "start_training",
    "companion_mission",
    "basecamp_mission",
    "bionic_install",
    "bionic_remove",
    "npc_class_change",
    "npc_faction_change",
    "u_faction_rep",
    "toggle_npc_rule",
    "set_npc_rule",
    "clear_npc_rule",
    "set_npc_engagement_rule",
    "set_npc_aim_rule",
    "npc_die"
}

export enum EffectModifier {

}

export enum TrialType {
    "NONE", 
    "LIE", 
    "PERSUADE", 
    "INTIMIDATE", 
    "CONDITION"
}

export enum Modifier {
    "ANGER", 
    "FEAR", 
    "TRUST", 
    "VALUE", 
    "AGRESSION", 
    "ALTRUISM", 
    "BRAVERY", 
    "COLLECTOR", 
    "POS_FEAR", 
    "TOTAL"
}