import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import Welcome from '../components/Welcome';

const Index = (
<Stack hideNavBar>
  <Scene
    key="home"
    title="welcom"
    component={Welcome}
  />
</Stack>
);

export default Index;
