import React, { Component } from "react";
import PropTypes from "prop-types";

class ToogleInputType extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    initialType: PropTypes.string.isRequired,
    toggleTo: PropTypes.string.isRequired,
    initialIcon: PropTypes.string.isRequired,
    toggleIcon: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
  };

  state = {
    type: this.props.initialType,
    icon: this.props.initialIcon
  };

  handleToggleInput = () => {
    const { initialType, toggleTo, initialIcon, toggleIcon } = this.props;
    this.setState(prevState => {
      return {
        type: prevState.type === initialType ? toggleTo : initialType,
        icon: prevState.icon === initialIcon ? toggleIcon : initialIcon
      };
    });
  };

  render() {
    const actions = {
      handleToggleInput: this.handleToggleInput
    };
    return this.props.children(this.state, actions);
  }
}

export default ToogleInputType;
