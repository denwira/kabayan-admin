import { React, Component } from "libraries";

class BaseSidebar extends Component {
  render() {
    return (
      <aside className="sidebar" id="sidebar">
        {this.props.children}
      </aside>
    );
  }
}

export default BaseSidebar;
