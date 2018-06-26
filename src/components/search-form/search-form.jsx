import React from 'react';

export class SearchForm extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {this.props.children}
      </form>
    );
  }
}
