import { Navigation } from "react-native-navigation";

import Home from "./src/screens/Home/Home";
import Tab1 from "./src/screens/Tabs/Tab1";
import Tab2 from "./src/screens/Tabs/Tab2";
import Tab3 from "./src/screens/Tabs/Tab3";
import Tab4 from "./src/screens/Tabs/Tab4";

import About from "./src/screens/AboutMe/AboutMe";

// registering screens
Navigation.registerComponent("HomeScreen", () => Home);
Navigation.registerComponent("Tab1", () => Tab1);
Navigation.registerComponent("Tab2", () => Tab2);
Navigation.registerComponent("Tab3", () => Tab3);
Navigation.registerComponent("Tab4", () => Tab4);
Navigation.registerComponent("About Me", () => About);

// Start a App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: "AppRoot",
        children: [
          {
            component: {
              id: "HomeScreen",
              name: "HomeScreen"
            }
          }
        ],
        options: {
          topBar: {
            title: {
              text: "Stack Navigation"
            }
          }
        }
      }
    }
  });
});

Navigation.setDefaultOptions({
  animations: {
    setRoot: {
      enabled: "true" | "false", // Optional, used to enable/disable the animation
      alpha: {
        from: 0,
        to: 1,
        duration: 400,
        startDelay: 100,
        interpolation: "accelerate"
      }
    }
  }
});
