import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { HomeTabs, SearchTabs } from './navigation/tabs';
import Details from './screens/Details';
import Search from './screens/Search';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {

  const [loaded] = useFonts({
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if(!loaded) return <Text>Fonts not loaded</Text>

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
        <Stack.Screen name="SearchScreen" component={Search} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
