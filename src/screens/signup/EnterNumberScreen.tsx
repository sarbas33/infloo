import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Alert, StyleSheet, TextInput, Dimensions, Platform } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { normalize, getResponsiveWidth } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import CountryCodePicker from '../login/components/CountryCodePicker'; 
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { sendOtp } from '../../services/authService';

const width =getResponsiveWidth();
const { width : realWidth } = Dimensions.get("window");

const EnterNumberScreen = ({ route }) => {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [countryCode, setCountryCode] = useState<string>('IN');
  const [callingCode, setCallingCode] = useState<string>('+91');
  const { userType, name } = route.params;


  const handleContinue = async () => {
      if (!phoneNumber) {
        Alert.alert('Error', 'Please enter a phone number.');
        return;
      }
  
      const fullPhoneNumber = `${callingCode}${phoneNumber}`;
      const parsedNumber = parsePhoneNumberFromString(fullPhoneNumber);
  
      if (!parsedNumber || !parsedNumber.isValid()) {
        Alert.alert('Error', 'Please enter a valid phone number for the selected country.');
        return;
      }
  
      try {
        const response = await sendOtp(callingCode, phoneNumber);
        if (response.success) {
          navigation.navigate('OtpVerification2', { type: "mobile" , phoneNumber , callingCode , email:"none", userType: userType, name: name });
        } else {
          Alert.alert('Failed to send OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('An error occurred. Please try again.');
      }
    };

  const handleCountrySelect = (newCountryCode: string, newCallingCode: string) => {
    setCountryCode(newCountryCode);
    setCallingCode('+' + newCallingCode);
  };

  const renderInputBox = () => (
    <View style={styles.container}>
      <View style={styles.phoneNumberContainer}>
          <CountryCodePicker
            countryCode={countryCode}
            callingCode={callingCode}
            onSelect={handleCountrySelect}
          />
          <View style={styles.verticalLine} />
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Enter Your Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor="#828282"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
    style={{ flex: 1, backgroundColor: '#fff' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ConfigurableScreen
      topImage={require('../../assets/images/signup/number.png')}
      title="What’s your number"
      subtitle="We’ll need your phone number to send an
OTP for verification."
      entryComponent={renderInputBox()}
      bottomButtonImage={require('../../assets/images/login/continue.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page3.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={handleContinue}
    />
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    height: normalize(50),
    alignItems: 'center',
    borderWidth: normalize(1),
    borderRadius: normalize(100),
    borderColor: 'transparent',
    paddingHorizontal: normalize(10),
    marginBottom: normalize(20),
    backgroundColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 3,
    elevation: 4,
  },
  verticalLine: {
    width: 1,
    height: '70%',
    backgroundColor: '#d1d5db',
    marginHorizontal: normalize(10),
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: normalize(13),
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
});

export default EnterNumberScreen;
