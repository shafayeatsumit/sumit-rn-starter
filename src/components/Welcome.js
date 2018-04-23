import React from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Body, Left, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const Welcome = () => (
  <Container>
    <Content>
      <List>
        <View>
          <Content padder>
            <Header
              title="Hi there,"
              content="Please login to gain extra access"
            />
          </Content>
          <ListItem onPress={Actions.login} icon>
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Login</Text>
              </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="add-circle" />
            </Left>
            <Body>
              <Text>Sign Up</Text>
            </Body>
          </ListItem>
        </View>
      </List>
    </Content>
  </Container>
);

export default Welcome;
