import React from "react";
import TabLogic from "./TabLogic";
import { View } from "react-native";

export default (NavigationTabs = props => (
  <View
    style={{
      flex: 1,
      marginTop: 20,
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center"
    }}
  >
    {["Tab1", "Tab2", "Tab3", "Tab4"].map((res, index) => (
      <TabLogic
        key={index}
        res={res}
        index={index}
        onStackPush_childProp2={props.onStackPush_childProp1}
      />
    ))}
  </View>
));
