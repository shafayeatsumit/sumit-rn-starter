import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Platform, View, Text } from 'react-native';
import { StyleProvider } from 'native-base';
import { Router, Stack } from 'react-native-router-flux';
import Routes from './src/routes/index';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';


const Root = () => (
  <StyleProvider style={getTheme(material)}>
    <Router>
      <Stack key="root">
        {Routes}
      </Stack>
    </Router>
  </StyleProvider>
);

export default Root;
