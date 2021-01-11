import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class DefaultLogoIcon extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const { dark, height, width } = this.props;
    return (
      <svg
        className={cx("Icon", { "text-brand": !dark }, { "text-white": dark })}
        viewBox="0 0 75 85"
        width={width}
        height={height}
        fill="currentcolor"
      > 
        <path d="M25.28,53.66h8.37v8.45H25.28Zm11.17,0H56v8.45H36.45ZM14.12,42.4h8.37v8.45H14.12Zm11.16,0h8.37v8.45H25.28Zm11.17,0H72.89V73.54H36.45V65.09H58.77V50.85H36.45ZM14.12,19.88h8.37V39.59H14.12ZM2.79,2.82H33.65V39.59H25.28V16.89H11.16V39.42H2.79ZM0,0V42.4H11.16V53.66H22.49V64.93H33.65V76.19h42V39.59H36.45V0Z" />

      </svg>
    );
  }
}

export default function LogoIcon(props) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
