import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

