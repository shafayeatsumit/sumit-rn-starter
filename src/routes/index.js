import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import WelcomeComponent from '../components/Welcome';
import LoginContainer from '../containers/Login';
import SignupContainer from '../containers/SignUp';

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
    initial
  />
  <Scene
    back
    key="signup"
    title="SignUp"
    hideNavBar={false}
    component={SignupContainer}
  />
</Stack>
);

export default Index;
