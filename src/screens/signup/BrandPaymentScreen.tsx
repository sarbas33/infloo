import React from 'react';
import { Alert } from 'react-native';
import CenteredSignupScreen from './components/CenteredSignupScreen';
import { useNavigation } from '@react-navigation/native';
import { initiatePayment } from '../../services/payment';

interface RouteParams {
  userType: string;
  phoneNumber: string;
  callingCode: string;
  email: string;
  selectedCategories: string[];
}

const BrandPaymentScreen = ({ route }: { route: { params: RouteParams } }) => {
  const { userType, phoneNumber, callingCode, email, selectedCategories } = route.params;
  const navigation = useNavigation();
  
  const handleGetStarted = async () => {
    const paymentDetails = {
      planName: 'Brand Account',
      amount: '1,000 ₹',
      duration: 'lifetime',
      userType,
      phoneNumber,
      email
    };

    try {
      const response = await initiatePayment(paymentDetails);
      
      if (response.success) {
        navigation.navigate('Location', {
          userType,
          phoneNumber,
          callingCode,
          email,
          selectedCategories,
          subscription: {
            plan: 'Brand Account',
            transactionId: response.transactionId
          }
        });
      } else {
        Alert.alert('Payment Failed', response.message || 'Please try again');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
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
      onBackPress={() => navigation.goBack()}
    />
  );
};

export default BrandPaymentScreen;
