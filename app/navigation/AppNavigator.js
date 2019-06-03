import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from '../containers/welcome/WelcomeScreen';
import LoginScreen from '../containers/login/LoginScreen';
import HomeScreen from '../containers/home/HomeScreen';
import DetailsScreen from '../containers/details/DetailsScreen';
import { Colors } from '../themes';

const LoginStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen
}, {
  headerMode: 'none'
});

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  headerMode: 'none'
});

const AppNavigator =  createSwitchNavigator({
  LoginStack: LoginStack,
  MainStack: MainStack
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: 'LoginStack',
  cardStyle: {
    backgroundColor: Colors.primary
  }
});

export default AppNavigator;
