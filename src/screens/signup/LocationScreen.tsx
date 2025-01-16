import React from 'react';
import { Alert } from 'react-native';
import CenteredSignupScreen from './components/CenteredSignupScreen';

const LocationScreen = ({ route }) => {
  const { userType, phoneNumber, callingCode, email } = route.params;
  // Dummy method for the button
  const handleGetStarted = () => {
    Alert.alert('Coming Soon',  'Coming sooon!');
  };

  return (
    <CenteredSignupScreen
      topImage={require('../../assets/images/signup/location.png')} // Replace with actual image path
      title="Enable your location"
      subtitle="choose your location to start find stars around you"
      buttons={[
        {
          type: 'image',
          imageSource: require('../../assets/images/login/continue.png'),
          onPress: handleGetStarted,
        },
        {
            type: 'text',
            label: 'Enter Location Manually',
            onPress: handleGetStarted,
          },
      ]}
      onBackPress={() => Alert.alert('Back Pressed', 'Navigating back!')}
    />
  );
};

export default LocationScreen;
