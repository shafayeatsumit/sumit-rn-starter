import React from 'react';
import { StatusBar, Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/commonColor';
import configureStore from './src/store';
import Routes from './src/routes/index';
import Loading from './src/components/Loading';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);
const { store, persistor } = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
        <PersistGate
            loading={<Loading />}
            persistor={persistor}
        >
            <StyleProvider style={getTheme(theme)}>
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



export default Root;