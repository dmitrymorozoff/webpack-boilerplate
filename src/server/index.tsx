import * as express from "express";
import { renderToString } from "react-dom/server";
import * as React from "react";
import { ViewsRoot } from "../client/views";
import { StaticRouter } from "react-router-dom";

const app = express();

app.use(
    express.static("client/assets", {
        maxAge: "30d",
    })
);

app.use(express.static("dist"));

app.get("*", (req, res) => {
    const context = {};
    res.send(
        renderToString(
            <StaticRouter location={req.url} context={context}>
                <ViewsRoot />
            </StaticRouter>
        )
    );
});

app.listen(4001, () => {
    console.info(`Server (${process.pid}) running on port ${4001}`);
});
