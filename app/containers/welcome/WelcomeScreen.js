import React, { Component } from './node_modules/react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from './node_modules/prop-types';
import styles from './WelcomeScreenStyles';
import WelcomeString from './WelcomeString';
import { getToken, clearToken } from '../../utils/storage';
import * as loginActions from '../login/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class WelcomeScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
        this.checkSignInStatus();
    }, 500);
  }

  onSuccess = (data) => {
      const { navigation } = this.props;
      let routeName = 'Login';
      if (data) {
          routeName = 'Home';
      }
      setTimeout(() => {
          const resetAction = StackActions.reset({
              index: 0,
              actions: [
                  NavigationActions.navigate({ routeName }),
              ],
          });
          navigation.dispatch(resetAction);
      }, 300);
  }

  onError = (error) => {
      try {
          clearToken();
          const { navigation } = this.props;
          const resetAction = StackActions.reset({
              index: 0,
              actions: [
                  NavigationActions.navigate({ routeName: 'Login' }),
              ],
          });
          navigation.dispatch(resetAction);
      } catch (e) {
          this.setState({});
      }
  }

  checkSignInStatus() {
    getToken().then((token) => {
        if (token && token.length > 0) {
            this.props.actions.user.fetchUserInfo(this.onSuccess, this.onError)
        } else {
            const { navigation } = this.props;
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Login' }),
                ],
            });
            navigation.dispatch(resetAction);
        }
    });
  }
  
  render() {
    return (
      <Container style={styles.screenContainer}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.text}>{WelcomeString.labWelcome}</Text>
        </Content>
      </Container>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
      user: bindActionCreators(loginActions, dispatch)
  }
})
export default connect(null, mapDispatchToProps)(WelcomeScreen)
