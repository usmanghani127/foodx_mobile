import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, View, FlatList, RefreshControl} from 'react-native';
import styles from './style';
import HeaderHome from '../../components/headerHome';
import Loader from '../../components/loader';
import Colors from '../../theme/Colors';
import FoodActions from '../../adaptors/food';
import AnimatedAlert from '../../components/animatedAlert';
import FoodItem from '../../components/foodItem';
import {useFood} from '../../context/food';
import ActionSheet from 'react-native-actions-sheet';
import FoodItemDetail from '../foodDetail';

const HomeScreen = ({navigation}) => {
  const {state: {loading, featuredFood = []} = {}, dispatch} = useFood();
  const [currentItem, setCurrentItem] = useState({});

  let actionSheetRef = useRef(undefined);

  useEffect(() => {
    getFeaturedFood();
  }, []);

  const getFeaturedFood = () => {
    FoodActions.GetFeaturedFood(dispatch);
  };

  return (
    <SafeAreaView style={styles.main}>
      <HeaderHome navigation={navigation} />
      <View style={styles.body}>
        <Text style={styles.heading}>Featured Food</Text>
        <FlatList
          keyExtractor={item => item.id}
          contentContainerStyle={styles.featuredFood}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={featuredFood}
          extraData={featuredFood}
          refreshing={loading}
          colors={[Colors.primaryDark]}
          refreshControl={
            <RefreshControl
              colors={[Colors.primaryDark]}
              tintColor={Colors.primaryDark}
              refreshing={loading}
              onRefresh={() => {
                !loading && getFeaturedFood();
              }}
            />
          }
          renderItem={({item}) => (
            <FoodItem
              onPress={() => {
                setCurrentItem(item);
                actionSheetRef.current?.setModalVisible &&
                  actionSheetRef.current.setModalVisible();
              }}
              item={item}
              navigation={navigation}
            />
          )}
          ListEmptyComponent={<AnimatedAlert visible={!loading} />}
        />
      </View>
      <ActionSheet
        ref={actionSheetRef}
        defaultOverlayOpacity={0.5}
        headerAlwaysVisible={false}
        gestureEnabled={true}>
        <FoodItemDetail
          item={currentItem}
          onPlaceOrder={() =>
            actionSheetRef.current && actionSheetRef.current.hide()
          }
        />
      </ActionSheet>
      <Loader visible={false} />
    </SafeAreaView>
  );
};

export default HomeScreen;
