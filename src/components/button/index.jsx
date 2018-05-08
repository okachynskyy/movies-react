import * as React from "react";
import PropTypes from 'prop-types';
import style from './button.scss';
import classNames from 'classnames';

export class Button extends React.PureComponent {
  getClassNames = () => {
    const { size, color } = this.props;

    return classNames(style.btn, {
      [style['btn-sm']]: size === 'sm',
      [style['btn-md']]: size === 'md',
      [style['btn-lg']]: size === 'lg',
      [style['btn-white']]: color === 'white',
      [style['btn-gray']]: color === 'gray',
      [style['btn-red']]: color === 'red',
    }, this.props.className);
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        type="button"
        className={this.getClassNames()}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['white', 'gray', 'red']),
  onClick: PropTypes.func
};
