import { React, useEffect, useState }from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../../assets//img/danimgil_bgx.png'


  
function Home ({navigation, route}) {
    setTimeout(() => {
        navigation.navigate('Login')
    }, 1300)
    return (
        <View style={styles.Container}>
            <View style={styles.tCont}>
                <Image source={logo} style={styles.img} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center', 
    },
    tCont: {
        alignItems: 'center',
    },
    img: {
        width: 72,
        height: 85,
        marginBottom: 10
    },
})

export default Home;