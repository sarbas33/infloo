import React, { useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { getResponsiveWidth, normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const width = getResponsiveWidth();

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
  inputBox: {
    width: width * 0.9,
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
