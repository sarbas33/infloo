import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import CustomButton from './components/CustomButton';
import { normalize } from '../../utils/utils';
import { sendOtp, sendOtpEmail } from '../../services/authService';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const OtpVerificationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { type, phoneNumber, callingCode, email } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      const nextInput = index + 1;
      inputs[nextInput]?.focus();
    }
  };

  const handleResendOtp = async () => {
    setOtp(['', '', '', '']);
    inputs[0]?.focus();
    if (type === 'mobile') {
      resendOtpMobile();
    } else {
      resendOtpEmail();
    }
  };

  const resendOtpMobile = async () => {
    try {
      const response = await sendOtp(callingCode, phoneNumber);
      if (!response.success) {
        Alert.alert('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('An error occurred. Please try again.');
    }
  };

  const resendOtpEmail = async () => {
    try {
      const response = await sendOtpEmail(email);
      if (!response.success) {
        Alert.alert('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('An error occurred. Please try again.');
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      Alert.alert('OTP Verified', `Entered OTP: ${enteredOtp}`);
    } else {
      Alert.alert('Invalid OTP', 'Please enter all 4 digits.');
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0) {
      const prevInput = index - 1;
      inputs[prevInput]?.focus();
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const inputs = [];

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={normalize(16)} style={styles.backButtonIcon} />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/login/verificationcode.png')}
            style={styles.topImage}
            resizeMode="contain"
          />
          <Text style={styles.titleText}>Verification Code</Text>
          <Text style={styles.instructionText}>
            Enter the OTP sent to{' '}
            {type === 'mobile' && (
              <Text style={styles.mobileNumber}>
                {callingCode} {phoneNumber}
              </Text>
            )}
            {type === 'email' && <Text style={styles.mobileNumber}>********@gmail.com</Text>}
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
          <CustomButton onPress={handleVerifyOtp} imageSrc={require('../../assets/images/login/verifybutton.png')} />
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  backButton: {
    position: 'absolute',
    top: normalize(20),
    left: normalize(20),
    width: normalize(16),
    height: normalize(16),
    zIndex: 1,
  },
  backButtonIcon: {
    color: '#000',
    fontWeight: 'bold',
    transform: [{ scaleY: 1.2 }],
  },
  topImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginTop: normalize(60),
    marginBottom: normalize(30),
  },
  titleText: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    lineHeight: normalize(30),
  },
  instructionText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Light',
    color: 'black',
    textAlign: 'center',
    marginBottom: normalize(30),
    lineHeight: normalize(21),
  },
  mobileNumber: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginBottom: normalize(20),
  },
  otpInput: {
    width: normalize(45),
    height: normalize(45),
    paddingBottom: 0,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#000000',
    textAlign: 'center',
    fontSize: normalize(22),
    lineHeight: normalize(33),
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  resendText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: '#oa1f44',
    marginBottom: normalize(20),
  },
  resendLink: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-SemiBold',
    color: '#1e3a8a',
    marginBottom: normalize(20),
  },
});

export default OtpVerificationScreen;
