import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './components/CustomButton';
import { sendOtp } from '../../services/authService';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import CountryCodePicker from './components/CountryCodePicker'; 

const { width } = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const navigation = useNavigation();

  const [countryCode, setCountryCode] = useState<string>('IN');
  const [callingCode, setCallingCode] = useState<string>('+91');

  const handleCountrySelect = (newCountryCode: string, newCallingCode: string) => {
    setCountryCode(newCountryCode);
    setCallingCode(newCallingCode);
  };

  const handleSendOtp = async () => {
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
        console.log(phoneNumber);
        navigation.navigate('OtpVerification', { phoneNumber, callingCode });
      } else {
        Alert.alert('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('An error occurred. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/login/logintitle.png')}
          style={styles.loginTextTitle}
          resizeMode="contain"
        />
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
        <CustomButton onPress={handleSendOtp} imageSrc={require('../../assets/images/login/continue.png')} />
        <Image
          source={require('../../assets/images/login/or.png')}
          style={styles.orText}
          resizeMode="contain"
        />
        <CustomButton onPress={() => {}} imageSrc={require('../../assets/images/login/facebook.png')} />
        <CustomButton onPress={() => {}} imageSrc={require('../../assets/images/login/google.png')} />
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  loginTextTitle: {
    width: width * 0.375,
    height: width * 0.3375,
    marginTop: width * 0.15,
    marginBottom: normalize(30),
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    height: normalize(50),
    alignItems: 'center',
    borderWidth: 1,
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
  orText: {
    width: 0.53 * width,
    height: 0.07 * width,
    marginTop: normalize(40),
    marginVertical: normalize(30),
  },
  signUpText: {
    position: 'absolute',
    bottom: normalize(30),
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: '#6b7280',
  },
  signUpLink: {
    fontFamily: 'Poppins-Bold',
    color: '#1e3a8a',
  },
});

export default LoginScreen;
