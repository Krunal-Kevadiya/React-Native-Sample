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
    fontFamily: Fonts.bold,
    fontSize: Metrics.rem_10,
    textAlign: 'center',
    color: Colors.white
  }
});
