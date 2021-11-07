import React, {useState, useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import Colors from '../../theme/Colors';
import styles from './style';
import FormInput from '../../components/formInput';
import {isEmpty} from 'lodash';
import Loader from '../../components/loader';
import PrimaryButton from '../../components/primaryButton';
import HeaderMain from '../../components/headerMain';
import {APP_NAME, RouteKeys} from '../../common/Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useUser} from '../../context/user';
import UserActions from '../../adaptors/user';

const LoginScreen = props => {
  const [inputFields, setInputFields] = useState({
    email: {value: 'rajausman127official@gmail.com', error: false},
    password: {value: 'randompassword', error: false},
  });

  const {navigation, route: {params: {showBackButton = true} = {}} = {}} =
    props;

  const {state: {loading} = {}, dispatch} = useUser();

  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  useEffect(() => {
    emailRef.focus();
  }, []);

  const signIn = () => {
    if (!loading) {
      const formIsValid = validateFields();
      if (formIsValid) {
        UserActions.Login(
          {email: email.value, password: password.value},
          dispatch,
          navigation,
        );
      }
    }
  };

  const validateFields = () => {
    const localInputFields = {...inputFields};
    let valid = true;
    Object.keys(localInputFields).map(key => {
      const empty = isEmpty(localInputFields[key]?.value.trim());
      localInputFields[key].error = empty;
      if (empty && valid) {
        valid = false;
      }
    });
    setInputFields(localInputFields);
    return valid;
  };

  const {email, password} = inputFields;

  return (
    <>
      <HeaderMain
        showBackButton={showBackButton}
        text={'Sign In'}
        navigation={navigation}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.main}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>{APP_NAME}</Text>
          <Text style={styles.signUpDescription}>
            Please fill out the following fields to continue.
          </Text>
        </View>
        <FormInput
          borderColor={email.error ? Colors.red : Colors.white}
          ref={ref => (emailRef = ref)}
          placeholder={'Username'}
          isPassword={false}
          returnKeyType={'next'}
          onSubmit={() => passwordRef.focus()}
          onValueChange={loginName =>
            setInputFields({
              ...inputFields,
              email: {...email, value: loginName},
            })
          }
          value={email.value}
        />
        <FormInput
          borderColor={password.error ? Colors.red : Colors.white}
          ref={Password => (passwordRef = Password)}
          placeholder={'Password'}
          isPassword={true}
          returnKeyType={'done'}
          onSubmit={() => signIn()}
          onValueChange={Password =>
            setInputFields({
              ...inputFields,
              password: {...password, value: Password},
            })
          }
          value={password.value}
        />
        <Text
          style={[styles.signUpText, styles.forgotPassword]}
          onPress={() => navigation.navigate(RouteKeys.FORGOT_PASSWORD)}>
          Forgot Password
        </Text>
        <PrimaryButton
          customContainerStyles={styles.primaryButton}
          text={'SING IN'}
          onPress={() => signIn()}
        />
      </KeyboardAwareScrollView>
      <Loader visible={loading} />
    </>
  );
};

export default LoginScreen;
