import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen'; // Adjust path if needed
import { getResponsiveWidth, normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import { sendOtp, verifyOtp } from '../../services/authService';

const width = getResponsiveWidth();

const OtpVerificationScreen2 = ({ route }) => {
  const navigation = useNavigation();
  const { type, phoneNumber, callingCode, email, userType, name } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = [];

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputs[index + 1]?.focus();
    }
  };
  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0) {
      const prevInput = index - 1;
      inputs[prevInput]?.focus();
    }
  };

  const handleResendOtp = async () => {
    setOtp(['', '', '', '']);
    inputs[0]?.focus();
    type === 'mobile' ? await sendOtp(callingCode, phoneNumber) : await sendOtp(email);
  };

  const entryComponent = (
      <>
          <View style={styles.otpMainContainer}>
              <View style={styles.otpContainer}>
                  {otp.map((digit, index) => (
                      <TextInput
                          key={index}
                          style={styles.otpInput}
                          keyboardType="number-pad"
                          maxLength={1}
                          value={digit}
                          onChangeText={(value) => handleInputChange(index, value)}
                          onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                          ref={(ref) => (inputs[index] = ref)}
                      />
                  ))}
              </View>
              <TouchableOpacity onPress={handleResendOtp}>
                  <Text style={styles.resendText}>
                      Didn’t receive OTP? <Text style={styles.resendLink}>RESEND OTP</Text>
                  </Text>
              </TouchableOpacity>
          </View>
      </>
  );

  return (
    <ConfigurableScreen
      topImage={require('../../assets/images/login/verificationcode.png')}
      title="Verification Code"
      subtitle={`Enter the OTP sent to ${type === 'mobile' ? `${callingCode} ${phoneNumber}` : '********@gmail.com'}`}
      entryComponent={entryComponent}
      bottomButtonImage={require('../../assets/images/login/verifybutton.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page5.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={() => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === 4) {
          verifyOtp(enteredOtp).then((response) => {
            if (response?.success) {
              navigation.navigate("EnterEmail", {userType: userType, phoneNumber , callingCode, name})
            } else {
              alert('Invalid OTP, please try again.');
            }
          });
        } else {
          alert('Please enter all 4 digits.');
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  otpMainContainer: {
    alignItems: 'center'
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginBottom: normalize(20),
    alignItems: 'center',
  },
  otpInput: {
    width: normalize(45),
    height: normalize(45),
    paddingBottom: normalize(0),
    borderBottomWidth: normalize(1),
    textAlign: 'center',
    fontSize: normalize(22),
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  resendText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: '#1a202c',
    textAlign: 'center'
  },
  resendLink: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Bold',
    color: '#1e3a8a',
  },
});

export default OtpVerificationScreen2;
