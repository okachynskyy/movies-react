import * as React from "react";

export function Header(props) {
  return (
    <header className="main-header">
      {props.children}
    </header>
  );
}
