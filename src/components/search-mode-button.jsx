import * as React from "react";
import {Button} from './button';

export class SearchModeButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        className={"btn-sm search-mode-btn " + (this.props.active
        ? 'btn-red'
        : 'btn-gray')}>{this.props.children}</Button>
    );
  }
}
