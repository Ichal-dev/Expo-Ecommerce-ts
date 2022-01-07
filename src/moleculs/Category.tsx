import React from 'react'
import {  SafeAreaView, StyleSheet, Text, View} from 'react-native'
import { Shirt, Manunderwater, Tshirt, Shoes, Dress } from '../asserts/svg'
import { Circle} from "../atoms"
import { COLOR_NEUTRAL_GREY, COLOR_NEUTRAL_LIGHT } from '../utils/constans'

const Category = () => {
    return (
        <>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Circle>    
                    <Shirt height={24} width={24} />
                </Circle>
                    <Text style={{color: COLOR_NEUTRAL_GREY}}>Man Shirt</Text>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Circle>    
                    <Tshirt height={24} width={24} />
                </Circle>
                    <Text style={{color: COLOR_NEUTRAL_GREY}}>T-Shirt</Text>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Circle>    
                    <Shoes height={24} width={24} />
                </Circle>
                    <Text style={{color: COLOR_NEUTRAL_GREY}}>Shoes</Text>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Circle>    
                    <Dress height={24} width={24} />
                </Circle>
                    <Text style={{color: COLOR_NEUTRAL_GREY}}>Dress</Text>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Circle>    
                    <Manunderwater height={24} width={24} />
                </Circle>
                    <Text style={{color: COLOR_NEUTRAL_GREY}}>Man Under</Text>
            </View>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Circle>    
                    <Shirt height={24} width={24} />
                </Circle>
                    <Text style={{color: COLOR_NEUTRAL_GREY}}>Man Shirt</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
 
    }
})

export default Category
