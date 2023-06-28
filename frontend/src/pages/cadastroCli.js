import React, { useState } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usuarioService from '../services/usuarioService';
import clientesService from '../services/clientesService'
import axios from 'axios';

const cadastroCli = () => {
    const navigation = useNavigation();
  
  
    const [formData, setFormData] = useState({
      email: '',
      nome: '',
      senha: '',
      cpf:'',
      fone:'',
    });
  
    const handleChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async () => {
      try {
        const user = await usuarioService.postUsuario(formData);
        console.log(user.data._id);
        formData._id = user.data._id;
        console.log(formData)
        await clientesService.createClientes(formData);
        alert('Inserido!');
        navigation.navigate('loginCli')
      } catch (error) {
        console.error(error);
      }
    };
  return (
  

    <View style={styles.container}>
        <Text style={styles.frase}>Insira suas Informações!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={formData.nome}
          onChangeText={(text) => handleChange('nome', text)}
        />
      <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
        />
         <TextInput
          style={styles.input}
          placeholder="CPF"
          value={formData.cpf}
          onChangeText={(text) => handleChange('cpf', text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="telefone"
          value={formData.fone}
          onChangeText={(text) => handleChange('fone', text)}
         
        />
       <TextInput
          style={styles.input}
          placeholder="Senha"
          value={formData.senha}
          onChangeText={(text) => handleChange('senha', text)}
          secureTextEntry
        />
       
        
        
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('loginCli')}>
            <Text style={styles.text1}>Já possuo cadastro!</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
   
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    
    
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:150,
    height:40,
    borderRadius: 15,
    backgroundColor: '#0D2667',
  },
  text: {
           
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text1: {
           
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
  },
  text2: {
           
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    flexDirection:'column',
  },
  frase: {
           
    fontSize: 24,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#0D2667',
    bottom: 80,
  },

});


export default cadastroCli;