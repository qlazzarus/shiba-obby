import { createReducer } from "@rbxts/rodux";
import { DebugActions, DebugState, TOGGLE_DISPLAY_KEYS_PRESSED, TOGGLE_DISPLAY_STATE } from "./types";

import state from "./initialState";

export const initialState = state;

export default createReducer<DebugState, DebugActions>(state, {
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
