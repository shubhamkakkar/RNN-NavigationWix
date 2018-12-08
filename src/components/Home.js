import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";

import NavigationTabs from "./NavigationTabs";

const HomeComponent = props => (
  <View style={Styles.container}>
    <ScrollView>
      <Text style={{ fontWeight: "bold", color: "#f50057", fontSize: 15 }}>
        Description:
      </Text>
      <Text>
        This is a prototype for stack based navigation, designed to prevent time
        invested in intrigating of
      </Text>
      <TouchableOpacity onPress={props.linktoUrl}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://wix.github.io/react-native-navigation/#/")
          }
        >
          <Text style={{ color: "blue" }}>react-native-navigation by wix</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
    <View>
      <NavigationTabs onStackPush_childProp1={props.onStackPush} />
    </View>
  </View>
);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
