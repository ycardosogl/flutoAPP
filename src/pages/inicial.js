import React, { useState } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button,Header} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const inicial = () => {
const navigation = useNavigation();

    return (

        
     
<View style={styles.container}>
<TextInput
        placeholder="Insira o local desejado"
        secureTextEntry
        onChangeText={setLo}
        value={password}
      />
          
    </View>

      );
    };


const styles = StyleSheet.create({
  

});


export default inicial;
