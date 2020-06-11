import { createSlice } from "@reduxjs/toolkit";

export const settingsInititalState = {
    maintenance: false,
    isDeveloper: false,
};

const prefix = "SETTINGS";

const settingsSlice = createSlice({
    name: prefix,
    initialState: settingsInititalState,
    reducers: {
        setMaintenance: (state, action) => {
            state.maintenance = action.payload;
        },
    },
});

const { actions, reducer } = settingsSlice;
const { setMaintenance } = actions;

export const SettingsActions = {
    setMaintenance,
};

export const settingsReducer = reducer;
