import * as React from "react";

export function Content(props) {
  return (
    <main className="main-content">
      {props.children}
    </main>
  );
}
