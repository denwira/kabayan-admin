import { React, Component } from "libraries";
import { Container, Section, Anchor, Button, View } from "components";

import { BaseSidebar, BaseHeader } from "containers";

class BaseLayout extends Component {
  render() {
    return (
      <Container>
        <header className="header-wrap">
          <h1>{this.props.headerTitle}</h1>
        </header>
        <Section id="main-section" className="section-container">
          <View className="main-section-row">
            <BaseSidebar />
            <main className="main-section-content">
              <BaseHeader />
              {this.props.children}
            </main>
          </View>
        </Section>
      </Container>
    );
  }
}

export default BaseLayout;
