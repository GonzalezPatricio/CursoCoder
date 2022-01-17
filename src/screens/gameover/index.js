import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, Dimensions} from 'react-native';
import {Numbers} from '../../components/atoms/numbers/index';
import {theme} from '../../utils/constantes/theme';
import {styles} from './styles';

const gameOverImg = require('../../../assets/images/gameOver1.png');

export const GameOverScreen = props => {
  const {intentos, choice, onRestart} = props;
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait());
  };

  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait);
    return () => {
      Dimensions.removeEventListener('change', statePortrait);
    };
  });

  return (
    <View style={styles.container}>
      <Image source={gameOverImg} style={styles.image} />
      <Text style={styles.text}>Tus intentos son: {intentos}</Text>
      <Numbers number={choice} />
      <View>
        <Button
          title="Nuevo Juego"
          onPress={() => onRestart && onRestart()}
          color={theme.primaryColor}
        />
      </View>
    </View>
  );
};
