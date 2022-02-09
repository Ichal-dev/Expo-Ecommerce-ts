import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BoxContent } from '../atoms'
import { COLOR_NEUTRAL_DARK, COLOR_PRIMARY_BLUE } from '../utils/constans'

const Modal = () => {
    return (
            <BoxContent>
                <View style={styles.container}>
                    <Text>Items (3)</Text>
                    <Text>$598.86</Text>
                </View>
                <View style={styles.container}>
                    <Text>Shipping</Text>
                    <Text>$40.86</Text>
                </View>
                <View style={styles.container}>
                    <Text>Import charges</Text>
                    <Text>$128.86</Text>
                </View>
                <View style={{paddingHorizontal: 16, marginVertical: 12}}>
                    <View style={ { borderRadius : 1, borderStyle: 'dashed', borderWidth: 1, borderColor: 'rgba(161,155,183,1)',}}/>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, paddingBottom: 16}}>
                    <Text style={styles.totalStyle}>Total Price</Text>
                    <Text style={styles.priceTotalStyle}>$766.86</Text>
                </View>
            </BoxContent>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16.5,
        paddingTop: 16
    },
    priceTotalStyle: {
        color: COLOR_PRIMARY_BLUE,
        fontWeight: "700"
    },
    totalStyle: {
        color: COLOR_NEUTRAL_DARK,
        fontWeight: "700"
    }
})

export default Modal
