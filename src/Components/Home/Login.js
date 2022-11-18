import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Checkbox from "react-native-bouncy-checkbox";
import Google from '../../../assets/img/googlelogo.png'
import Facebook from '../../../assets/img/facebook.png'

function Login({navigation, route}) {
    const [isReady, setIsReady] = useState(false)
    //console.log(isReady)
    useEffect(() => {
        const load = async () => {
          await Font.loadAsync({
              "Mapleb": require('../../../assets/fonts/Maplestory_B.otf'),
              "Maple": require('../../../assets/fonts/Maplestory.otf')
            });
            setIsReady(true)
            //console.log(isReady)
        }
        load()
        
    },[]);
    return (
        <View style={styles.Container}>
            {/* <Text style={styles.title}>로그인</Text>
            <TextInput placeholder='아이디' style={styles.input}></TextInput>
            <TextInput placeholder='비밀번호' secureTextEntry={true} ></TextInput>
            <Checkbox />
            <Button title="로그인" /> */}
            {
                isReady ? (
                <View>
                    <Text style={styles.title}>로그인</Text>
                    <TextInput placeholder='아이디' style={styles.input}></TextInput>
                    <TextInput placeholder='비밀번호' style={styles.input} secureTextEntry={true} ></TextInput>
                    <View style={styles.checkCont}>
                        <Checkbox fillColor='#84B148' size={22} text="로그인 유지하기" textStyle={{ fontFamily: "Maple", color: "#868E96", fontSize: 14 }} />
                    </View>
                    
                    <TouchableOpacity style={styles.btnCont} onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.login}>로그인</Text>
                    </TouchableOpacity>

                   
                </View>
                ):(
                    <ActivityIndicator />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 30,
        paddingVertical: 120
    },
    title: {
        fontSize: 24,
        fontFamily: 'Mapleb',
        marginBottom: 40
    },
    input: {
        height: 40,
        borderBottomColor: '#C3C8CC',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    checkCont: {
        flexDirection: 'row'
    },
    login: {
        fontFamily: 'Maple',
        backgroundColor: '#96C656',
        color: 'white',
        width: 350,
        height: 40,
        fontSize: 16,
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 40,
        marginTop: 70
    },
    btnCont: {
        alignItems: 'center',
    },
    loginLogo: {
        width: 24,
        height: 24,
    }
})

export default Login