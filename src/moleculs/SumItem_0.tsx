import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BoxContent } from '../atoms'
import { Entypo } from '@expo/vector-icons';
import { COLOR_NEUTRAL_GREY, COLOR_NEUTRAL_LIGHT } from '../utils/constans';


type SumItemProps = {
    children?: JSX.Element | JSX.Element[]
}

const SumItem = ({children}: SumItemProps) => {
    return (
        <View style={styles.container}>
                <View style={styles.wrapperContent}>
                <Entypo name="minus" size={16} color={COLOR_NEUTRAL_GREY}/>
                    <Text style={styles.sumStyle}>1</Text>
                    <Entypo name="plus" size={16} color={COLOR_NEUTRAL_GREY} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 104,
        borderRadius: 8,
        borderColor: COLOR_NEUTRAL_LIGHT,
        position: "absolute",
        right: 16,
        bottom: 16
    },
    sumStyle: {
        backgroundColor: COLOR_NEUTRAL_LIGHT,
        paddingHorizontal: 18,
        paddingVertical: 3
    },
    wrapperContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8
    }
})

export default SumItem
