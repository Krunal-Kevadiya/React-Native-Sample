import React, { Component } from './node_modules/react';
import { Text } from 'react-native';
import { Button, Container, Content } from 'native-base';
import PropTypes from './node_modules/prop-types';
import { CustomHeader } from '../../components';
import styles from './HomeScreenStyles';
import { HomeString } from '../../Themes/Constants';

export default class HomeScreen extends Component {
  render() {   
    const { navigation } =  this.props;
    const emailValue = navigation.getParam('emailValue', 'xxx@gmail.com');
    const passwordValue = navigation.getParam('passwordValue', 'xxx');
    return (
      <Container style={styles.mainContainer}>
        <CustomHeader
          title={HomeString.titleHome}/>
        <Content style={styles.content}>
          <Text style={styles.textRegular}>
            {HomeString.formatString(HomeString.labWelcome, emailValue, passwordValue)}
          </Text>
          <Button
            onPress={() => navigation.navigate('Details')}
            style={styles.nextButton}
            success>
            <Text style={styles.nextButtonText}>{HomeString.labCheckOut}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object
};
