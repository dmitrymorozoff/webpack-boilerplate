import { App } from "./app";
import { Home } from "./app/home";
import { About } from "./app/about";
import { NotFound } from "./app/not-found";

export const routes = [
    {
        component: App,
        routes: [
            {
                component: Home,
                path: "/",
                exact: true,
            },
            {
                component: About,
                path: "/about",
                exact: true,
            },
            {
                component: NotFound,
            },
        ],
    },
];
