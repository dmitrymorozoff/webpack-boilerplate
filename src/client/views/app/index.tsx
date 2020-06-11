import * as React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Link } from "react-router-dom";

interface IProps {
    route: RouteConfig;
}

export const App: React.FC<IProps> = ({ route }) => {
    return (
        <div>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </ul>
            {renderRoutes(route.routes)}
        </div>
    );
};
