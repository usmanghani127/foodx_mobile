import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style';
import CustomImage from '../../components/image';
import Images from '../../theme/Images';
import PrimaryButton from '../../components/primaryButton';
import OrderActions from '../../adaptors/orders';
import {useUser} from '../../context/user';
import {noop} from 'lodash';

const FoodItemDetail = ({item = {}, onPlaceOrder = noop}) => {
  const {image, name, price, description, restaurant} = item;
  const {state: {user: {email = ''} = {}} = {}, dispatch} = useUser();
  const [comments, setComments] = useState('');

  const placeOrder = () => {
    const payload = {
      user: email,
      itemId: item.id,
      quantity: 1,
      comments,
    };
    OrderActions.PlaceOrder(payload, dispatch);
    onPlaceOrder();
  };
  const renderBasicSection = () => {
    return (
      <View style={styles.detailSection}>
        <Text style={styles.description}>{restaurant}</Text>
        <View style={styles.detailRow}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.sellerRow}>
              <Text style={styles.price}>Rs.{price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderDescriptionSection = () => {
    return (
      <View style={styles.detailSection}>
        <Text style={styles.title}>Description</Text>
        <View style={styles.detailRow}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CustomImage
          style={styles.image}
          source={image}
          defaultImage={Images.gradientImage}
        />
        {renderBasicSection()}
        {renderDescriptionSection()}
        <PrimaryButton text={'Place Order'} onPress={placeOrder} />
      </ScrollView>
      <View style={styles.empty} />
    </>
  );
};
export default FoodItemDetail;
