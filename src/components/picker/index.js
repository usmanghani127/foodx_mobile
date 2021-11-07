import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {
  Modal,
  Text,
  View,
  Platform,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import Colors from '../../theme/Colors';
import {noop} from 'lodash';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackButton from '../backButton';

const Picker = forwardRef((props, ref) => {
  const {
    enabled = true,
    selectedValue,
    placeholder,
    pickerValues = [],
    onValueChange = noop,
    customStyles,
    showDropDownIcon = true,
    showSelectedValue = true,
    header,
  } = props;

  const [modalOpen, setModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setModalOpen(true),
  }));

  const close = () => setModalOpen(false);

  const renderItem = ({item}) => {
    const {label, icon} = item;
    return (
      <TouchableHighlight
        onPress={() => {
          onValueChange(item);
          close();
        }}
        style={styles.pickerItem}
        underlayColor={Colors.faint}>
        <>
          {icon ? (
            <>
              {icon}
              <Text style={styles.pickerItemText}>{label}</Text>
            </>
          ) : (
            <Text style={styles.pickerItemText}>{label}</Text>
          )}
        </>
      </TouchableHighlight>
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.pickerContainer, customStyles]}
        onPress={() => enabled && setModalOpen(!modalOpen)}>
        <Text
          style={
            selectedValue && showSelectedValue
              ? styles.input
              : styles.placeholder
          }
          numberOfLines={1}>
          {selectedValue && showSelectedValue
            ? selectedValue.label
            : placeholder}
        </Text>
        {showDropDownIcon ? (
          <MaterialIcons
            name={
              Platform.OS === 'android'
                ? 'arrow-drop-down'
                : 'keyboard-arrow-down'
            }
            size={20}
            color={Colors.text}
          />
        ) : null}
      </TouchableOpacity>
      <Modal
        animationType={'slide'}
        visible={modalOpen}
        onDismiss={close}
        transparent
        onRequestClose={close}>
        <View style={styles.modalContainer}>
          {Platform.OS === 'ios' ? (
            <View style={styles.containerIOS}>
              <View style={styles.pickerHeadingIOS}>
                <BackButton
                  onPress={close}
                  iconColor={Colors.primaryDark}
                  iconSize={30}
                />
                <Text style={styles.headingIOS}>{header || placeholder}</Text>
              </View>
              <FlatList
                data={pickerValues}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
              />
            </View>
          ) : (
            <View style={styles.containerAndroid}>
              <Text style={styles.heading}>{header || placeholder}</Text>
              <FlatList
                data={pickerValues}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
              />
            </View>
          )}
        </View>
      </Modal>
    </>
  );
});

export default Picker;
