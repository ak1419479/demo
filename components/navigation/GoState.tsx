import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import getApiHook from './GetApiHook';

export default function GoState() {
  
  // const {data} = getApiHook();

  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');
  const [myFlag, setMyFlag] = useState(1100);
  const navigation = useNavigation();

  const goAhead = () => {
  navigation.navigate('Home', {datalaylo:4325});
  }

  const changestate = () =>{
    setMyFlag(myFlag +20);
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}> State(Mutable)</Text>
<Text>My Flag {myFlag}</Text>
   
   <TouchableOpacity style={styles.button} onPress={changestate}><Text style={styles.textcolor}>Change State</Text>
    </TouchableOpacity>   
    <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={styles.textcolor}> Go Ahead </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcolor:{
color:'#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginBottom:20
  },
});
