import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Buttons } from '../Components/Buttons'
import { CalculadoraHook } from '../hooks/CalculadoraHook'

export const CalculadoraScreen = () => {

    const { 
        agregarNumero, 
        limpiar,
        result,
        sumar,
        restar,
        multiplicar,
        dividir,
        del,
        cambiarSigno,
        numero, 
        numeroAnterior } = CalculadoraHook();

    return (
        <View style={styles.container}>

            <View style={styles.ResultadoContainer}>
                <Text style={styles.ResultadoAnterior}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    {numeroAnterior}
                </Text>
                <Text style={styles.Resultado}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    {numero}
                </Text>
            </View>

            <View style={styles.row}>
                <Buttons text='C' color='#a4a5a4' click={limpiar} />
                <Buttons text='+/-' color='#a4a5a4' click={cambiarSigno} />
                <Buttons text='D' color='#a4a5a4' click={del} />
                <Buttons text='/' color='#fe9f0a' click={dividir} />
            </View>

            <View style={styles.row}>

                <Buttons text='7' color='#707170' click={agregarNumero} />
                <Buttons text='8' color='#707170' click={agregarNumero} />
                <Buttons text='9' color='#707170' click={agregarNumero} />
                <Buttons text='X' color='#fe9f0a' click={multiplicar} />
            </View>

            <View style={styles.row}>

                <Buttons text='4' color='#707170' click={agregarNumero} />
                <Buttons text='5' color='#707170' click={agregarNumero} />
                <Buttons text='6' color='#707170' click={agregarNumero} />
                <Buttons text='-' color='#fe9f0a' click={restar} />
            </View>

            <View style={styles.row}>

                <Buttons text='1' color='#707170' click={agregarNumero} />
                <Buttons text='2' color='#707170' click={agregarNumero} />
                <Buttons text='3' color='#707170' click={agregarNumero} />
                <Buttons text='+' color='#fe9f0a' click={sumar} />
            </View>

            <View style={styles.row}>

                <Buttons text='0' color='#707170' itsZero={true} click={agregarNumero} />
                <Buttons text='.' color='#707170' click={agregarNumero} />
                <Buttons text='=' color='#fe9f0a' click={result} />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 12
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ResultadoAnterior: {
        alignSelf: 'flex-end',
        fontSize: 30,
        color: 'gray',
        marginRight: 16
    },
    Resultado: {
        alignSelf: 'flex-end',
        fontSize: 65,
        color: '#fefffe',
        marginRight: 16
    },
    ResultadoContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingBottom: 20
    }
})