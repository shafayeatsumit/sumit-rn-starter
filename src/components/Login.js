import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, View, Content, Form, Item, Label, Input, Text, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';

class Login extends Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }
  static defaultProps = {
    error: null,
    member: {},
  }
  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSingupPress = this.handleSingupPress(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = async () => {
    await this.props.onFormSubmit(this.state);
    Actions.welcome();
  }

  handleSingupPress = () => {
    Actions.signup();
  }

  render() {
    console.log('current member', this.props.member);
    const { loading, error } = this.props;
    if (loading) return <Loading />;
    return (
      <Container>
        <Content padder>
          <Header
            title="Welcome back"
            content="Please use your email and password to login."
          />

          {error && <Messages message={error} />}

          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit}>
              <Text>Login</Text>
            </Button>
            <Spacer size={10} />
            <TouchableOpacity onPress={this.handleSingupPress}>
              <Text style={{ textDecorationLine: 'underline' }}>Signup Here</Text>
            </TouchableOpacity>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
