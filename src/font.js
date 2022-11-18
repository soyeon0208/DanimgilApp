import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

function LoadFont() {
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        const load = async () => {
          await Font.loadAsync({
              "Mapleb": require('../assets/fonts/Maplestory_B.otf'),
              "Maple": require('../assets/fonts/Maplestory.otf')
            });
            setIsReady(true)
        }
        load()
        
    },[]);
    return isReady
}

export default LoadFont
