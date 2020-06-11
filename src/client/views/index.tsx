import { renderRoutes } from "react-router-config";
import { routes } from "./routes";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../services/redux";

export const ViewsRoot = () => {
    return <Provider store={store}>{renderRoutes(routes)}</Provider>;
};
