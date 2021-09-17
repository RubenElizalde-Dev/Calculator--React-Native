import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'

export const PrincipalScreen = () => {

    const a = "../../assets/images/300.png";


    const image = require(a);

    return (
        <View style={styles.container}>

            <ScrollView>
                <Image style={styles.image} source={image}></Image>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>
                <View style={styles.workOut}>

                </View>

                <View style={styles.about}>

                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    image: {
        alignSelf: 'center',
        marginTop: 22,
        marginHorizontal: 12
    },
    workOut: {
        height: 110,
        borderRadius: 20,
        backgroundColor: 'black',
        marginHorizontal: 30,
        marginTop: 5,
        marginBottom: 5
    },
    about:{
        height:100,
        backgroundColor: '#087E8B',
        marginTop:10
    }
});