import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, GestureResponderEvent, ViewStyle, ImageStyle, Dimensions } from 'react-native';
import { normalize } from '../../../utils/utils';

const { width, height } = Dimensions.get('window');

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  imageSrc: ImageSourcePropType;
  buttonStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, imageSrc, buttonStyle, imageStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Image source={imageSrc} style={[styles.image, imageStyle]} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Default button style
    width: width * 0.9, 
    height: width * 0.16, 
    marginBottom: normalize(5),
    marginTop: normalize(5),
  },
  image: {
    // Default image style
    width: '100%',
    height: width / 5.7,
    //marginBottom: normalize(15),
  },
});

export default CustomButton;
