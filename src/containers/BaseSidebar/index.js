import { React, Component, Link } from "libraries";
import { View, Section } from "components";
import { IoIosRadioButtonOff } from 'react-icons/io'
class BaseSidebar extends Component {
  render() {
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
                      <Link to="/"><a>Dashboard</a></Link>
                    </View>
                  </li>
                  <li>
                    <View className="m-navigation__navItem active">
                        <Link to="/profile"><a>Profile</a></Link>
                    </View>
                  </li>
                </ul>
              </View>
              <View className="m-navigation__mainNav row">
                <View className="m-navigation__navItem">
                  <Link> <span><IoIosRadioButtonOff /></span> <a>Menu 1</a></Link>
                  </View>
                <View className="m-navigation__navItem">
                  <Link> <span><IoIosRadioButtonOff /></span> <a>Menu 2</a></Link>
                  </View>
                <View className="m-navigation__navItem">
                  <Link> <span><IoIosRadioButtonOff /></span> <a>Menu 3</a></Link>
                  </View>
                <View className="m-navigation__navItem">
                  <Link> <span><IoIosRadioButtonOff /></span> <a>Menu 4</a></Link>
                  </View>
                <View className="m-navigation__navItem">
                  <Link> <span><IoIosRadioButtonOff /></span> <a>Menu 5</a></Link>
                  </View>
              </View>
          </Section>
        </View>
      </aside>
    );
  }
}

export default BaseSidebar;
