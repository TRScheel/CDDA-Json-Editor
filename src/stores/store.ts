import Vue from "Vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./RootState";

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0"
    }
}

export default new Vuex.Store<RootState>(store);