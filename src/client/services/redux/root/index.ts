import { settingsReducer } from "./settings/slices";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    settings: settingsReducer,
});
