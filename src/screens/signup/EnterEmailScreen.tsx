import React, { useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { getResponsiveWidth, normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const width = getResponsiveWidth();

const EnterEmailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [email, setName] = useState('');

  const { userType, phoneNumber, name, callingCode } = route.params;

  const handleContinue = () => {
    if (email != "") {
      //Alert.alert("More pages coming soon");
      //return;
      navigation.navigate('CategorySelection', { userType, phoneNumber, name, callingCode, email });
    } else {
      alert('Enter an email');
    }
  };

  const renderInputBox = () => (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your email"
        placeholderTextColor="#828282"
        value={email}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ConfigurableScreen
      topImage={require('../../assets/images/signup/emailaddress.png')}
      title="What’s your Email Address"
      subtitle="We’ll need your email to stay in touch"
      entryComponent={renderInputBox()}
      bottomButtonImage={require('../../assets/images/login/continue.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page5.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={handleContinue}
    />
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: width * 0.9,
    height: normalize(50),
    borderWidth: normalize(1),
    borderColor: '#0A1F44',
    borderRadius: normalize(100),
    paddingHorizontal: normalize(15),
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: '#000',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});

export default EnterEmailScreen;
