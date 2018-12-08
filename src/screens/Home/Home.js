import { Navigation } from "react-native-navigation";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import NavigationTabs from "../../components/NavigationTabs";
import HomeComponent from "../../components/Home";
import TabLogic from "../../components/TabLogic";
class HomeScreen extends Component {
  gotoScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
        options: {
          customTransition: {
            duration: 0.8
          }
        }
      }
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <HomeComponent onStackPush={this.gotoScreen} />
        </ScrollView>
        <View style={{ marginRight: 20, marginLeft: 20 }}>
          {["Usage"].map((res, index) => (
            <TabLogic
              res={res}
              key={index}
              onStackPush_childProp2={this.gotoScreen}
            />
          ))}
        </View>
        <View style={{ marginRight: 20, marginLeft: 20 }}>
          {["About Me"].map((res, index) => (
            <TabLogic
              res={res}
              key={index}
              onStackPush_childProp2={this.gotoScreen}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default HomeScreen;
