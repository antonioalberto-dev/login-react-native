import React, { useState, useEffect } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, Animated, Keyboard
} from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 200, y: 225 }));

  useEffect(() => {

    // keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    // keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      })
    ]).start();
  }, []);

  // function keyboardDidShow() {
  //   Animated.parallel([
  //     Animated.timing(logo.x, {
  //       toValue: 55,
  //       duration: 100,
  //     }),
  //     Animated.timing(logo.y, {
  //       toValue: 65,
  //       duration: 100,
  //     }),
  //   ]).start();
  // }

  // function keyboardDidHide() {
  //   Animated.parallel([
  //     Animated.timing(logo.x, {
  //       toValue: 130,
  //       duration: 100,
  //     }),
  //     Animated.timing(logo.y, {
  //       toValue: 155,
  //       duration: 100,
  //     }),
  //   ]).start();
  // }

  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
            }}
            source={require('./assets/logo.png')}
          />
        </View>

        <Animated.View
          style={[
            styles.container, {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ]
            }
          ]}
        >
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
              Ainda não é cadastrado? Clique aqui!
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f0f0'
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
    borderRadius: 15,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#009fff',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginBottom: 15,
    borderRadius: 15,
    fontSize: 17,
  },
  textSubmit: {
    color: '#fff',
  },
  btnRegister: {
    marginTop: 10,
  },
  textRegister: {
    color: '#000',
  }
})