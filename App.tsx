import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider, extendTheme, Box, Center } from "native-base";
import Router from "./src/router";

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
