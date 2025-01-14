import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../../utils/utils';
import LinkToSignup from './components/LinkToSignup';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login/networkdiagram.png')}
        style={styles.networkDiagram}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.appTitle}>Uncover Success Where Your Journey Begins</Text>
        <Text style={styles.subtitle}>
          Drive growth with influencers. Elevate your brand through strategic partnerships.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/images/login/loginbutton.png')}
            style={styles.loginButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don’t have an account? </Text>
          <LinkToSignup />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: normalize(20),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  networkDiagram: {
    width: width * 0.9,
    height: width * 0.9,
    marginTop: height * 0.05,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.02,
  },
  appTitle: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
    fontSize: normalize(20),
    lineHeight: normalize(33),
    textAlign: 'center',
    marginBottom: normalize(15),
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: normalize(13),
    lineHeight: normalize(21),
    textAlign: 'center',
    color: '#6b7280',
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  button: {
    borderWidth: 1,
    borderColor: 'transparent',
    width: width * 0.9,
    height: width * 0.14,
  },
  loginButtonImage: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(30),
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(10),
  },
  signUpText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: '#6b7280',
  },
});

export default SplashScreen;
