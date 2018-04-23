import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Welcome = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => Actions.login()}>
      <Text style={{ fontSize: 20 }}>
        Click to Go to login page.......
      </Text>
    </TouchableOpacity>
  </View>
);

export default Welcome;
