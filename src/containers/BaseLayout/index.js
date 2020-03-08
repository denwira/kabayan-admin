import React, { Component } from "react";

class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <header className="header-wrap">
          <h1>{this.props.headerTitle}</h1>
        </header>
        <section id="main-section" className="section-container">
          <div className="main-section-wrapper">
            <main className="main-section-content">{this.props.children}</main>
            <aside className="main-section-sidebar">
              <h1>Sidebar</h1>
            </aside>
          </div>
        </section>
      </div>
    );
  }
}

export default BaseLayout;
