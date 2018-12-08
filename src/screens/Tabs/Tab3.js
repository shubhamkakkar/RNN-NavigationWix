import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Tab3 extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.raised}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              color: "#f50057"
            }}
          >
            Heading
          </Text>
          <Text style={{ textAlign: "center" }}>
            Est ad laboris ea incididunt aliqua. Cillum id est aute nulla
            commodo dolore magna officia anim enim deserunt in et. In consequat
            eu pariatur pariatur quis nulla. Lorem est magna Lorem labore ex
            ullamco deserunt pariatur occaecat id sunt. Consectetur velit qui
            sit adipisicing.
          </Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  raised: {
    marginLeft: 30,
    marginRight: 30,
    padding: 20,
    shadowOpacity: 0.2, //darkness
    shadowRadius: 150, //spread
    shadowColor: "#651fff",
    // shadowOffset: { width: 10, height: 10 },
    elevation: 5,
    borderRadius: 10
  }
});

export default Tab3;
