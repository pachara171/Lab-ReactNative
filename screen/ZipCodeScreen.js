import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View, StyleSheet, StatusBar, TouchableHighlight, TextInput } from "react-native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Pathum Thani', code: '12000' },
    { place: 'Saraburi', code: '18000' },
    { place: 'Yasothon', code: '35000' },
    { place: 'Nong Khai', code: '43000' },
   ]
   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code})}}>
        <View style={Styles.ZipItem}>
            <Text style={Styles.zipPlace}>{place}</Text>
            <Text style={Styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
    )
   const _keyExtractor = item => item.code

   export default function ZipCodeScreen(){
        const navigation = useNavigation()
        return (
            <View>
                <View style={Styles.search}>
                    <TextInput placeholder = "Seach Places or Zip code"></TextInput>
                </View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
            </View>
    );
   
   }

   const Styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 1,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "red",
        backgroundColor: "#61dafb"
    },
    zipPlace: {
        flex: 1,
        marginLeft: 10,
        fontWeight: "bold"

    },
    zipCode: {
        flex: 1,
        marginLeft: 200,
        fontWeight: "bold"
    },
    search: {
        padding: 5,
        marginBottom: 5,
        marginTop: 10
        
    }
   })
   