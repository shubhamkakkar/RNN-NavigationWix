import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default (TabLogic = props => (
  <View
    key={props.index}
    style={{
      flexDirection: "column"
    }}
  >
    <TouchableOpacity
      style={styles.buttonStyles}
      onPress={() => props.onStackPush_childProp2(props.res)}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center"
        }}
      >
        {props.res}
      </Text>
    </TouchableOpacity>
  </View>
));

const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#651fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#651fff",
    margin: 10,
    flexDirection: "column"
  }
});
