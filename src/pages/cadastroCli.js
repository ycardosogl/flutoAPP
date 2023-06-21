import React, { useState } from 'react';
import { View, Text,  TextInput,TouchableOpacity, Image, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cadastroCli = () => {
    const navigation = useNavigation();
  
  
    const [formData, setFormData] = useState({
      _id: '',
      email: '',
      nome: '',
      telefone: '',
      senha: '',
      confirmasenha: '',
      nrsec: '',
    });
  
    const handleChange = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async () => {
      try {
        const teste = (formData.nrsec = '123');
    
        if (
          formData.nome.trim() === '' ||
          formData.email.trim() === '' ||
          formData.senha.trim() === ''
        ) {
          alert('Preencha todos os campos!');
          return;
        } else if (formData.confirmasenha !== formData.senha) {
          alert('Verifique se as senhas são iguais');
          return;
        } else if (formData.telefone.trim().length < 11) {
          alert('Número de telefone inválido!');
          return;
        }
    
        try {
          const user = await usuarioService.postUsuario(formData);
          try {
            formData._id = user.data;
            console.log(formData._id)
            await clientesService.postClientes(formData);
            alert('Inserido com Sucesso!');
            navigation.navigate('Login')
          } catch (error) {
            console.error(error);
          }
        } catch (error) {
          console.error(error);
        }
    
        // Zerar os valores dos inputs
        setFormData({
          email: '',
          nome: '',
          telefone: '',
          senha: '',
          confirmasenha: '',
          nrsec: '',
        });
      } catch (error) {
        console.error(error);
      }
    };
  return (
  

    <View style={styles.container}>
        <Text style={styles.frase}>Insira suas Informações!</Text>
        <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Criar Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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