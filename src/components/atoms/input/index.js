import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';


export const Input = ({onChangeText, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...props}
        onChangeText={value => onChangeText(value)}
      />
    </View>
  )
};