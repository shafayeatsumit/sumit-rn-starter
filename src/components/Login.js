import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Login = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <TouchableOpacity onPress={() => Actions.pop()}>
      <Text style={{ fontSize: 18 }}>
        Click to Go to Welcome Page.
      </Text>
    </TouchableOpacity>
  </View>
);

export default Login;
