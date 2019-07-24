import { Module } from 'vuex';
import { RootState, AppState } from '../../states';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const namespaced: boolean = true;

export const base: Module<AppState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
}