import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import CircularNetworkDiagram from './components/CircularNetworkDiagram';

const { width, height } = Dimensions.get('window');
const scale = width / 360;

const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <CircularNetworkDiagram/>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.appTitle}>Uncover Success Where Your Journey Begins</Text>
          <Text style={styles.subtitle}>
            Drive growth with influencers. Elevate your brand through strategic partnerships.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login with phone</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(20),
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: normalize(30),
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
  button: {
    backgroundColor: '#1e3a8a',
    paddingVertical: normalize(15),
    width: '100%',
    borderRadius: normalize(30),
    alignItems: 'center',
    marginBottom: normalize(15),
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(14),
    lineHeight: normalize(21),
    textAlign: 'center',
    color: '#fff',
  },
  signUpText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: '#6b7280',
  },
  signUpLink: {
    fontFamily: 'Poppins-Bold',
    color: '#1e3a8a',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(30),
    position: 'absolute',
    top: width + (height - width) / 4 - normalize(50),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: normalize(50),
    alignItems: 'center',
    width: '100%',
  },
});

export default SplashScreen;
