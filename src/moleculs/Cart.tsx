import React from 'react'
import { View, Text , Image, StyleSheet} from 'react-native'
import { BoxContent } from '../atoms'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLOR_PRIMARY_BLUE, COLOR_PRIMARY_RED } from '../utils/constans';
import SumItem from './SumItem';

const Cart = () => {
    return (
        <>
            <BoxContent>
                <View style={styles.sectionStyle}>
                    <Image source={require("../asserts/svg/nike3.png")} style={{ height: 72, width: 72, borderRadius: 5 }} />
                    <View style={styles.sectonCont}>
                        <Text numberOfLines={2} style={styles.titleStyle}>Nike Air Zoom Pegasus{'\n'}36 Miami</Text>   
                        <Text style={styles.priceStyle}>$299,43</Text>
                    </View>
                    <View style={styles.sectIcon}>
                        <AntDesign name="heart" size={24} color="black" style={ {color: COLOR_PRIMARY_RED}}/>
                        <Feather name="trash" size={24} color="black" style={{paddingHorizontal: 12}} />
                    </View>
                </View>
                    <SumItem/>
            </BoxContent>
            <View style={ {marginTop: 16}}/>
            <BoxContent>
                <View style={styles.sectionStyle}>
                    <Image source={require("../asserts/img/nikered.png")} style={{ height: 72, width: 72, borderRadius: 5 }} />
                    <View style={styles.sectonCont}>
                        <Text numberOfLines={2} style={styles.titleStyle}>Nike Air Zoom Pegasus{'\n'}36 Miami</Text>   
                        <Text style={styles.priceStyle}>$299,43</Text>
                    </View>
                    <View style={styles.sectIcon}>
                        <AntDesign name="heart" size={24} color="black" style={ {color: COLOR_PRIMARY_RED}}/>
                        <Feather name="trash" size={24} color="black" style={{paddingHorizontal: 12}} />
                    </View>
                </View>
                    <SumItem/>
            </BoxContent>
        </>
    
    )
}

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: "row",
        padding: 16,
    },
    sectonCont: {
        paddingHorizontal: 14,
        justifyContent: "space-between"
    },
    sectIcon: {
        paddingHorizontal: 13,
        flexDirection: "row",
    },
    titleStyle: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "700",
        letterSpacing: 0.5
    },
    priceStyle: {
        color: COLOR_PRIMARY_BLUE,
        fontWeight: "700",
        letterSpacing: 0.5
    }
})
export default Cart
