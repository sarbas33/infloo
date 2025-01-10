import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { normalize } from '../../../utils/utils';

const screenWidth = Dimensions.get('window').width;

interface VerticalCardProps {
  name: string;
  profession: string;
  avatar: any;
  isFavorite?: boolean;
}

const VerticalCard: React.FC<VerticalCardProps> = ({ name, profession, avatar, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.profileImage} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <TouchableOpacity style={styles.favoriteButton}>
          <Image
            source={require('../assets/icons/favorite.png')}
            style={[styles.favoriteIcon, isFavorite && { tintColor: 'red' }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth - normalize(20),
    height: normalize(80),
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    marginVertical: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: normalize(3),
  },
  profileImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    marginRight: normalize(13),
    marginLeft: normalize(15),
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: normalize(14),
    lineHeight: normalize(21),
  },
  profession: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: normalize(10),
    lineHeight: normalize(15),
  },
  favoriteButton: {
    position: 'absolute',
    right: normalize(10),
  },
  favoriteIcon: {
    width: normalize(36),
    height: normalize(36),
  },
});

export default VerticalCard;
