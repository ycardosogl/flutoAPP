import React, { useState } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const loginCli = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = () => {
      const user = {
        email: email,
        senha: senha
      }
  
      usuarioService
        .loginUsuario(user)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            const id_cliente = response.data
            console.log(id_cliente)
            Alert.alert('Bem-vindo!');
            navigation.navigate('Routes', { id_cliente })
          }
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage('Email ou senha inválidos');
        });
    };
  
    const handleLogin = () => {
      navigation.navigate('cadastroCli');
    };

  return (
  

    <View style={styles.container}>
        <Text style={styles.frase}>Ache aqui seu flutuante ideal!</Text>
        <Text style={styles.text4}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="exemplo@gmail.com"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.text4}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha "
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('suasreservas')}>
            <Text style={styles.text1}>cadastre-se</Text>
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
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:180,
    height:50,
    borderRadius: 15,
    backgroundColor: '#0D2667',
  },
  text: {
           
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },
  text1: {
           
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'green',
  },

  text4: {
           
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#695C5C',
    right:155,
    bottom:5

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


export default loginCli;
