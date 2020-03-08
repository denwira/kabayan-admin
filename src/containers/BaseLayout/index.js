import { React, Component } from "libraries";
import { Container, Section } from "components";
import { BaseSidebar } from "containers";

class BaseLayout extends Component {
  render() {
    return (
      <Container>
        <header className="header-wrap">
          <h1>{this.props.headerTitle}</h1>
        </header>
        <Section id="main-section" className="section-container">
          <div className="main-section-row">
            <BaseSidebar>
              <h1>Ini Sidebar</h1>
            </BaseSidebar>
            <main className="main-section-content">{this.props.children}</main>
          </div>
        </Section>
      </Container>
    );
  }
}

export default BaseLayout;
