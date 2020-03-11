import { React, Component } from "libraries";
import { Section, View } from "components";

class BaseHeader extends Component {
  render() {
    return (
      <Section id="header" className="header">
        <View className="header__inner">
          <View className="header__inner--flex row">
            <View className="header__item">
              <h1>Kiri</h1>
            </View>
            <View className="header__item">
              <h1>Kanan</h1>
            </View>
          </View>
        </View>
      </Section>
    );
  }
}

export default BaseHeader;
