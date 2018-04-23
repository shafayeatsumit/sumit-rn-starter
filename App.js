import React, { Component } from 'react';
import { Font } from 'expo';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Router, Stack } from 'react-native-router-flux';
import { StatusBar, Platform } from 'react-native';
import Loading from './src/components/Loading';
import configureStore from './src/store';
import Routes from './src/routes/index';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

if (Platform.OS === 'android') StatusBar.setHidden(true);
const { store, persistor } = configureStore();


class Root extends Component {
  state = { loading: true }
  componentWillMount = async () => {
    // this is a silly hack to load fonts in Expo. These are required for loading Vector Icons.
    /*eslint-disable */
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    /* eslint-enable */
    this.setState({ loading: false });
  }
  render() {
    return (
      this.state.loading ?
       <Loading />
        :
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <StyleProvider style={getTheme(material)}>
            <Router>
              <Stack key="root">
                {Routes}
              </Stack>
            </Router>
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
