import { createReducer } from "@rbxts/rodux";
import { DebugActions, DebugState, TOGGLE_DISPLAY_KEYS_PRESSED, TOGGLE_DISPLAY_STATE } from "./types";

import initialState from "./initialState";

export default createReducer<DebugState, DebugActions>(initialState, {
    [TOGGLE_DISPLAY_KEYS_PRESSED]: (state) => {
        return {
            ...state,
            display_keys_pressed: !state.display_keys_pressed,
        };
    },
    [TOGGLE_DISPLAY_STATE]: (state) => {
        return {
            ...state,
            display_state: !state.display_state,
        };
    },
});
