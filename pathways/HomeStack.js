import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home'
import Login from '../screens/login'

const screens = {
	Login: {
		screen: Login
	},
    Home: {
        screen: Home
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
