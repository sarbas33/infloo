import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { normalize } from '../../../utils/utils';

interface CardProps {
  name: string;
  profession: string;
  avatar: any;
  domainImage: any;
  type: 'horizontal' | 'vertical';
  isFavorite?: boolean;
}

const Card: React.FC<CardProps> = ({ name, profession, avatar, domainImage, type, isFavorite }) => {
  const isHorizontal = type === 'horizontal';

  return (
    <View style={[styles.card, isHorizontal ? styles.horizontalCard : styles.verticalCard]}>
      {isHorizontal && (
        <Image source={domainImage} style={styles.domainImage} />
      )}
      <View style={styles.content}>
        <Image source={avatar} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
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
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    marginBottom: normalize(10),
    elevation: normalize(3),
    width: normalize(250),
  },
  horizontalCard: {
    height: normalize(200),
  },
  verticalCard: {
    height: normalize(150),
  },
  domainImage: {
    width: '100%',
    height: '37.5%',
    borderTopLeftRadius: normalize(10),
    borderTopRightRadius: normalize(10),
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(10),
  },
  profileImage: {
    width: normalize(88),
    height: normalize(60),
    resizeMode: 'cover',
    borderRadius: normalize(5),
    marginRight: normalize(10),
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  profession: {
    fontSize: normalize(14),
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    right: normalize(10),
    top: '50%',
  },
  favoriteIcon: {
    width: normalize(24),
    height: normalize(24),
    tintColor: '#333',
  },
});

export default Card;
