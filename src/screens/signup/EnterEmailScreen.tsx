import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const EnterEmailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [email, setName] = useState('');

  const { userType, phoneNumber, name, callingCode } = route.params;

  const handleContinue = () => {
    if (email != "") {
      //Alert.alert("More pages coming soon");
      //return;
      navigation.navigate('CategorySelection', { userType, phoneNumber, name, callingCode, email });
    } else {
      alert('Enter an email');
    }
  };

  const renderInputBox = () => (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your email"
        placeholderTextColor="#828282"
        value={email}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ConfigurableScreen
      topImage={require('../../assets/images/signup/emailaddress.png')}
      title="What’s your Email Address"
      subtitle="We’ll need your email to stay in touch"
      entryComponent={renderInputBox()}
      bottomButtonImage={require('../../assets/images/login/continue.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page5.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={handleContinue}
    />
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  radioButton: {
    //width: '90%',
    height: normalize(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
    borderWidth: normalize(2),
    borderColor: '#464646',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  selectedRadioButton: {
    borderColor: '#0A1F44',
  },
  radioButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
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
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
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

export default EnterEmailScreen;
