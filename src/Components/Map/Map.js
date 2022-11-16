import React from 'react';
import { View, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


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



function Map () {    
    return (
        <View style={{flex: 1}}>
            <MapView provider={PROVIDER_GOOGLE} />
            
        </View>
    )
}

export default Map;