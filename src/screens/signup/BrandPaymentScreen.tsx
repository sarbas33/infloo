import React from 'react';
import { Alert } from 'react-native';
import CenteredSignupScreen from './components/CenteredSignupScreen';
import { useNavigation } from '@react-navigation/native';

const BrandPaymentScreen = ({ route }) => {
  const { userType, phoneNumber, callingCode, email } = route.params;
  const navigation = useNavigation();
  
  const handleGetStarted = () => {
    navigation.navigate('VerifyingAccount', {});
  };

  return (
    <CenteredSignupScreen
      topImage={require('../../assets/images/signup/creditcard.png')}
      title="Brand Account"
      subtitle="You need to pay an amount of 1,000₹ for activation of brand account"
      buttons={[
        {
          type: 'image',
          imageSource: require('../../assets/images/login/continue.png'),
          onPress: handleGetStarted,
        },
      ]}
      onBackPress={() => Alert.alert('Back Pressed', 'Navigating back!')}
    />
  );
};

export default BrandPaymentScreen;
