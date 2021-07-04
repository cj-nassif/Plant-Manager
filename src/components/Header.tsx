import React from 'react';

import {
    View, Text, StyleSheet, Image
} from 'react-native';

import UserPng from '../assets/carlosFoto.png';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>Nassif</Text>
            </View>
            <Image
                source={UserPng}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),


    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    greeting: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    }
})
