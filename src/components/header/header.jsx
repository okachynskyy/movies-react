import * as React from "react";
import { SiteName } from '../site-name';

export function Header(props) {
  return (
    <header className="main-header">
      <div className="container">
        <SiteName />
        {props.children}
      </div>
    </header>
  );
}
