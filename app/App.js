import React, {Component} from './node_modules/react';
import { Dimensions } from 'react-native';
import { Root } from 'native-base';
//Navigation flow
import { createAppContainer, SafeAreaView } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';
//Stype
import EStyleSheet from './node_modules/react-native-extended-stylesheet';
import styles from './themes/ApplicationStyles';
//Redux
import { createStore, applyMiddleware } from './node_modules/redux';
import { Provider } from './node_modules/react-redux';
import creatSagaMiddleware from './node_modules/redux-saga';
import rootSaga from './sagas/rootSaga';
import allReducers from './reducers';

const sagaMiddleware = creatSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const entireScreenWidth = Dimensions.get('window').width;
const NavigationContainer = createAppContainer(AppNavigator);

// Use the width of the design you have been provided in place of 380
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.applicationContainer} forceInset={{ top: 'never', bottom: 'never' }}>
        <Provider store={store}>
          <NavigationContainer />
        </Provider>          
      </SafeAreaView>
    );
  }
}

