import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomButton from '../../login/components/CustomButton';
import { normalize } from '../../../utils/utils';

interface ContinueButtonProps {
  onPress: () => void;
  buttonImage: any; // Pass image source for the button
  pageLevelImage: any; // Pass image source for the page level indicator
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  buttonImage,
  pageLevelImage,
}) => {
  return (
    <View style={styles.container}>
      <CustomButton onPress={onPress} imageSrc={buttonImage} />
      <Image
        source={pageLevelImage}
        style={styles.pageLevel}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pageLevel: {
    marginTop: 15,
    width: normalize(87),
    height: normalize(7),
  },
});

export default ContinueButton;
