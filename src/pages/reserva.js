import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button,Header, DatePickerAndroid} from 'react-native';
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import reservasService from '../services/reservasService';
import { TextInputMask } from 'react-native-masked-text'




const reserva = () => {
const navigation = useNavigation();

//para num
const [value, setValue] = useState('');

const handleInputChange = (text) => {
  // Remove qualquer caractere que não seja um número
  const formattedValue = text.replace(/[^0-9]/g, '');
  setValue(formattedValue);
};

//para hora

const [horaInicial, setHoraInicial] = useState('');
  const [horaFinal, setHoraFinal] = useState('');

  const handleHoraInicialChange = (text) => {
    setHoraInicial(text);
  };

  const handleHoraFinalChange = (text) => {
    setHoraFinal(text);
  };
  
  

  //valor
  const valorEmReais = 'R$ 100,00'; // Valor em reais a ser exibido

  const handleSubmit = () => {
    // Faça o processamento com as horas inicial e final aqui
    console.log('Hora Inicial:', horaInicial);
    console.log('Hora Final:', horaFinal);
    
  };
  //data
  
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (text) => {
    setSelectedDate(text);
  };


    return (
  
      <View style={styles.fundo}>
        <Text style={styles.text2}>Instalações Disponíveis</Text>
            <Image
              source={require('../pages/imagens/detalhe.png')}
              style={styles.logo}
            />
        <Text style={styles.text1}>Nova Reserva</Text>

        <TextInput
         style={styles.input3}
        placeholder="YYYY-MM-DD"
        value={selectedDate}
        onChangeText={handleDateChange}
      />


        <TextInput
        style={styles.input}
      value={value}
      onChangeText={handleInputChange}
      keyboardType="numeric"
      placeholder="acompanhantes"
    />
    <TextInput
     style={styles.input1}
        placeholder="Hora Inicial (HH:MM)"
        value={horaInicial}
        onChangeText={handleHoraInicialChange}
      />
      <TextInput
       style={styles.input2}
        placeholder="Hora Final (HH:MM)"
        value={horaFinal}
        onChangeText={handleHoraFinalChange}
      />
      <TextInput 
        style={styles.input4}
        value={valorEmReais}
        editable={false}
      />

      







     <TouchableOpacity  style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>Reservar Agora</Text>
            </TouchableOpacity>
      <TouchableOpacity  style={styles.button1} onPress={handleSubmit}>
                <Text style={styles.text}>Cancelar</Text>
     </TouchableOpacity>
           


    </View>

      );
    };


const styles = StyleSheet.create({
    text1: {
           
        fontSize: 21,
        lineHeight: 21,
        fontWeight: '',
        letterSpacing: 0.25,
        color: 'Black',
        left:14,
        top:218
        
      },

      text2: {
           
        fontSize: 21,
        lineHeight: 21,
        fontWeight: '',
        letterSpacing: 0.25,
        color: 'Black',
        left:14,
        top:210
        
      },
      fundo:{
        backgroundColor: 'white',
        height: '100%'
        
       },

    logo:{
      left:19,
      top:215
    },

    input: {
      width: '44%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      paddingHorizontal: 10,
      borderRadius: 9,
      backgroundColor: '#fff',
      left:10,
      top:225 
    },
    button: {
      
      alignItems: 'center',
      justifyContent: 'center',
      width:180,
      height:50,
      borderRadius: 15,
      backgroundColor: '#658EF8',
      left:10,
      top:160,
      borderWidth:1
      
      
    },

    button1: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      width:180,
      height:50,
      borderRadius: 15,
      backgroundColor: '#FF0000',
      left:200,
      top:110,
      borderColor:'#0D2667',
      borderWidth:1
     
    },

    
    text: {
             
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      
    },

    input1: {
      flexDirection: 'row',
      width: '44%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      paddingHorizontal: 10,
      borderRadius: 9,
      backgroundColor: '#fff',
      left:10,
      top:230 
    },
    input2: {
      width: '44%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      paddingHorizontal: 10,
      borderRadius: 9,
      backgroundColor: '#fff',
      left:200,
      padding: 10,
       fontSize: 16,
       bottom:72,
       top:159,
        
    },
    input3: {
      width: '44%',
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 12,
      paddingHorizontal: 10,
      borderRadius: 9,
      backgroundColor: '#fff',
      left:10,
      top:225
      
       },

      input4: {
        width: '44%',
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 9,
        backgroundColor: '#fff',
        left:10,
        top:160

       }



});


export default reserva;

