import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import rabbit_F from '../../../assets/img/토끼_확대.png'
import { Ionicons } from 'react-native-vector-icons';
import dress from '../../../assets/img/woman-clothes.png'
import shirt from '../../../assets/img/black.png'
import pants from '../../../assets/img/pants.png'
import shoe from '../../../assets/img/shoe.png'
import hat from '../../../assets/img/pamela.png'
import ring from '../../../assets/img/ring.png'

function Avatar () {
    return (
        <View style={styles.Container}>
            <View style={{backgroundColor: 'skyblue'}}>
                <Image source={rabbit_F} style={styles.avatar}></Image>
            </View>
            <ScrollView style={styles.choiceBar} horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ ...styles.clothes, backgroundColor: '#E64980', marginLeft: 24 }}>
                    <Image source={dress} style={styles.clothesImg}></Image>
                </View>
                <View style={{ ...styles.clothes, backgroundColor: '#FAB005' }}>
                    <Image source={shirt} style={styles.clothesImg}></Image>
                </View>
                <View style={{ ...styles.clothes, backgroundColor: '#82C91E' }}>
                    <Image source={pants} style={styles.clothesImg}></Image>
                </View>
                <View style={{ ...styles.clothes, backgroundColor: '#4C6EF5' }}>
                    <Image source={shoe} style={styles.clothesImg}></Image>
                </View>
                <View style={{ ...styles.clothes, backgroundColor: '#7950F2' }}>
                    <Image source={hat} style={styles.clothesImg}></Image>
                </View>
                <View style={{ ...styles.clothes, backgroundColor: '#495057' }}>
                    <Image source={ring} style={styles.clothesImg}></Image>
                </View>
                <View style={{ ...styles.clothes, backgroundColor: '#E64980' }}>
                    <Image source={dress} style={styles.clothesImg}></Image>
                </View>
            </ScrollView>
            <View style={styles.itemArea}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 14}}>
                        <View style={styles.item}></View>
                        <View style={styles.item}></View>
                    </View>
                    <View>
                        <View style={styles.item}></View>
                        <View style={styles.item}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,

    },
    avatar: {
        width: 250,
        height: 250,
        
    },
    choiceBar: {
        marginTop: 16,
    },
    clothes: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#DEE2E6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16
    },
    clothesImg: {
        width: 25,
        height: 25,
        
    },
    itemArea: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FAB005',
        height: 250,
        borderRadius: 16,
    },
    item: {
        width: 150,
        height: 100,
        backgroundColor: '#F1F3F5',
        marginBottom: 12,
        borderRadius: 16
    }
})

export default Avatar;