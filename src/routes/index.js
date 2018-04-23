import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import WelcomeComponent from '../components/Welcome';
import LoginContainer from '../containers/Login';

const Index = (
<Stack hideNavBar>
  <Scene
    key="welcome"
    title="welcome"
    component={WelcomeComponent}
  />
  <Scene
    key="login"
    title="Login"
    component={LoginContainer}
  />
</Stack>
);

export default Index;
