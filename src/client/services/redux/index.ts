import { rootReducer } from "./root";
import { configureStore, compose } from "@reduxjs/toolkit";

let composeEnhancers: any;
if (typeof window !== "undefined") {
    composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

export const store = configureStore({
    reducer: rootReducer,
    // enhancers: [composeEnhancers],
});
