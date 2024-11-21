import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Header from './components/Header';
import Susunan from './components/Susunan';
import ButtonCustom from './components/ButtonCustom';

const App = () => {
  const [SwitchOn, setSwitchOn] = useState(false);
  const pressSwitch = () => setSwitchOn(!SwitchOn);

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = () => {
    //   if (Username == 'admin' || Password == 'admin123') {
    //     // console.log('Login Berhasil');
    //     ToastAndroid.show('Login Berhasil!', ToastAndroid.SHORT);
    //   } else if (Username != 'admin' && Password != 'admin123') {
    //     // console.log('Login Gagal');
    //     ToastAndroid.show('Login Gagal!', ToastAndroid.SHORT);
    //   }

    Username == 'admin' && Password == 'admin123'
      ? ToastAndroid.show('Login Berhasil!', ToastAndroid.SHORT)
      : ToastAndroid.show('Login Gagal!', ToastAndroid.SHORT);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SwitchOn ? 'black' : 'white',
      }}>
      <ScrollView>
        <Header
          title="LOGIN"
          headerColor="white"
          textColor="grey"
          kepala={SwitchOn}
          SwitchOn={SwitchOn}
          onValueChange={pressSwitch}
        />

        <Susunan
          value={Username}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <Susunan
          title="Password"
          value={Password}
          onChangeText={text => {
            setPassword(text);
          }}
        />

        <ButtonCustom
          kepala={SwitchOn}
          verif={handleLogin}
          disabled={Username == '' || Password == '' ? true : false}
        />
      </ScrollView>
    </View>
  );
};

export default App;
