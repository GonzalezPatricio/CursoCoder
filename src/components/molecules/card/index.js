import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {Input} from '../../atoms/input/index';

export const Card = ({
  title,
  color,
  handleOnChange,
  value,
  autoFocus,
  autoComplete,
  keyboardType,
  handleOnClean,
  handleOnConfirm,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {title} </Text>
      <Input
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        onChangeText={handleOnChange}
        value={value}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cambiar" color={color} onPress={() => handleOnClean()} />
        <Button
          title="Confirmar"
          color={color}
          onPress={() => handleOnConfirm()}
        />
      </View>
    </View>
)};