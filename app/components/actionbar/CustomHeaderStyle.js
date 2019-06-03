import EStyleSheet from './node_modules/react-native-extended-stylesheet';
import { Colors, Fonts, Metrics } from '../../themes';

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0
  },
  leftButtonStyle: {
    marginLeft: Metrics.rem_10,
    paddingRight: Metrics.rem_10,
    paddingLeft: 0
  },
  bodyStyle: {
    flex: 1,
    alignItems: 'center'
  }, 
  titleText: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    fontSize: Metrics.rem_17_3,
    letterSpacing: 0,
    lineHeight: Metrics.rem_20
  },
  rightButtonStyle: {
    marginRight: Metrics.rem_10,
    paddingLeft: Metrics.rem_10,
    paddingRight: 0
  },
  rightButtonText: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    fontSize: Metrics.rem_13_3,
    letterSpacing: 0
  }
});
