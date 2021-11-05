import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image
            source={require('./assets/logo.png')}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChange={() => { }}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChange={() => { }}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.textSubmit}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.textRegister}>
              Criar conta gratuita
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    background: '#191919'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 60,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#009fff',
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginBottom: 15,
    borderRadius: 40,
    fontSize: 17,
  },
  textSubmit: {
    color: '#fff',
  },
  btnRegister: {
    marginTop: 10,
  },
  textRegister: {
    color: '#fff',
  }
})