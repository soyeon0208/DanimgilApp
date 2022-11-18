import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import LoadFont from '../../font';

function SearchBar(props) {
    const isReady = LoadFont()
    return(
        <View>
            {isReady ? (
                <View style={styles.search}>
                    <TextInput 
                        style={styles.searchArea} 
                        placeholder='장소를 검색해보세요' 
                        placeholderTextColor="#ADB5BD"
                        onPressIn={()=> {
                            if (props.check) props.nav.jumpTo('Search')
                        }}
                    />
                    <View style={styles.searchGo}>
                        <Ionicons color="white" size={16} name="arrow-forward-circle" />
                        <Text style={styles.searchGoText}>길찾기</Text>
                    </View>
                </View>
            ) : (
                <ActivityIndicator />
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row'
    },
    searchArea: {
        backgroundColor: '#DEE2E6',
        fontFamily: 'Maple',
        width: 310,
        height: 50,
        fontSize: 12,
        paddingLeft: 16,
        borderRadius: 8
    },
    searchGo: {
        width: 50,
        height: 50,
        backgroundColor: '#96C656',
        alignItems: 'center',
        paddingTop: 8,
        borderRadius: 8,
        marginLeft: 8
    },
    searchGoText: {
        color: 'white', 
        fontSize: 9, 
        fontFamily: 'Maple',
        marginTop: 3,
    },

})

export default SearchBar