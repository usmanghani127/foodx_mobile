import React, {forwardRef, useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Colors from '../../theme/Colors';
import {noop} from 'lodash';
import {InputTypes} from '../../common/Constants';
import Picker from '../picker';
import VectorIcon, {ICON_TYPES} from '../VectorIcon';

const FormInput = forwardRef((props, ref) => {
  const {
    borderColor = Colors.white,
    placeholder,
    customStyles,
    customPickerStyles,
    innerStyles,
    isPassword = false,
    returnKeyType = 'next',
    onSubmit = noop,
    onValueChange = noop,
    value,
    pickerValues = [],
    editable = true,
    showCross = false,
    keyboardType = 'default',
    inputType = InputTypes.Text,
    numberOfLines = 1,
    radioValues = {},
  } = props;

  const [passwordHidden, setPasswordHidden] = useState(true);

  const typeBasedRendering = () => {
    switch (inputType) {
      case InputTypes.Text:
        return (
          <View style={[styles.formInputContainer, customStyles]}>
            <View style={[styles.formInput, {borderColor}]}>
              <View style={styles.textInput}>
                <TextInput
                  multiline={numberOfLines > 1}
                  numberOfLines={numberOfLines}
                  keyboardType={keyboardType}
                  autoCapitalize={'none'}
                  editable={editable}
                  value={value}
                  secureTextEntry={isPassword && passwordHidden}
                  placeholderTextColor={Colors.description}
                  placeholder={placeholder}
                  autoCorrect={false}
                  ref={ref}
                  onChangeText={text => onValueChange(text)}
                  style={[styles.input, innerStyles]}
                  returnKeyType={returnKeyType}
                  onSubmitEditing={onSubmit}
                />
                {isPassword && (
                  <VectorIcon
                    iconName={passwordHidden ? 'eye' : 'eye-off'}
                    iconType={ICON_TYPES.Ionicons}
                    size={22}
                    style={styles.eye}
                    onPress={() => setPasswordHidden(!passwordHidden)}
                  />
                )}
                {showCross && (
                  <VectorIcon
                    iconName={'circle-with-cross'}
                    iconType={ICON_TYPES.Entypo}
                    size={22}
                    style={styles.eye}
                    onPress={() => onValueChange('')}
                  />
                )}
              </View>
            </View>
          </View>
        );
      case InputTypes.Picker:
        return (
          <View style={[styles.formInputContainer, customPickerStyles]}>
            <View style={[styles.formInput, {borderColor}]}>
              <Picker
                ref={ref}
                customStyles={{}}
                enabled={editable && !!pickerValues.length}
                selectedValue={pickerValues.find(vals => vals.value === value)}
                placeholder={placeholder}
                placeholderStyle={styles.placeholder}
                pickerValues={pickerValues}
                onValueChange={item => onValueChange(item)}
              />
            </View>
          </View>
        );
      case InputTypes.Radio:
        return (
          <View style={customStyles}>
            {Object.keys(radioValues).map(radio => {
              const {title, price, key, perks = []} = radioValues[radio];
              const selected = key === value;
              return (
                <View key={key} style={styles.formInputContainer}>
                  <TouchableOpacity
                    style={[styles.formInput, styles.radio, innerStyles]}
                    onPress={() => onValueChange(key)}
                    activeOpacity={0.8}>
                    <VectorIcon
                      iconName={
                        selected ? 'radio-button-on' : 'radio-button-off'
                      }
                      iconType={ICON_TYPES.MaterialIcons}
                      size={20}
                      color={Colors.primaryDark}
                    />
                    <View style={styles.column}>
                      <Text style={styles.radioText}>{title}</Text>
                      {perks.map(perk => (
                        <Text style={styles.perkText}>{perk}</Text>
                      ))}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        );
    }
  };

  return <>{typeBasedRendering()}</>;
});

export default FormInput;
