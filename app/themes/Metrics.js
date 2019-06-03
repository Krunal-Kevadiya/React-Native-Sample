import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  rem_10: '10rem',
  rem_13_3: '13.3rem',
  rem_14: '14rem',
  rem_17_3: '17.3rem',
  rem_20: '20rem',
  
  smallMargin: '5rem',
  baseMargin: '10rem',
  doubleBaseMargin: '20rem',
  section: '25rem',
  doubleSection: '50rem',
  regularBorderWidth: '1rem',
  doubleBorderWidth: '2rem',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? '64rem' : '54rem',
  icons: {
    tiny: '15rem',
    small: '20rem',
    medium: '30rem',
    large: '45rem',
    xl: '50rem'
  },
  images: {
    small: '20rem',
    medium: '40rem',
    large: '60rem',
    logo: '200rem'
  },
  buttonHeight: '40rem',
  buttonRadius: '20rem'
};

export default metrics;
