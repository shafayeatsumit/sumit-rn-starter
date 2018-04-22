import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import WelcomeContainer from '../containers/Welcome';

const Index = (
<Stack hideNavBar>
  <Scene
    key="welcome"
    title="welcome"
    component={WelcomeContainer}
  />
</Stack>
);

export default Index;
