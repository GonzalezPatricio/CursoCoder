/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import {Header} from './src/components/molecules/header/index';
import {GameStartScreen} from './src/screens/gamestart/index';
import {GameOverScreen} from './src/screens/gameover/index';
import {GameScreen} from './src/screens/gamescreen/index';

export const App = () => {
  const [userNumber, setUserNumber] = useState('');
  const [guessIntentos, setGuessIntentos] = useState(0);

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessIntentos(0);
  } 
  const handlerGameOver = intentos => {
    setGuessIntentos(intentos)
  }

  const handlerRestart = () => {
    setGuessIntentos(0);
    setUserNumber('');
  }

  let content = userNumber && guessIntentos <= 0 ?
      <GameScreen userOption={userNumber} onGameOver={handlerGameOver}/> : guessIntentos > 0 ?
      <GameOverScreen intentos={guessIntentos} choice={userNumber} onRestart={handlerRestart} /> :
      <GameStartScreen onStartGame={handlerStartGame} />

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.container}>
          <Header title="El número es" />
          {content}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.15,
  },
  confirmedtext: {
    fontSize: 16,
    color: '#212121',
    marginVertical: 10,
  },
});

export default App;
