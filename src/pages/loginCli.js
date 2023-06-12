import React, { useState } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const loginCli = () => {
    const navigation = useNavigation();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
  

    <View style={styles.container}>
        <Text style={styles.frase}>Ache aqui seu flutuante ideal!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Entrar</Text>
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
