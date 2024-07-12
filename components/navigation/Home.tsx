import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import getApiHook from './GetApiHook';
//const adUnitId = 'ca-app-pub-1431494326878737/6241621788'
const unitId ='ca-app-pub-1431494326878737/2154913405'
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1431494326878737/6241621788';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  // keywords: ['fashion', 'clothing'],
});
export default function Home() {
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
        interstitial.show();
    });
    // Start loading the interstitial straight away
    interstitial.load();
    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);
   // {navigation1, route}
  // const {data} = getApiHook();
 const {datalaylo} = 252;//route.params;
 const [username, onChangeUsername] = useState('');
 const [passsword, onChangePassword] = useState('');
 const navigation = useNavigation();
 const goAhead = () => {
 navigation.navigate('Myscee', {datalaylo:432});
  }
  const goState = () => {
  navigation.navigate('GoState', {datalaylo:432});
  }
  const goProps = () => {
  navigation.navigate('GoProps', {datalaylo:432});
  }
  const goFlatlist = () => {
  navigation.navigate('Flatlist', {datalaylo:432});
  }
  const goUseEffect = () => {
  navigation.navigate('UseEffect', {datalaylo:432});
  }         
  const goCompressimg = () => {
    navigation.navigate('Compressimg', {datalaylo:432});
    }         
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,marginBottom:10}}>{datalaylo} This is Home Screen 255</Text>
      <BannerAd
     unitId={adUnitId}
     size={BannerAdSize.BANNER}
     requestOptions={{
        requestNonPersonalizedAdsOnly: true,
       }}
    />
      <BannerAd 
      size={BannerAdSize.BANNER} 
//      unitId={TestIds.BANNER} 
      unitId={"ca-app-pub-1431494326878737/2154913405"} 
      // requestOptions={{
      //   requestNonPersonalizedAdsOnly:true,
      // }}
      />
      <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={{color:'white'}}> Go Ahead </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goState}>
        <Text style={{color:'white'}}> Go State </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goProps}>
        <Text style={{color:'white'}}> Go Props </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goFlatlist}>
        <Text style={{color:'white'}}> FlatList/Section List </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goUseEffect}>
        <Text style={{color:'white'}}> UseEffect </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goCompressimg}>
        <Text style={{color:'white'}}> CompressImg </Text>
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
    marginBottom:20,
  },
});
