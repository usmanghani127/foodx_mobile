import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import {isEmpty} from 'lodash';
import Colors from '../../theme/Colors';
import FastImage from 'react-native-fast-image';
import FontStyles from '../../theme/Fonts';
import {ImageTypes, ScreenHeight, ScreenWidth} from '../../common/Constants';
import Images from '../../theme/Images';

const CustomImage = props => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    source = '',
    style,
    defaultImage,
    size = 'large',
    imageType,
    abbreviation,
    resizeMode = 'cover',
    showWaterMark = false,
  } = props;

  return (
    <FastImage
      source={isEmpty(source) || error ? defaultImage : {uri: source}}
      style={[
        styles.image,
        imageType === ImageTypes.ProfilePicture && {
          ...styles.profileImage,
          ...styles[size],
        },
        style,
      ]}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
      resizeMode={resizeMode}
      onError={() => setError(true)}>
      {imageType === ImageTypes.ProfilePicture &&
        !loading &&
        (isEmpty(source) || error) && (
          <Text
            style={
              size === 'large'
                ? styles.abbreviationTextLarge
                : styles.abbreviationTextSmall
            }>
            {abbreviation}
          </Text>
        )}
      {loading && (
        <View style={[styles.loader, style]}>
          <ActivityIndicator size={size} color={Colors.primaryDark} />
        </View>
      )}
      {showWaterMark && (
        <FastImage
          resizeMode={'contain'}
          source={Images.waterMark}
          style={styles.waterMark}
        />
      )}
    </FastImage>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  abbreviationTextLarge: {
    ...FontStyles.headingPrimary,
    fontSize: 40,
  },
  abbreviationTextSmall: {
    ...FontStyles.headingPrimary,
    fontSize: 20,
  },
  profileImage: {
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  small: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  large: {
    height: ScreenHeight * 0.1,
    width: ScreenHeight * 0.1,
    borderRadius: ScreenHeight * 0.05,
  },
  waterMark: {
    flex: 1,
    width: ScreenWidth * 0.9,
    opacity: 0.25,
  },
});
