import * as React from "react";
import { Button } from './button';

export class SearchModeButton extends React.PureComponent {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        size='sm'
        color={this.props.active
          ? 'red'
          : 'gray'}
        className="search-mode-btn">{this.props.children}
      </Button>
    );
  }
}
