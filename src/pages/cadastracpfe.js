
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cadastracpfe = () => {
const navigation = useNavigation();
const [CPF, setCPF] = useState('');
const [Telefone, setTelefone] = useState('');

    return (
        
          <View style={styles.fundo} >
             <Text style={styles.text1}>CPF</Text>

             <TextInput
        style={styles.input}
        placeholder="xxxxxxxxxxx"
        onChangeText={setCPF}
        value={CPF}
      />
  <Text style={styles.text1}>Telefone</Text>

           <TextInput
        style={styles.input}
        placeholder="(xx)xxxxxxxxx"
        onChangeText={setTelefone}
        value={Telefone}
        
      />
       <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('inicial')}>
                <Text style={styles.text2}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

      );
    };


    const styles = StyleSheet.create({


        fundo:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'fff',
           
        }
    ,
    input: {
        width: '90%',
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
        
        
      },
    logo:{
      
     bottom:50,
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
          top:90
          
        },
        text1: {
           
          fontSize: 13,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'black',
          right:150
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
           
          fontSize: 20,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
       
      });

    export default cadastracpfe;