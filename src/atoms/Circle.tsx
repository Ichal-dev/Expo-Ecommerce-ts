import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLOR_NEUTRAL_LIGHT } from '../utils/constans'

type CircleProps = {
    children?: JSX.Element | JSX.Element[]
}

const Circle = ({children}: CircleProps) => {
    return (
        <View style={styles.wrapperCircle}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperCircle: {
        width: 70,
        height: 70,
        borderRadius: 66,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLOR_NEUTRAL_LIGHT,
        marginRight: 8
    }
})

export default Circle
