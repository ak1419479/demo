import { TextInput,Image,Button, StyleSheet,Text,View,Alert, Platform} from 'react-native';
import React from 'react';
import * as DevClient from 'expo-dev-client';
import { HelloWave } from '@/components/HelloWave';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import Myscreen from '@/components/navigation/Myscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/components/navigation/Home'; 
const Stack = createNativeStackNavigator();
export default function HomeScreen() {
const [text, onChangeText] = React.useState('Useless Text');


return (
    <>
    <SafeAreaView style={{flex:3}}>
    <View style={{flex:3}}>
    <NavigationContainer independent={true}>
    <Stack.Navigator>
    <Stack.Screen
          name="Myscee"
          component={Myscreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
 <View style={styles.container1}>
 <Image
        style={styles.tinyLogo}
        source={ {         uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
  </View> 
  <View style={styles.container2}>
  <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
  </View> 
  <View style={styles.container3}>
  <Text><Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      /></Text>  
      </View>  
  </View>
  </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    width:160,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },  container:{
    flex:5,
//    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'green',
    color:'blue',
//alignItems:'center'
  },  tinyLogo: {
    width: 50,
    height: 50,
  },
    container1:{
flex:1,alignItems:'center',
alignContent:'center',
justifyContent:'center',
//flexDirection:'column',
//backgroundColor:'red',
backgroundColor:'blue',
  },
  container2:{
    flex:2,textAlign:'center',
  //  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
        backgroundColor:'yellow',
      },
      container3:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',    //    flexDirection:'column',
            backgroundColor:'orange',
          },
  
});
