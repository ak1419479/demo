import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput,SectionList, TouchableOpacity,FlatList, Alert } from 'react-native';
// import getApiHook from './GetApiHook';
const myDummyArray1 = [
    {key:0,
    title:'India',
    data:[{key:0,title:'Delhi'},
        {key:1,title:'Delhi'},
        {key:2,title:'Delhi'},
        {key:3,title:'Delhi'},
        {key:4,title:'Delhi'}
    ]}
];
const myDummyArray = [ {key:0,title:'ABC',phone:'8984656'},
    {key:1,title:'D556EF',phone:'8984656'},{key:2,title:'D545EF',phone:'8984656'}
    ,{key:3,title:'DEdfhF',phone:'8984656'}
    ,{key:4,title:'DEdfhdF',phone:'8984656'}
    ,{key:5,title:'DEdfhdF',phone:'8984656'}
    ,{key:6,title:'DEdshdF',phone:'8984656'}
    ,{key:7,title:'DEffdF',phone:'8984656'}
    ,{key:8,title:'DEffF',phone:'8984656'}
    ,{key:9,title:'FASEF',phone:'8984656'}
    ,{key:10,title:'FASEF',phone:'8984656'}
    ,{key:11,title:'FASEF',phone:'8984656'}
    ,{key:12,title:'FASEF',phone:'8984656'}
    ,{key:13,title:'FASEF',phone:'8984656'}
    ,{key:14,title:'FASEF',phone:'8984656'}
    ,{key:15,title:'FASEF',phone:'8984656'}
    ,{key:16,title:'FASEF',phone:'8984656'}
]
export default function Flatlist() {
  
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
    navigation.navigate('Home', {datalaylo:myFlag});
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}> Flatlist</Text>
   
   <FlatList data={myDummyArray} keyExtractor={item=>item.key}
renderItem={({item})=>(
<View style={styles.flatcolor}><Text style={styles.flattextcolor}>{item.title}</Text>
<Text style={styles.flattextcolor1}>{item.phone}</Text></View>
)}>

   </FlatList>

   <Text style={{fontSize:20}}> Section List</Text>
   <SectionList sections={myDummyArray1} keyExtractor={item=>item.key}
renderSectionHeader={({section:{title}})=>(<Text>{title}</Text>)}
renderItem={({item})=>(
<View style={styles.flatcolor}><Text style={styles.flattextcolor}>{item.title}</Text>
<Text style={styles.flattextcolor1}>{item.phone}</Text></View>
)}>

   </SectionList>

    <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={styles.textcolor}> Go Home </Text>
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
    marginTop:30,
    marginBottom:20
  },
  flatcolor:{
        flex:3,
        backgroundColor:'green',
        marginTop:10,
        padding:5,
        flexDirection:'row',
       // alignContent:'center',
       // alignItems:'center',
        width:300
  },
  flattextcolor:{
    flex:2,
   // alignItems:'center',
    color:'#fff',
  },
  flattextcolor1:{
    flex:1,
   // alignItems:'center',
    color:'#fff',
  },
});
