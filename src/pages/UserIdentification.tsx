import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { ButtonLarge } from '../components/ButtonLarge';

import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function UserIdentification() {

    const [isFocus, setIsFocus] = useState(false)
    const [filled, setFilled] = useState(false)
    const [name, setName] = useState<string>()

    const navigation = useNavigation();

    function handleSubmit() {
        navigation.navigate('Confirmation')
    }

    function handleInputBlur() {
        setIsFocus(false)
        setFilled(!!name)
    }

    function handleInputFocus() {
        setIsFocus(true)
    }

    function handleInputChange(value: string) {
        setFilled(!!value)
        setName(value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>

                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {filled ? '😀' : '🙂'}
                                </Text>

                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocus || filled) && { borderColor: colors.green }
                                ]}
                                placeholder='Digite um nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <ButtonLarge
                                    onPress={handleSubmit}
                                    title={'Confirmar'}
                                />
                            </View>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',

    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,

    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
    }
})