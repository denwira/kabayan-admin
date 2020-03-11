import { React, Component } from "libraries";
import { Section, View } from "components";
import { IoMdCheckboxOutline } from "react-icons/io";

class BaseHeader extends Component {
  render() {
    return (
      <Section id="header" className="header">
        <View className="header__inner">
          <View className="header__inner--flex row">
            <View className="header__item">
              <span style={{ fontSize: 12 }}>March 11th 2020, 4:04:46 pm</span>
            </View>
            <View className="header__item">
              <View className="header__profile"></View>
            </View>
          </View>
        </View>
      </Section>
    );
  }
}

export default BaseHeader;
