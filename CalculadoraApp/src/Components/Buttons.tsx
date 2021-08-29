import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string,
    color?: string,
    itsZero?: boolean,
    click: (numero :string) => void
}

export const Buttons = ( { text, color = 'gray', itsZero = false, click}: Props) => {
    return (
        <TouchableOpacity 
            onPress={() => click(text)}
        >
                <View style={[{backgroundColor: color}, (itsZero === true)? styles.FABZERO : styles.FAB]}>
                    <Text style={styles.FABtext}>{text}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    FAB: {
        height: 80,
        width: 80,
        borderRadius: 80,
        justifyContent: 'center',
        alignContent:'center',
        marginHorizontal: 2.5,
        marginVertical: 2.5
    },
    FABZERO: {
        height: 80,
        width: 160,
        borderRadius: 80,
        justifyContent: 'center',
        alignContent:'center',
        marginHorizontal: 2.5,
        marginVertical: 2.5,
    },
    FABtext: {
        textAlign: 'center',
        fontSize: 36,
    }
})