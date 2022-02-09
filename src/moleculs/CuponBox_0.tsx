import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { BoxContent } from '../atoms'
import { COLOR_PRIMARY_BLUE } from '../utils/constans'

const CuponBox = () => {
    return (
        <View style={{paddingTop: 22}}>
            <BoxContent>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <TextInput placeholder='Masukkan Kode Voucher' style={styles.inputStyle} />
                    <TouchableOpacity style={styles.btnStyle} >
                        <Text style={styles.textStyle}>Apply</Text>
                    </TouchableOpacity>        
                </View>
            </BoxContent>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 17
    },
    btnStyle: {
        backgroundColor: COLOR_PRIMARY_BLUE,
        paddingHorizontal: 24,
        paddingVertical: 17,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        color: "#FFF",
        fontWeight: "700"
    }
})

export default CuponBox
