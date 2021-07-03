import React from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonLarge({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }

})