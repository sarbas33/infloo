import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

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
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    width: 250, // Same width for both card types
  },
  horizontalCard: {
    height: 200, // Larger height for horizontal cards
  },
  verticalCard: {
    height: 150, // Smaller height for vertical cards
  },
  domainImage: {
    width: '100%',
    height: '37.5%', // Top part for horizontal cards
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 88,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profession: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: '50%', // Align with the center of the card
  },
  favoriteIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
});

export default Card;
