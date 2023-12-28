# Projeto de Autenticação com Firebase

Este projeto implementa um sistema de autenticação utilizando o Firebase para login e registro de usuários. Ele é construído com React Native e utiliza o pacote `@react-navigation/native` para navegação entre telas.

## Estrutura do Projeto

O projeto é dividido em duas telas principais: `LoginScreen` e `HomeScreen`. Além disso, a lógica de autenticação e configurações do Firebase estão centralizadas no arquivo `firebase.js`.

### `HomeScreen`

A tela `HomeScreen` exibe o email do usuário atualmente autenticado e fornece a opção de fazer logout.

```jsx
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  // Estilos para a tela HomeScreen
});
```

### `LoginScreen`

A tela `LoginScreen` permite que os usuários façam login ou se registrem no sistema.

```jsx
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { logar, criar } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        criar(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
            })
            .catch((error) => alert(error.message));
    };

    const handleLogin = () => {
        logar(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                navigation.navigate('Home');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            {/* ... (Código restante da tela LoginScreen) */}
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    // Estilos para a tela LoginScreen
});
```

### `firebase.js`

O arquivo `firebase.js` contém as configurações do Firebase e funções para criar e autenticar usuários.

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    // ... (Configuração do Firebase)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const criar = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logar = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { auth, criar, logar };
```

## Como Usar

1. Certifique-se de ter o ambiente React Native configurado.
2. Clone o repositório.
3. Instale as dependências usando `npm install`.
4. Execute o aplicativo com `npx react-native run-android` ou `npx react-native run-ios`.

Certifique-se de substituir as configurações do Firebase no arquivo `firebase.js` pelos seus próprios detalhes de configuração. Além disso, considere adaptar o código conforme necessário para atender aos requisitos específicos do seu projeto.
