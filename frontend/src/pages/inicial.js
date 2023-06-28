import React, { useState, useEffect } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button,Header, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import flutuantesService from '../services/flutuantesService';

const inicial = () => {
const navigation = useNavigation();
const [flutuantes, setFlutuantes] = useState([]);


useEffect(() => {
  async function fetchFlutuantes() {
    try {
      const response = await flutuantesService.getFlutuantes();
      console.log(response.data);
      setFlutuantes(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchFlutuantes();
}, []);





    return (

      
    
      <View style={styles.galleryContainer}>

<TouchableOpacity onPress={() => navigation.navigate('suasreservas')}>
          <Image
      source={require('../pages/imagens/perfil.png')}
      style={styles.logo} ></Image>
</TouchableOpacity>

    <ScrollView contentContainerStyle={styles.gallery}>
        {flutuantes.map((imagem, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('reserva')}
          > 
            <Image source={require('./imagens/1.jpg')} style={styles.image} />
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>{imagem.flutuante}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

      );
    };

const styles = StyleSheet.create({
  logo:{
      
    left:340,
     width:50,
        height:50,
        top:10
        

     
 }
,

});


export default inicial;
