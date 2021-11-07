import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Colors from '../../theme/Colors';
import FormInput from '../../components/formInput';
import PrimaryButton from '../../components/primaryButton';
import {isEmpty} from 'lodash';
import {useUser} from '../../context/user';
import Loader from '../../components/loader';
import {showSuccessMessage} from '../../common/Utilities';

const ChangePassword = ({navigation}) => {
  const {state: {loading} = {}} = useUser();

  let emailRef = useRef(undefined);

  const [inputFields, setInputFields] = useState([
    {
      key: 'email',
      placeholder: 'Email Address',
      error: false,
      ref: ref => (emailRef = ref),
      value: '',
    },
  ]);

  useEffect(() => {
    emailRef?.focus && emailRef.focus();
  }, []);

  const submit = () => {
    let proceed = true;
    const payload = {};
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
      showSuccessMessage('A Rest Link has been sent to your Email');
      setTimeout(() => navigation.goBack(), 2000);
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
