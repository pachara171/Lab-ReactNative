import React from "react"
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View>
        <Text style={styles.style_text}>{props.main}</Text>
        <Text style={styles.style_text}>{props.description}</Text>
        <View>
            <Text style={styles.style_text}>{props.temp}°C</Text>
        </View>
    </View>
    );
   }
   const styles = StyleSheet.create({
    style_text: {
        color: "white",
        textAlign: 'center',
        padding: 20,
        fontSize: 18,
    },
});