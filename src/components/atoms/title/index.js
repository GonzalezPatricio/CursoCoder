import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';


export const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comenzar el juego</Text>
    </View>
  );
};
