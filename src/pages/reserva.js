import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button,Header,} from 'react-native';
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const reserva = () => {
const navigation = useNavigation();
const [value, setValue] = useState('');

const handleInputChange = (text) => {
  // Remove qualquer caractere que não seja um número
  const formattedValue = text.replace(/[^0-9]/g, '');
  setValue(formattedValue);
};

    return (
  
      <View style={styles.fundo}>
        <Text style={styles.text1}>Instalações Disponíveis</Text>
            <Image
              source={require('../pages/imagens/detalhe.png')}
              style={styles.logo}
            />
        <Text style={styles.text1}>Nova Reserva</Text>
        
        <TextInput
        style={styles.input}
      value={value}
      onChangeText={handleInputChange}
      keyboardType="numeric"
      placeholder="Digite um número"
    />
     <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('inicial')}>
                <Text style={styles.text}>Reservar Agora</Text>
            </TouchableOpacity>
           


    </View>

      );
    };


const styles = StyleSheet.create({
    text1: {
           
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'Black',
        left:10
        
      },
      fundo:{
        backgroundColor: 'white',
       },

    logo:{
      left:5
    },

    input: {
      width: '40%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      paddingHorizontal: 10,
      borderRadius: 9,
      backgroundColor: '#fff',
      left:5 
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width:180,
      height:50,
      borderRadius: 15,
      backgroundColor: '#0D2667',
      left:4
    },
    text: {
             
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      
    },
  



});


export default reserva;

