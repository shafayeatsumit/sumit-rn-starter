import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import  Home  from '../components/Home';

const Index = (
<Stack>
<Scene
    back
    key="home"
    title="HOME"
    component={Home}
/>
</Stack>
);

export default Index;