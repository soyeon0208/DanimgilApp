import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Font from 'expo-font';
import { Ionicons } from 'react-native-vector-icons';
import SearchBar from '../Search/SearchBar'


// const handleOnMessage = (e) => {
//     console.log(e)
// }

// const sendMessage = () => {
//     const sendData =JSON.stringify({   
//       type:"cend",
//       id:1,
//       name:"testName",
//       content:"test content",
//       file:null,
//     });

//     webViewRef.current.postMessage(sendData);
//   }

const checkPage = 1

function Map ({ navigation }) {    
   
    return (
        <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 37.342,
                    longitude: 126.8317,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} 
            />

            <SearchBar nav={navigation} check={checkPage} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },

})

export default Map;