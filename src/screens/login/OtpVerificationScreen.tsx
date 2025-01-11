import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import CustomButton from './components/CustomButton';
import { normalize } from '../../utils/utils';

const { width } = Dimensions.get('window');

const OtpVerificationScreen = ({ route }) => {
  const { phoneNumber, callingCode } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if not empty
    if (value && index < 3) {
      const nextInput = index + 1;
      inputs[nextInput]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      // Perform OTP verification
      Alert.alert('OTP Verified', `Entered OTP: ${enteredOtp}`);
    } else {
      Alert.alert('Invalid OTP', 'Please enter all 4 digits.');
    }
  };

  console.log(route.params)
  const inputs = [];

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login/verificationcode.png')}
        style={styles.topImage}
        resizeMode="contain"
      />
      <Text style={styles.titleText}>Verification Code</Text>
      <Text style={styles.instructionText}>
        Enter the OTP sent to {callingCode} {phoneNumber}
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(index, value)}
            ref={(ref) => (inputs[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.resendText}>Didn’t receive OTP? Send again</Text>
      </TouchableOpacity>
      <CustomButton onPress={handleVerifyOtp} imageSrc={require('../../assets/images/login/verifybutton.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  topImage: {
    width: width * 0.7,
    height: width * 0.4,
    marginTop: normalize(40),
    marginBottom: normalize(30),
  },
  titleText: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    marginBottom: normalize(10),
  },
  instructionText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: normalize(30),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginBottom: normalize(20),
  },
  otpInput: {
    width: normalize(50),
    height: normalize(50),
    borderWidth: 1,
    borderRadius: normalize(10),
    borderColor: '#d1d5db',
    textAlign: 'center',
    fontSize: normalize(18),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  resendText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: '#1e3a8a',
    marginBottom: normalize(20),
  },
});

export default OtpVerificationScreen;
