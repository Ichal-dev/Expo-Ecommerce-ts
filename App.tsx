import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import Router from "./src/router";
import { Provider } from "react-redux";
import { store } from "./src/state";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
