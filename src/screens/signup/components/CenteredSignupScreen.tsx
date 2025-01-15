import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { normalize } from '../../../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

interface ConfigurableScreenProps {
  topImage?: any; // Image at the top
  title: string; // Title text
  subtitle?: string; // Subtitle text
  buttons?: { label: string; onPress: () => void }[]; // Array of button data
  onBackPress?: () => void; // Back button action
}

const CenteredSignupScreen: React.FC<ConfigurableScreenProps> = ({
  topImage,
  title,
  subtitle,
  buttons = [],
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      {onBackPress && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Icon name="chevron-back" size={normalize(20)} style={styles.backButtonIcon} />
        </TouchableOpacity>
      )}

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Top Image */}
        {topImage && <Image source={topImage} style={styles.topImage} resizeMode="contain" />}

        {/* Title and Subtitle */}
        <Text style={styles.titleText}>{title}</Text>
        {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {buttons?.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={button.type === 'text' ? styles.textButton : styles.imageButton}
            onPress={button.onPress}
          >
            {button.type === 'text' ? (
              <Text style={styles.buttonText}>{button.label}</Text>
            ) : (
              <Image source={button.imageSource} style={styles.buttonImage} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: normalize(20),
    left: normalize(20),
    zIndex: 1,
  },
  backButtonIcon: {
    color: '#000',
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    width: width * 0.7,
    height: width * 0.6,
    marginBottom: normalize(20),
  },
  titleText: {
    fontSize: normalize(20),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    textAlign: 'center',
    //marginBottom: normalize(10),
  },
  subtitleText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: '#606060',
    textAlign: 'center',
    //marginBottom: normalize(30),
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: normalize(20),
    width: '100%',
    alignItems: 'center'
  },
  textButton: {
    padding: normalize(10),
    borderRadius: normalize(5),
    marginHorizontal: normalize(10),
  },
  imageButton: {
    width: '100%',
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Bold',
  },
  buttonImage: {
    //marginTop: normalize(20),
    width: width * 0.9,
    height: normalize(60),
  },
});

export default CenteredSignupScreen;
