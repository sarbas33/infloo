import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { normalize } from '../../../utils/utils';
import ContinueButton from './ContinueButton'
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

interface ConfigurableScreenProps {
  topImage?: any; // Image at the top
  title: string; // Title text
  subtitle?: string; // Subtitle text
  entryComponent: React.ReactNode; // Custom entry component (e.g., radio buttons, input fields)
  bottomButtonImage: any; // Button image at the bottom
  bottomIndicatorImage?: any; // Optional second image at the bottom
  onBackPress?: () => void; // Back button action
  onButtonPress: () => void; // Bottom button action
}

const ConfigurableScreen: React.FC<ConfigurableScreenProps> = ({
  topImage,
  title,
  subtitle,
  entryComponent,
  bottomButtonImage,
  bottomIndicatorImage,
  onBackPress,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      {onBackPress && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Icon name="chevron-back" size={normalize(16)} style={styles.backButtonIcon} />
        </TouchableOpacity>
      )}

      {/* Top Image */}
      {topImage && <Image source={topImage} style={styles.topImage} resizeMode="contain" />}

      {/* Title and Subtitle */}
      <Text style={styles.titleText}>{title}</Text>
      {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}

      {/* Entry Component */}
      <View style={styles.entryContainer}>{entryComponent}</View>

      {/* Bottom Images */}
      <View style={styles.bottomContainer}>
        <ContinueButton onPress={onButtonPress} buttonImage={bottomButtonImage} pageLevelImage={bottomIndicatorImage}></ContinueButton>
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
    marginTop: height * 0.04,
    marginBottom: normalize(20),
  },
  titleText: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    lineHeight: normalize(30),
  },
  subtitleText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Light',
    color: 'black',
    textAlign: 'center',
    marginBottom: normalize(30),
    lineHeight: normalize(21),
  },
  entryContainer: {
    width: '100%',
    marginBottom: normalize(30),
  },
  bottomContainer: {
    width: width,
    position: 'absolute',
    bottom: height * 0.04,
    alignItems: 'center',
  },
  bottomButtonImage: {
    //width: width,
    width: width * 0.9,
    height: normalize(50),
  },
  bottomIndicatorImage: {
    width: normalize(87),
    height: normalize(7),
    marginTop: normalize(10),
  },
});

export default ConfigurableScreen;
