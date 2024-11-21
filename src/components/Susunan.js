import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Susunan = ({
  title = 'Username',
  // title2 = 'mini editable',
  textColor = 'grey',
  fontsz = 25,
  weight = 'bold',
  Border = 'grey',
  Background = 'white',
  value,
  onChangeText,
  // IconName = 'add-circle-outline',
}) => {
  return (
    <View style={{alignItems: 'center', padding: 20}}>
      <TextInput
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          borderColor: Border,
          padding: 10,
          color: textColor,
          borderRadius: 9,
          margin: 5,
        }}
        placeholder={title}
        placeholderTextColor={textColor}
        value={value}
        onChangeText={onChangeText}
      />

      {/* <View
          style={{
            width: '100%',
            height: 100,
            alignItems: 'center',
            padding: 5,
            flexDirection: 'row',
          }}>
          <Icon name={IconName} size={30} color={textColor} />
          <View style={{flexDirection: 'column', padding: 25}}>
            <Text
              style={{fontSize: fontsz, fontWeight: weight, color: textColor}}>
              {title}
            </Text>
            <Text style={{color: textColor}}>{title2}</Text>
          </View>
        </View> */}
    </View>
  );
};

export default Susunan;
