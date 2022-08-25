import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=c992093155912722e08a7e48934154d9`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
             })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

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
