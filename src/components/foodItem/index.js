import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {ScreenWidth} from '../../common/Constants';
import Colors from '../../theme/Colors';
import FontStyles from '../../theme/Fonts';
import Image from '../../components/image';
import VectorIcon, {ICON_TYPES} from '../VectorIcon';
import {showMessage} from '../../common/Utilities';
import {noop} from 'lodash';

const FoodItem = props => {
  const {item = {}, onPress = noop} = props;
  const {
    id,
    image = '',
    name = '',
    description = '',
    price = '',
    restaurant = '',
  } = item;

  return (
    <TouchableOpacity
      key={id}
      style={styles.itemContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image source={image} style={styles.thumbnail} defaultImage={''} />
      <TouchableOpacity
        style={styles.star}
        activeOpacity={0.8}
        onPress={() => showMessage('Feature Coming Soon')}>
        <VectorIcon
          iconName={'star'}
          iconType={ICON_TYPES.AntDesign}
          color={Colors.white}
          size={20}
        />
      </TouchableOpacity>
      <View style={styles.data}>
        <Text style={styles.restaurant} numberOfLines={2}>
          {restaurant}
        </Text>
        <Text style={styles.title} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.priceContainer}>
          <Text numberOfLines={1} style={styles.price}>
            Rs.{price}
          </Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default FoodItem;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    width: ScreenWidth * 0.445,
    backgroundColor: Colors.white,
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  thumbnail: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: ScreenWidth * 0.3,
    width: ScreenWidth * 0.445,
  },
  data: {
    flex: 1,
    margin: 10,
  },
  title: {
    marginVertical: 2.5,
    ...FontStyles.titleBold,
    textAlign: 'left',
  },
  restaurant: {
    ...FontStyles.descriptionRegular,
    textAlign: 'left',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    ...FontStyles.titlePrimary,
  },
  star: {
    borderRadius: 20,
    backgroundColor: Colors.black,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
  description: {
    ...FontStyles.regular,
    color: Colors.description,
    textAlign: 'left',
  },
});
