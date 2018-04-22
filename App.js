import React from 'react';
import PropTypes from 'prop-types';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Router, Stack } from 'react-native-router-flux';
import { StatusBar, Platform } from 'react-native';
import configureStore from './src/store';
import Routes from './src/routes/index';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

if (Platform.OS === 'android') StatusBar.setHidden(true);
const { store, persistor } = configureStore();

const Root = () => (
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

export default Root;
