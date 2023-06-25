import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
const navigation = useNavigation();

    return (
        
          <View style={styles.fundo} >
            
            <Image
          source={require('../pages/imagens/logo.png')}
          style={styles.logo}
          />
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('loginCli')}>
                <Text style={styles.text} >Procuro Flutuante</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('loginProp')}>
                <Text style={styles.text2} >Propietario Flutuante</Text>
            </TouchableOpacity>
           
          </View>

      );
    };


    const styles = StyleSheet.create({


        fundo:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#A9C8EC',
           
        }
    ,

    logo:{
      
     bottom:40,
      width:350,
         height:300,
         

      
  }
,
        button: {
            alignItems: 'center',
            justifyContent: 'center',
         width:210,
         height:60,
          borderRadius: 15,
          elevation: 3,
          backgroundColor: '#0D2667',
          bottom:50
          
        },
        text: {
           
          fontSize: 18,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
        button2: {
            alignItems: 'center',
            justifyContent: 'center',
         width:210,
         height:60,
          borderRadius: 15,
          elevation: 3,
          backgroundColor: '#0D2667',
          bottom:20
          
          
        },
        text2: {
           
          fontSize: 18,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
       
      });

    export default Home;
