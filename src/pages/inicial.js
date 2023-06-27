import React, { useState } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button,Header} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const inicial = () => {
const navigation = useNavigation();

    return (

        
     
<View style={styles.container}>

<TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('reserva')}>
                <Text style={styles.text} >Procuro Flutuante</Text>
            </TouchableOpacity>
    </View>

      );
    };


const styles = StyleSheet.create({
  

});


export default inicial;
