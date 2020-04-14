import * as React from "react";
import "./style.scss";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1 className="hello">
    <div className="logo">
      <img src="assets/react.svg" alt="" />
    </div>
    Hello, {props.framework}
  </h1>
);
