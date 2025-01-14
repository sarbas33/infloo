import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const EnterNameScreen = ({ route }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const { userType } = route.params;

  const handleContinue = () => {
    if (name != "") {
      navigation.navigate('EnterNumber', { userType: userType, name: name });
    } else {
      alert('Enter a name');
    }
  };

  const renderInputBox = () => (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your name"
        placeholderTextColor="#828282"
        value={name}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ConfigurableScreen
      topImage={require('../../assets/images/signup/name.png')}
      title="What’s your name"
      subtitle="Let’s get to know each other"
      entryComponent={renderInputBox()}
      bottomButtonImage={require('../../assets/images/login/continue.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page2.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={handleContinue}
    />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    height: normalize(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
    borderWidth: normalize(2),
    borderColor: '#464646',
    borderRadius: normalize(100),
    backgroundColor: '#fff',
  },
  selectedRadioButton: {
    borderColor: '#0A1F44',
  },
  radioButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(14),
    fontWeight: '500',
    lineHeight: normalize(21),
    textAlign: 'left',
  },
  selectedText: {
    color: '#0A1F44',
  },
  unselectedText: {
    color: '#464646',
    opacity: 0.6,
  },
  radioCircle: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(10),
    borderWidth: normalize(2),
    borderColor: '#6b7280',
  },
  selectedRadioCircle: {
    borderColor: '#1e3a8a',
    backgroundColor: '#1e3a8a',
  },
  inputBox: {
    width: '100%',
    height: normalize(50),
    borderWidth: normalize(1),
    borderColor: '#0A1F44',
    borderRadius: normalize(100),
    paddingHorizontal: normalize(15),
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: '#000',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});

export default EnterNameScreen;
