import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
// import mapi from "../../../assets/img/mapicon.png";
// import searchi from "../../../assets/img/search.png";
// import avatari from "../../../assets/img/standing-up-man.png";
// import footprinti from "../../../assets/img/footprint.png";
// import writingi from "../../../assets/img/writing.png";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Map from '../Map/Map';
import Search from '../Search/Search';
import Avatar from '../Avatar/Avatar';
import Footprint from '../Footprint/Footprint';
import My from '../My/My';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator()

function Menu(){
    //#53555B
    return (
        <Tab.Navigator 
            initialRouteName="Map" 
            screenOptions={{ 
                headerShown: false, 
                activeTintColor: "blue",
                tabBarActiveTintColor: "#4C4F52",
                tabBarInactiveTintColor: "#878F96",
                tabBarStyle: {
                    backgroundColor: '#DEE2E6',
                    height: 70,
                    paddingBottom: 20,
                    paddingTop: 5
                },
                
            }}

        >
            <Tab.Screen
            name="Map"
            component={Map}
            options={{
                title: '지도',
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="map" color={color} size={size} />)
                },
            }}
            />
            <Tab.Screen
            name="Search"
            component={Search}
            options={{
                title: '탐색',
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="compass" color={color} size={size} />)
                },
            }}
            />
            <Tab.Screen
            name="Avatar"
            component={Avatar}
            options={{
                title: '아바타',
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="person" color={color} size={size} />)
                },
            }}
            />
            <Tab.Screen
            name="footprint"
            component={Footprint}
            options={{
                title: '발자국',
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="paw" color={color} size={size} />)
                },
            }}
            />
            <Tab.Screen
            name="my"
            component={My}
            options={{
                title: '기록',
                tabBarIcon: ({color, size}) => {
                    return (<Ionicons name="book" color={color} size={size} />)
                },
            }}
            />
        </Tab.Navigator>
       
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#DEE2E6',
        
    },
    
})

export default Menu