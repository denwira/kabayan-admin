import { React, Component } from "libraries";
import { Container, Section, Anchor, Button, View } from "components";

import { BaseSidebar } from "containers";

class BaseLayout extends Component {
  render() {
    return (
      <Container>
        <header className="header-wrap">
          <h1>{this.props.headerTitle}</h1>
        </header>
        <Section id="main-section" className="section-container">
          <View className="main-section-row">
            <BaseSidebar>
              <Button variant="primary">Click Me</Button>
              <Button>Click Me</Button>
              <View className="header-logo">
                <Anchor className="btn btn-primary">Button</Anchor>
              </View>
            </BaseSidebar>
            <main className="main-section-content">{this.props.children}</main>
          </View>
        </Section>
      </Container>
    );
  }
}

export default BaseLayout;
