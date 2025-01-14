import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const renderInputBox = ({ name, setName }) => (
  <View>
    <TextInput
      style={styles.inputBox}
      placeholder="Enter your name"
      placeholderTextColor="grey"
      value={name}
      onChangeText={(text) => setName(text)}
    />
  </View>
);

export default renderInputBox;

const styles = StyleSheet.create({
  inputBox: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});
