import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ContinueButton from './components/ContinueButton'; // Import the new component

const { width } = Dimensions.get('window');

const UserTypeScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigation.navigate('NextScreen', { userType: selectedOption });
    } else {
      alert('Please select an option before continuing.');
    }
  };

  const options = ['Hire a Influencer', 'Creating a Influencer Profile', 'Create a Brand Profile'];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={normalize(16)} style={styles.backButtonIcon} />
      </TouchableOpacity>

      {/* Top Image */}
      <Image
        source={require('../../assets/images/login/signuptitle.png')}
        style={styles.topImage}
        resizeMode="contain"
      />

      {/* Title and Instruction */}
      <Text style={styles.titleText}>I am looking for...</Text>
      <Text style={styles.instructionText}>
        Provide us with further insights into your preferences
      </Text>

      {/* Radio Buttons */}
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.radioButton,
            selectedOption === option && styles.selectedRadioButton,
          ]}
          onPress={() => handleSelect(option)}
        >
          <Text
            style={[
              styles.radioButtonText,
              selectedOption === option ? styles.selectedText : styles.unselectedText,
            ]}
          >
            {option}
          </Text>
          <View
            style={[
              styles.radioCircle,
              selectedOption === option && styles.selectedRadioCircle,
            ]}
          />
        </TouchableOpacity>
      ))}

      {/* Verify Button */}
      <View style={styles.continueButton}>
        <ContinueButton
          onPress={handleContinue}
          buttonImage={require('../../assets/images/login/continue.png')}
          pageLevelImage={require('../../assets/images/signup/page1.png')}
        />
      </View>
    </View>
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
    width: width * 0.6,
    height: width * 0.6,
    marginTop: normalize(10),
    marginBottom: normalize(20),
  },
  titleText: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-Bold',
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
  radioButton: {
    width: 0.9 * width,
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
  continueButton: {
    position: 'absolute',
    bottom: normalize(40)
  }
});

export default UserTypeScreen;
