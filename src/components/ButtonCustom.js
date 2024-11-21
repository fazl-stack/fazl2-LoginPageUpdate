import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const ButtonCustom = ({
  textColor = 'white',
  tallHeight = 50,
  background = 'black',
  kepala,
  verif,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        alignSelf: 'center',
        backgroundColor: disabled ? 'grey' : kepala ? 'white' : 'black',
        height: tallHeight,
        width: 250,
        borderRadius: 50,
        margin: 50,
        elevation: 10,
      }}
      onPress={verif}>
      <Text
        style={{
          color: kepala ? 'black' : 'white',
          textAlign: 'center',
          padding: 15,
        }}>
        Sign In
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
