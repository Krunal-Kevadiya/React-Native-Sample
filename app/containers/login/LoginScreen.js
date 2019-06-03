import React, { Component } from './node_modules/react';
import { Text } from 'react-native';
import { Button, Container, Content, Form, Item, Input } from 'native-base';
import PropTypes from './node_modules/prop-types';
import { CustomHeader } from '../../components';
import styles from './LoginScreenStyles';
import LoginString from './LoginString';

export default class LoginScreen extends Component {
  state = { email: '', password: '', isLoading: false }

  onSuccess = (data) => {
    this.setState({ isLoading: false })
    if (data.token && data.token.length > 0) {
        saveToken(data.token).then((isSuccess) => {
            if (isSuccess) {
                const { navigation } = this.props;
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                });
                navigation.dispatch(resetAction);
            }
        });
    }
  }

  onError = (error) => {
      this.setState({ isLoading: false })
      console.log(error)
  }

  login = (params) => {
      this.setState({ isLoading: true })
      const emailValidation = validate('email', params.email.trim())
      const passwordValidation = validate('password', params.password.trim())

      // if (emailValidation.isError) {
      //     alert(emailValidation.messageError)
      // } else if (passwordValidation.isError) {
      //     alert(emailValidation.messageError)
      // } else {
      //     this.props.actions.login.login(params, this.onSuccess(), this.onError())
      // }
      this.props.actions.login.login({ email: 'hoangpt@hblab.vn', password: 'thehoang' }, this.onSuccess, this.onError)
  }

  render() {
    const { navigation } = this.props;
    
    return (
      <Container>
        <CustomHeader
          title={LoginString.titleLogin}
          leftButtonIcon="back"
          leftButtonPress={() => navigation.goBack()}
        />
        <Content>
          <Form>
            <Item style={styles.inputBox}>
              <Input
                ref={u => {
                  this.usernameRef = u;
                }}
                placeholder={LoginString.hintEmail}
                value={email}
                className={email ? "error" : ""}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => this.passwordRef._root.focus()}
                returnKeyType="next"
              />
            </Item>
            <Item style={styles.inputBox} last>
              <Input
                ref={p => {
                  this.passwordRef = p;
                }}
                placeholder={LoginString.hintPassword}
                value={password}
                className={password ? "error" : ""}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
                onSubmitEditing={() => navigation.navigate('Home', {
                  emailValue: email,
                  passwordValue: password
                })}
                returnKeyType="go"
              />
            </Item>
          </Form>
          <Button full
            onPress={() => navigation.navigate('Home', {
              emailValue: email,
              passwordValue: password
            })}
            disabled={isDisabled}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>{LoginString.btnLogin}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object
};
