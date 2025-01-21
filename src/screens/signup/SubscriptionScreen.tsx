import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Image
} from 'react-native';
import { getResponsiveWidth, normalize } from '../../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { initiatePayment } from '../../services/payment';

const { height } = Dimensions.get('window');
const width = getResponsiveWidth();

const SubscriptionScreen = ( {route} ) => {
  const navigation = useNavigation();
  const { userType, phoneNumber, callingCode, email, selectedCategories } = route.params;
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const plans = [
    { name: 'Starter', price: '1,000 ₹', duration: '3 month' },
    { name: 'Pro', price: '3,000 ₹', duration: '6 month' },
    { name: 'Premium', price: '6,000 ₹', duration: '1 year' },
  ];

  const handleContinue = async () => {
    const selectedPlanDetails = plans.find(plan => plan.name === selectedPlan);
    
    if (!selectedPlanDetails) return;

    const paymentDetails = {
      planName: selectedPlan,
      amount: selectedPlanDetails.price,
      duration: selectedPlanDetails.duration,
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
            plan: selectedPlan,
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

  const onBackPress = () => {

  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
       <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Icon name="chevron-back" size={normalize(16)} style={styles.backButtonIcon} />
      </TouchableOpacity>
      <View style= {styles.innerContainer}>
      <Text style={styles.title}>Enjoy the premium</Text>
      <Text style={styles.subtitle}>
        Effortlessly subscribe to stay updated with our latest features and
        exclusive offers.
      </Text>

      {plans.map((plan, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.planContainer,
            selectedPlan === plan.name && styles.selectedPlan,
          ]}
          onPress={() => setSelectedPlan(plan.name)}
        >
          <View style={styles.planHeader}>
            <Text style={[
              styles.planType,
              selectedPlan === plan.name && styles.selectedText
            ]}>
              {plan.name}
            </Text>
            <View style={styles.radioCircle}>
              {selectedPlan === plan.name && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceWrapper}>
              <Text style={[
                styles.planPrice,
                selectedPlan === plan.name && styles.selectedText
              ]}>
                {plan.price}
              </Text>
              <Text style={[
                styles.planDuration,
                selectedPlan === plan.name && styles.selectedText
              ]}>
                {plan.duration}
              </Text>
            </View>
          </View>
          <Text style={[
            styles.planDescription,
            selectedPlan === plan.name && styles.selectedText
          ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.freeTrialButton}>
        <Text style={styles.freeTrialText}>Free trial for 15 days</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Image source={require('../../assets/images/login/continue.png')} style={styles.continueButtonImage} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: normalize(20),
    alignItems: 'center',
  },
  innerContainer: {
    width: width* 0.9,
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
  title: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-Bold',
    marginTop: normalize(30),
    paddingHorizontal: normalize(5),
  },
  subtitle: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Light',
    marginBottom: normalize(20),
    paddingHorizontal: normalize(5),
  },
  planContainer: {
    borderWidth: normalize(2),
    borderColor: '#ccc',
    borderRadius: normalize(10),
    padding: normalize(10),
    paddingHorizontal: normalize(20),
    marginBottom: normalize(15),
  },
  selectedPlan: {
    borderColor: '#0A1F44',
  },
  planType: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Medium',
    color: '#464646',
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: normalize(4),
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  planPrice: {
    fontSize: normalize(18),
    fontFamily: 'Poppins-Bold',
    color: '#464646',
  },
  planDuration: {
    fontSize: normalize(12),
    lineHeight: normalize(18),
    color: '#464646',
    fontFamily: 'Poppins-Medium',
    marginLeft: normalize(10),
  },
  planDescription: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Medium',
    color: '#464646',
  },
  selectedText: {
    color: '#0A1F44',
  },
  freeTrialButton: {
    alignItems: 'center',
    marginVertical: normalize(20),
  },
  freeTrialText: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: '#194DAA',
    fontFamily: 'Poppins-SemiBold',
  },
  continueButton: {
    borderRadius: normalize(8),
    alignItems: 'center',
  },
  continueButtonImage: {
    width: width * 0.9,
    height: normalize(60),
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: normalize(0),
    marginRight: normalize(1),
  },
  radioCircle: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(10),
    borderWidth: normalize(2),
    borderColor: '#464646',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerCircle: {
    width: normalize(10),
    height: normalize(10),
    borderRadius: normalize(5),
    backgroundColor: '#0A1F44',
  },
});

export default SubscriptionScreen;