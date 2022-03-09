import { combineReducers, loggerMiddleware, Store, ThunkDispatcher, thunkMiddleware } from "@rbxts/rodux";
import debugReducer, { initialState as debugInitialState } from "./debug";
import type { DebugActions, DebugState } from "./debug/types";

const initialState = {
    debug: debugInitialState,
};

export interface AppState {
    debug: DebugState;
}

type AppActions = DebugActions;

const reducers = combineReducers<AppState, AppActions>({
    debug: debugReducer,
});

export default new Store<AppState, AppActions, ThunkDispatcher<AppState, AppActions>, typeof loggerMiddleware>(
    reducers,
    initialState,
    [thunkMiddleware, loggerMiddleware],
);
