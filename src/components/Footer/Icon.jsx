import React from "react";

class Icon extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.string.isRequired,
      href: React.PropTypes.string.isRequired,
      src: React.PropTypes.string.isRequired,
      target: React.PropTypes.string
    };
  }

  render() {
    return (
      <div className="icon-container">
        <div className="icon">
          <img className="footer-icon" src={ this.props.src }></img>
          <a target={ this.props.target } href={ this.props.href }>{ this.props.children }</a>
        </div>
      </div>
    );
  }
}

export default Icon;
