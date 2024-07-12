import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import getApiHook from './GetApiHook';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export default function Compressimg() {
  
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
  const [text, setText] = useState('');


const NumericTextInput = () => {
    const [text, setText] = useState('');
}  
    const handleTextChange = (inputText) => {
      // Remove any non-numeric characters using regular expression
      const numericText = inputText.replace(/[^0-9]/g, '');
      setText(numericText);
    };
    const DocPicker = () => {
        const [ doc, setDoc ] = useState();
        const pickDocument = async () => {
            let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
                if (response.type == 'success') {          
                  let { name, size, uri } = response;
                  let nameParts = name.split('.');
                  let fileType = nameParts[nameParts.length - 1];
                  var fileToUpload = {
                    name: name,
                    size: size,
                    uri: uri,
                    type: "application/" + fileType
                  };
                  console.log(fileToUpload, '...............file')
                  setDoc(fileToUpload);
                } 
              });
            // console.log(result);
            console.log("Doc: " + doc.uri);
        }
    
        const postDocument = () => {
            const url = "http://192.168.10.107:8000/upload";
            const fileUri = doc.uri;
            const formData = new FormData();
            formData.append('document', doc);
            const options = {
                method: 'POST',
                body: formData,
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data',
                },
            };
            console.log(formData);
    
            fetch(url, options).catch((error) => console.log(error));
        }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}> State(Mutable)</Text>
<Text>My Flag {myFlag}</Text>
<Button title="Select Document" onPress={pickDocument} />
            <Button title="Upload" onPress={postDocument} />


<TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        keyboardType="numeric" // This sets the keyboard to numeric
        placeholder="Enter numeric (KB)"
      />

  <TouchableOpacity style={styles.button} onPress={changestate}><Text style={styles.textcolor}>Compress</Text>
    </TouchableOpacity>   



    <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={styles.textcolor}> Go Ahead </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
      },
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
