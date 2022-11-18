import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from './SearchBar';
import LoadFont from '../../font';

const checkPage = 0

function Search () {
    const isReady = LoadFont()
    return (
        <View style={styles.Cont}>
            {
                isReady ? (
                    <View>
                        <SearchBar check={checkPage} />
                        <View>
                            <Text style={styles.title}>검색 필터</Text>
                            <ScrollView>
                                <TouchableOpacity style={{...styles.filterCont, backgroundColor: '#E64980'}}>
                                    <Text style={styles.filter}>가족과 함께</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...styles.filterCont, backgroundColor: '#FAB005'}}>
                                    <Text style={styles.filter}>아이와 함께</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...styles.filterCont, backgroundColor: '#82C91E'}}>
                                    <Text style={styles.filter}>동물과 함께</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...styles.filterCont, backgroundColor: '#4C6EF5'}}>
                                    <Text style={styles.filter}>애인과 단 둘이</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{...styles.filterCont, backgroundColor: '#495057'}}>
                                    <Text style={styles.filter}>혼자서도 즐겁게</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View></View>
                    </View>
                ):(
                    <ActivityIndicator />
                )
            }
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    Cont: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'Mapleb',
        fontSize: 20,
        paddingTop: 26,
        paddingBottom: 16,
        color: '#495057'
    },
    filterCont: {
        width: 96,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
        
    },
    filter: {
        color: 'white',
        fontFamily: 'Maple',
        fontSize: 13
    }
})

export default Search;