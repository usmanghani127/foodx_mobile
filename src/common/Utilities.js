import {Platform, ToastAndroid, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PersistData = async ({key, value}) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn({e});
  }
};

export const GetPersistedData = async ({key}) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn({e});
  }
};

export const showMessage = text =>
  Platform.OS === 'android'
    ? ToastAndroid.show(text, ToastAndroid.SHORT)
    : Alert.alert('Info', text, [{text: 'Okay', style: 'destructive'}]);

export const showSuccessMessage = text =>
  Platform.OS === 'android'
    ? ToastAndroid.show(text, ToastAndroid.SHORT)
    : Alert.alert('Info', text, [{text: 'Okay', style: 'cancel'}]);

export const CallServer = ({url, method, authKey, payload}) =>
  new Promise((resolve, reject) => {
    let status = 200;
    const params = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: authKey,
      },
      body: JSON.stringify(payload),
      method,
    };
    fetch(url, params)
      .then(response => {
        status = response.status;
        return response.json();
      })
      .then(json => {
        const {error} = json || {};
        if (status === 200) {
          resolve(json);
        } else {
          reject(error);
        }
      })
      .catch(e => reject(e));
  });
