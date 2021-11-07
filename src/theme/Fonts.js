import Colors from './Colors';

const Fonts = {
  extraLightFont: 'Roboto-Thin',
  lightFont: 'Roboto-Light',
  regularFont: 'Roboto-Regular',
  semiBoldFont: 'Roboto-Medium',
  boldFont: 'Roboto-Bold',
  mediumFont: 'Roboto-Medium',
};

const FontStyles = {
  regular: {
    fontSize: 12,
    color: Colors.text,
  },
  regularBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.text,
  },
  regularPrimary: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
  titleRegular: {
    fontSize: 14,
    color: Colors.text,
  },
  titleBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titlePrimary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
  headingRegular: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  headingPrimary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
  descriptionRegular: {
    fontSize: 12,
    color: Colors.description,
  },
  descriptionBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.description,
  },
  descriptionPrimary: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primaryDark,
  },
};
export default FontStyles;
