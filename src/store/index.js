import React from 'react';
import { StatusBar, Platform, View, Text } from 'react-native';
import { Stack } from 'react-native-router-flux';
import Routes from './src/routes';

if (Platform.OS === 'android') StatusBar.setHidden(true);

const Root = () => (
	<View>
   <Stack key="root">
    {Routes}
   </Stack>
 </View>
);

export default Root;
