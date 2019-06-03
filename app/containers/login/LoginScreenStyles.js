import EStyleSheet from './node_modules/react-native-extended-stylesheet';
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screenContainer,
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: Fonts.medium,
    fontSize: Metrics.rem_10,
    textAlign: 'center',
    color: Colors.black
  },
  loginButton: {
    marginTop: Metrics.section,
    alignSelf: 'center',
    marginBottom: Metrics.rem_10
  },
  loginButtonText: {
    fontFamily: Fonts.base,
    fontSize: Metrics.rem_14,
    color: Colors.white,
    paddingHorizontal: Metrics.rem_10
  }
});
