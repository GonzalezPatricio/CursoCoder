import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {Numbers} from '../../components/atoms/numbers';
import {styles} from './styles';
import {generateRandomNumber} from '../../utils/funciones/index';

export const GameScreen = props => {
  const {userOption, onGameOver} = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(0, 100, userOption),
  );
  const [intentos, setIntentos] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess == userOption) onGameOver(intentos)
  }, [currentGuess, userOption, onGameOver, intentos])

  const handlerNextGuess = direction => {
    if(
      (direction === 'lower' && currentGuess < userOption) ||
      (direction === 'greater' && currentGuess > userOption)
    ) {
      Alert.alert('Nooooo', 'Estas haciendo trampa...!', [
        {text: 'Seguir', style: 'Cancelar'},
      ])
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setIntentos(current => current + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Se seleccionó:</Text>
      <Numbers number={currentGuess} />
      <View style={styles.buttonContainer}>
        <Button title="Menor" onPress={() => handlerNextGuess('lower')}/>
        <Button title="Mayor" onPress={() => handlerNextGuess('greater')} />
      </View>
    </View>
  )};