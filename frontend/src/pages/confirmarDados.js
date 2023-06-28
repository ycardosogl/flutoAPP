import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const confirmaDados = () => {
const navigation = useNavigation();

    return (
        
          <View style={styles.fundo} >
            <Text style={styles.text3} >Confira seus Dados  {'\n'}  e da sua Reserva </Text>
            
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('loginProp')}>
                <Text style={styles.text2} >Confirmar</Text>
            </TouchableOpacity>
           
          </View>

      );
    };


    const styles = StyleSheet.create({


        fundo:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
           
        }
    ,

   
        
          
        
        
        button2: {
            alignItems: 'center',
            justifyContent: 'center',
         width:350,
         height:60,
          borderRadius: 15,
          elevation: 3,
          backgroundColor: '#658EF8',
          top:265
          
          
        },
        text2: {
           
          fontSize: 26,
          lineHeight: 27,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
          top:2
        },
        text3: {
          bottom:245,
          fontSize: 30, 
          left:10,
          color: '#0D2667',
            
          },
        
       
      });

    export default confirmaDados;
