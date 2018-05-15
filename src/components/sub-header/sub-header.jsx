import * as React from "react";

export function SubHeader(props) {
  return (
    <div className="sub-header">
      <div className="container sub-header-container">
        {props.children}
      </div>
    </div>
  );
}
