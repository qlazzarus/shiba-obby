import { combineReducers, loggerMiddleware, Store, thunkMiddleware } from "@rbxts/rodux";
import debugReducer from "./debug";
import type { DebugActions, DebugState } from "./debug/types";

const initialState = {};

const reducers = combineReducers({
    debug: debugReducer,
});

export interface AppState {
    debug: DebugState;
}

type AppActions = DebugActions;

export default new Store<AppState, AppActions, [typeof loggerMiddleware /*, typeof thunkMiddleware*/]>(
    reducers,
    initialState,
    [loggerMiddleware /*, thunkMiddleware */],
);
