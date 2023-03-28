/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './components/Home'
import Detail from './components/Detail'

AppRegistry.registerComponent(appName, () => Home);
