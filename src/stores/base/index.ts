import { Module } from "vuex";
import { IAppState, IRootState } from "../../states";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";

const namespaced: boolean = true;

export const base: Module<IAppState, IRootState> = {
    actions,
    getters,
    mutations,
    namespaced,
    state,
};
