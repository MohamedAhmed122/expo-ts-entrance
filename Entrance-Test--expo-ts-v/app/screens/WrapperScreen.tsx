import React from "react"
import {SafeAreaView, StyleSheet} from "react-native"
import Constants from "expo-constants"

const WrapperScreen: React.FC<{}> = ({children}) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default WrapperScreen;
