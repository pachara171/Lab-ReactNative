import React, { useState } from "react";
import Forecast from "./Forecast";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: 'main',
    description: 'description',
    temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop} >
                <Text style={styles.style_text}>Zip Code  is  {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
 );
}
const styles = StyleSheet.create({
    backdrop: {    
        paddingTop: 50.00,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    style_text: {
        color: "white",
        paddingTop: 30,
        fontSize: 18
    }
});
