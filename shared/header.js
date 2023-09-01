import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
    return (
        <View styles={styles.header}>
            <View style={{flexDirection: 'row', gap : 10, alignItems: 'center'}}>
            <Image style={{width : 18, height : 18, }} source={require('../assets/images/heart_logo.png')}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, headerText: {
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 20,
        color: '#333'
    }, icon: {
        position: 'absolute',
        left: 16
    }
})