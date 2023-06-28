import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cancelado = () => {
const navigation = useNavigation();

    return (
        
          <View style={styles.fundo} >
            
            <Image
          source={require('../pages/imagens/confirmado.png')}
          style={styles.logo}
          />
          <Text style={styles.text2}>Confirmado</Text>
          <Text style={styles.text1}>Sua Reserva foi confirmada,{'\n'} aguardamos por você!</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('inicial')}>
                <Text style={styles.text}>Finalizar</Text>
            </TouchableOpacity>
           
          </View>

      );
    };


    const styles = StyleSheet.create({


        fundo:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
           
        }
    ,

    logo:{
      
     bottom:50,
      width:250,
         height:250,
         left:30,
              
  }
,
        button: {
            alignItems: 'center',
            justifyContent: 'center',
         width:350,
         height:60,
          borderRadius: 15,
          elevation: 3,
          backgroundColor: '#0D2667',
      top:130
          
        },
        text: {
           
          fontSize: 22,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
      
          
          
        
        text2: {
           
          fontSize: 38,
          lineHeight: 51,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'black',
          bottom:50,
          right:5
          
        },
        text1: {
           
            fontSize: 18,
            lineHeight: 21,
            fontWeight: '',
            letterSpacing: 0.25,
            color: 'blue',
            bottom:40,
          },
      });

    export default cancelado;