import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const UserTypeScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { key: 'entrepreneur', label: 'Hire an Influencer' },
    { key: 'influencer', label: 'Creating an Influencer Profile' },
    { key: 'brand', label: 'Create a Brand Profile' },
  ];  

  const handleSelect = (key: string) => {
    setSelectedOption(key);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigation.navigate('EnterName', { userType: selectedOption });
    } else {
      alert('Please select an option before continuing.');
    }
  };

  const renderRadioButtons = () => (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.key}
          style={[
            styles.radioButton,
            selectedOption === option.key && styles.selectedRadioButton,
          ]}
          onPress={() => handleSelect(option.key)}
        >
          <Text
            style={[
              styles.radioButtonText,
              selectedOption === option.key ? styles.selectedText : styles.unselectedText,
            ]}
          >
            {option.label}
          </Text>
          <View
            style={[
              styles.radioCircle,
              selectedOption === option.key && styles.selectedRadioCircle,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ConfigurableScreen
      topImage={require('../../assets/images/signup/signuptitle.png')}
      title="I am looking for..."
      subtitle="Provide us with further insights into your preferences"
      entryComponent={renderRadioButtons()}
      bottomButtonImage={require('../../assets/images/login/continue.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page1.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={handleContinue}
    />
  );
};

const styles = StyleSheet.create({
  radioButton: {
    height: normalize(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
    borderWidth: normalize(2),
    borderColor: '#464646',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  selectedRadioButton: {
    borderColor: '#0A1F44',
  },
  radioButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'left',
  },
  selectedText: {
    color: '#0A1F44',
  },
  unselectedText: {
    color: '#464646',
    opacity: 0.6,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6b7280',
  },
  selectedRadioCircle: {
    borderColor: '#1e3a8a',
    backgroundColor: '#1e3a8a',
  },
});

export default UserTypeScreen;
