import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Crypto Valyuta
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#FF9900",
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white'
    }
})
console.log("Hello world");
const { headerContainer, header } = styles;

export default Header;