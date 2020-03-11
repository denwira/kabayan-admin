import { React, Component, Link } from "libraries";
import { View, Section } from "components";
import { IoIosRadioButtonOff } from 'react-icons/io';
import mainNav from 'routes/navigation.js';
class BaseSidebar extends Component {
  render() {
    console.log(mainNav)
    return (
      <aside className="sidebar" id="sidebar">
        <View className="sidebar__Inner">
          <View className="sidebar__brandTitle row">
            <h1>Brand Title</h1>
            <span><IoIosRadioButtonOff /></span>
          </View>
          <Section className="m-navigation">
              <View className="m-navigation__groupNav">
                <ul>
                  <li>
                    <View className="m-navigation__navItem">
                      <Link to="/">Dashboard</Link>
                    </View>
                  </li>
                  <li>
                    <View className="m-navigation__navItem active">
                        <Link to="/profile">Profile</Link>
                    </View>
                  </li>
                </ul>
              </View>
              <View className="m-navigation__mainNav row">
                {mainNav.map((value, index) => (
                  <View key={index} className="m-navigation__navItem">
                    <Link to={value.path}>
                      <span>{value.icons}</span>
                      <a href="##">{value.name}</a>
                    </Link>
                  </View>
                ))}
              </View>
          </Section>
        </View>
      </aside>
    );
  }
}

export default BaseSidebar;
