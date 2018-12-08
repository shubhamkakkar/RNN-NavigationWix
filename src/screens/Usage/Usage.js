// remove this fiel

import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking
} from "react-native";

class Usage extends Component {
  hyperLink = linkUrl => (
    <TouchableOpacity onPress={() => Linking.openURL(linkUrl)}>
      <Text style={{ color: "blue" }}>{linkUrl}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            flex: 1,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", color: "#f50057" }}>
              Usage Procedure
            </Text>
            <Text style={Style.preInstallation}>1. Install Node.js</Text>
            {this.hyperLink("https://nodejs.org/en/download/")}
            <Text style={Style.preInstallation}>2. Install Git</Text>
            {this.hyperLink("https://git-scm.com/downloads")}
            <Text style={Style.preInstallation}>3. Install React.js</Text>
            {this.hyperLink("https://reactjs.org/")}
            <Text style={Style.preInstallation}>
              4. Install React-native.js
            </Text>
            {this.hyperLink("https://facebook.github.io/react-native/")}
            <Text style={Style.preInstallation}>
              5. Clone this repository from{" "}
            </Text>
            {this.hyperLink(
              "https://github.com/shubhamkakkar/RNN-NavigationWix.git"
            )}
            <View
              style={{
                marginBottom: 20,
                marginTop: 20,
                borderBottomColor: "black",
                borderBottomWidth: 0.5
              }}
            />
            <Text
              style={{ color: "#f50057", fontWeight: "bold", marginBottom: 10 }}
            >
              Once Cloned, Navigate in the folder git made
            </Text>
            <Text>Run the following commands</Text>
            <View style={{ margin: 10 }}>
              <Text style={Style.installCommands}>yarn / npm install</Text>
              <Text style={Style.installCommands}>react-native link</Text>
              <Text style={Style.installCommands}>
                react-native bundle --platform android --dev false --entry-file
                index.js --bundle-output
                android/app/src/main/assets/index.android.bundle --assets-dest
                android/app/src/main/res
              </Text>
              <Text style={Style.installCommands}>yarn / npm start</Text>
              <Text style={{ marginBottom: 10 }}>
                ---once the above command is executed, pausing at loading
                dependency graphs.
              </Text>
              <Text style={{ marginBottom: 10 }}>
                ---open another terminal in the same folder and RUN.
              </Text>
              <Text style={Style.installCommands}>
                react-native run-android
              </Text>
            </View>
          </View>
        </ScrollView>
        <View>
          <Text style={{ color: "#e91e63", textAlign: "center" }}>
            Use{" "}
            <Text style={{ color: "#4615b2", fontWeight: "bold" }}> sudo </Text>{" "}
            before every{" "}
            <Text style={{ color: "#4615b2", fontWeight: "bold" }}>
              yarn / npm
            </Text>{" "}
            command on` linux
          </Text>
          <Text style={{ color: "#e91e63", textAlign: "center" }}>
            Raise issue if any error occurs
          </Text>
        </View>
      </View>
    );
  }
}

export default Usage;

const Style = StyleSheet.create({
  preInstallation: {
    marginTop: 20
  },
  installCommands: {
    marginBottom: 10,
    padding: 10,
    shadowOpacity: 0.2, //darkness
    shadowRadius: 150, //spread
    shadowColor: "#651fff",
    elevation: 5,
    fontWeight: "bold"
  }
});
