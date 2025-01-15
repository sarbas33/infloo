import React from 'react';
import { Alert } from 'react-native';
import CenteredSignupScreen from './components/CenteredSignupScreen';

const VerifyingAccountScreen = ({ route }) => {
  const { userType, phoneNumber, callingCode, email } = route.params;
  
  const handleGetStarted = () => {
    Alert.alert('Button Pressed', 'Get Started button was pressed!');
  };

  return (
    <CenteredSignupScreen
      topImage={require('../../assets/images/signup/verify.png')}
      title="Verifying Account"
      subtitle="Verification will complete within 7 days"
      buttons={[
      ]}
      onBackPress={() => Alert.alert('Back Pressed', 'Navigating back!')}
    />
  );
};

export default VerifyingAccountScreen;
