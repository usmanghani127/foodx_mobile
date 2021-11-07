import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Colors from '../../theme/Colors';
import FormInput from '../../components/formInput';
import PrimaryButton from '../../components/primaryButton';
import {isEmpty} from 'lodash';
import UserActions from '../../adaptors/user';
import {useUser} from '../../context/user';
import Loader from '../../components/loader';

const ChangePassword = ({navigation}) => {
  const {state: {user: {email}, loading} = {}, dispatch} = useUser();

  let oldPasswordRef = useRef(undefined);
  let newPasswordRef = useRef(undefined);
  let confirmNewPasswordRef = useRef(undefined);

  const [inputFields, setInputFields] = useState([
    {
      key: 'oldPassword',
      placeholder: 'Old Password',
      error: false,
      isPassword: true,
      ref: ref => (oldPasswordRef = ref),
      onSubmit: () => newPasswordRef?.focus(),
      value: '',
    },
    {
      key: 'newPassword',
      placeholder: 'New Password',
      error: false,
      isPassword: true,
      ref: ref => (newPasswordRef = ref),
      onSubmit: () => confirmNewPasswordRef?.focus(),
      value: '',
    },
    {
      key: 'confirmNewPassword',
      placeholder: 'Confirm New Password',
      error: false,
      isPassword: true,
      ref: ref => (confirmNewPasswordRef = ref),
      value: '',
    },
  ]);

  useEffect(() => {
    oldPasswordRef?.focus && oldPasswordRef.focus();
  }, []);

  const submit = () => {
    let proceed = true;
    const payload = {email};
    const tempFields = [...inputFields];
    inputFields.forEach((input, index) => {
      const {key, value} = input;
      if (isEmpty(value.trim())) {
        proceed = false;
      } else {
        payload[key] = value;
      }
      tempFields[index] = {
        ...tempFields[index],
        error: !proceed,
      };
    });
    if (!proceed) {
      setInputFields(tempFields);
    } else {
      UserActions.ChangePassword(payload, dispatch, navigation);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAwareScrollView>
        {inputFields.map((component, componentIndex) => {
          const {
            key,
            error,
            ref,
            numberOfLines,
            keyboardType,
            isPassword,
            placeholder,
            onSubmit,
            value,
          } = component;
          return (
            <FormInput
              key={key}
              borderColor={error ? Colors.red : Colors.white}
              ref={ref}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType}
              isPassword={isPassword}
              placeholder={placeholder}
              customStyles={styles.input}
              onSubmit={() => (onSubmit ? onSubmit() : submit())}
              onValueChange={val => {
                let tempFields = [...inputFields];
                tempFields[componentIndex] = {
                  ...tempFields[componentIndex],
                  value: val?.value ? val.value : val,
                };
                setInputFields(tempFields);
              }}
              value={value}
            />
          );
        })}
      </KeyboardAwareScrollView>
      <PrimaryButton
        customContainerStyles={styles.primaryButton}
        text={'DONE'}
        onPress={() => submit()}
      />
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

export default ChangePassword;
