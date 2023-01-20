import Home from '../screens/Home';
import Search from '../screens/Search';
import CheckIn from '../screens/CheckIn';
import Leaderboard from '../screens/Leaderboard';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, FONTS, SIZES } from '../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = ({routeName}) => {
    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search-outline';
              } else if (route.name === 'Check In') {
                iconName = focused ? 'ios-location' : 'ios-location-outline';
              } else if (route.name === 'Leaderboard') {
                iconName = focused ? 'podium' : 'podium-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
              }
    
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={SIZES.extraLarge} color={color} />;
            },
            tabBarActiveTintColor: COLORS.secondary,
            tabBarInactiveTintColor: COLORS.lightWhite,
            tabBarStyle: {
              height: 55, 
              paddingBottom: 5,
              paddingTop: 5,
              backgroundColor: COLORS.tabBar,
              borderTopColor: "transparent",
              borderTopWidth: .1,
            },
            tabBarLabelStyle: {
              fontFamily: FONTS.semiBold
            },
            headerShown: false
          })} initialRouteName={routeName}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search}/>
          <Tab.Screen name="Check In" component={CheckIn} />
          <Tab.Screen name="Leaderboard" component={Leaderboard} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export const HomeTabs = () => {
    console.debug("Home")
  return (
    <TabNavigator routeName="Home"/>
  )
}

