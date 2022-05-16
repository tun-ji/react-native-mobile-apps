import React from "react";
import { Image, StyleSheet } from "react-native";
/**
 * Import createStackNavigator that we will use to create the stack navigator for the home page
 We shall see below how they are used
 */
import { createStackNavigator } from "@react-navigation/stack";
/**
 * Import NavigationContainer that we will use to wrap the stack we will create.
See in App component below how it is used
 */
import { NavigationContainer } from "@react-navigation/native";
/**
 * Import our components that we will create screens for.
 * Among them is a new Component named Home which will simply contain Button links to
 * each of the other Component screens.
 * See Home.tsx for implementation for the said Home Component
 */
import Home from "./src/Home2";
import Component6 from "./src/components/Component6";
import Component7 from "./src/components/Component7";
import Component8 from "./src/components/Component8";
import Component9 from "./src/components/Component9";
import Component1 from "./src/components/Component1";
//Create the Stack object
const Stack = createStackNavigator();
//if we want to pass initial parameters to the App Stack, we can first organize the typing as we did for HomeScreen in Home.tsx
//We will then have to use initialParams in each Stack.Screen to indicate the params specified in types
//e.g. for Component1Screen would be initialParams={{demoInitialParam:string}}
/*
type AppStackParamList = {
 HomeScreen: undefined; //no parameters expected to be passed to route when called
 Component1Screen: {demoInitialParam:string};
 Component2Screen: {title:string} | undefined; //means that title may be optionally passed
 Component4Screen: undefined;
 Component5Screen: undefined;
};
const Stack = createStackNavigator<AppStackParamList>();
*/
//Prepare the App Stack with the Screens
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      //Below are no longer supported here in React navigation version 6. They have been moved to screenOptions below.
      //mode='card'
      //headerMode='screen'
      //keyboardHandlingEnabled={true}
      screenOptions={{
        presentation: "card",
        headerMode: "screen",
        keyboardHandlingEnabled: true,
        headerStyle: {
          backgroundColor: "darkblue",
          height: 120,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          paddingTop: 60,
          paddingBottom: 10,
        },
        headerRight: () => (
          <Image
            style={styles.logo}
            source={require("./src/img/PAU-Logo-Website.png")}
          />
        ),
        headerTitleAlign: "left",
        headerRightContainerStyle: {
          //there is also headerLeftContainerStyle if we want to use it
          paddingBottom: 33,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ title: "App2 Home Screen" }}
      />
      <Stack.Screen
        name="Component6Screen"
        component={Component6}
        options={{ title: "Component 6", headerShown: false }}
      />
      <Stack.Screen
        name="Component7Screen"
        component={Component7}
        options={{ title: "Component 7" }}
      />
      <Stack.Screen
        name="Component8Screen"
        component={Component8}
        options={{ title: "Component 8" }}
      />
      <Stack.Screen
        name="Component9Screen"
        component={Component9}
        options={{ title: "Component 9" }}
      />
    </Stack.Navigator>
  );
};
//Pass the prepared AppStack to App wrapping it in NavigatorContainer
const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <AppStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 133,
    height: 55,
    paddingBottom: 50,
  },
});
export default App;
