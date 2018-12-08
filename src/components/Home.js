import React from "react";
import { View, Text, StyleSheet } from "react-native";

import NavigationTabs from "./NavigationTabs";

const HomeComponent = props => (
  <View style={Styles.container}>
    <Text>
      This is a prototype for stack based navigation, designed to prevent time
      invested in intrigating of react-native-navigation library by wix
    </Text>
    <NavigationTabs onStackPush_childProp1={props.onStackPush} />
  </View>
);

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20
  }
});

export default HomeComponent;
