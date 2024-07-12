import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput,FlatList, TouchableOpacity,ActivityIndicator, Alert } from 'react-native';
// import getApiHook from './GetApiHook';
export default function UseEffect() {
// const {data} = getApiHook();
const [count,SetCount] = useState(0);
const [number,SetNumber] = useState(0);
const [flag,SetFlag] = useState(0);
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState();

const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    setData(json.movies);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(()=>{
 console.log('Simple');
 getMoviesFromApiAsync();
},[]);

useEffect(()=>{
    console.log('Simple UseEffect');
   },[]);

useEffect(()=>{
    console.log('Simple Count');
   },[count]);
useEffect(()=>{
    console.log('Simple Number');
   },[number]);

useEffect(()=>{
    console.log('Simple All');
   },[count,number,flag]);

  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');
  const [myFlag, setMyFlag] = useState(1100);
  const navigation = useNavigation();
  const goAhead = () => {
//  navigation.navigate('Home', {datalaylo:4325});
  }
  const changestate = () =>{
   setMyFlag(myFlag +20);
  }
  return (
   <View style={styles.container}>
     <Text style={{fontSize:20}}> UseEffect</Text>
     <Text>My Flag {myFlag}</Text>
       <TouchableOpacity style={styles.button} onPress={changestate}><Text style={styles.textcolor}>Change State</Text>
       </TouchableOpacity>   
       <TouchableOpacity style={styles.button} onPress={goAhead}>
       <Text style={styles.textcolor}> Go Ahead </Text>
       </TouchableOpacity>
      <StatusBar style="auto" />
{isLoading ? (
  <ActivityIndicator />
) : (
  <FlatList
    data={data}
    keyExtractor={({id}) => id}
    renderItem={({item}) => (
      <Text>
        {item.title}, {item.releaseYear}
      </Text>
    )}
  />
)}
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
