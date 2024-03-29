import React from 'react'
import { View, Text, StyleSheet,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Line } from '../../atoms'
import { Category, SearchItem } from '../../moleculs'

class Explore extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SearchItem />
                <Line />
                <Text style={styles.titleFashion}>Man Fashion</Text>
                <View style={styles.wrapperFashion}>
                    <Category />
                </View>
                <Text style={styles.titleFashion}>Woman Fashion</Text>
                <View style={styles.wrapperFashion}>
                    <Category />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 16,
        flex: 1,
    },
    wrapperFashion: {
        flexDirection: "row",
        padding: 16,
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    titleFashion: {
        paddingHorizontal: 16,
        paddingTop: 16
    }
})

export default Explore
