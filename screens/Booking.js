import { View, StyleSheet, Button, Image, ScrollView } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListTours from '../components/ListTours';

const categories = ['Aventura', 'Cultural', 'Naturaleza', 'Urbano', 'Misterio y Terror'];


const Booking = () => {
    const navigation = useNavigation();
    
  
    return(
        <View>
        <SafeAreaView>
            <View>
                <Text>Tour Spotter</Text>
                <Button title='Search' onPress={() => navigation.navigate('Search')}></Button>
                <Text>Maps</Text>
                <Button title='Maps' onPress={() => navigation.navigate('Map')}></Button>
            </View>
        </SafeAreaView>


        <ScrollView
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={{paddingBottom: 10}}>

            {categories.map(category => (
            <View key={category} style={{ marginVertical: 10 }}>
                <Text>{category}</Text>
                <ListTours category={category} />
            </View>
            ))}
            
        </ScrollView>
        </View>
    ); 
    
  };
  

  
export default Booking;