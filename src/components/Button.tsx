import React from 'react';

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';
import { Entypo } from '@expo/vector-icons'

import colors from '../styles/colors';

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >

            <Entypo
                name='chevron-thin-right'
                size={20}
                color='#fff'
            />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({


    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },

})