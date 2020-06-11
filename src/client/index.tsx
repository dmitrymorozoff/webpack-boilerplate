import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ViewsRoot } from "./views";
import "regenerator-runtime/runtime";

ReactDOM.render(
    <BrowserRouter>
        <ViewsRoot />
    </BrowserRouter>,
    document.getElementById("root")
);
