import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface HorizontalCardProps {
  name: string;
  profession: string;
  avatar: any;
  domainImage: any;
  isFavorite?: boolean;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ name, profession, avatar, domainImage, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={domainImage} style={styles.domainImage} />
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
    width: screenWidth - 20, // Full width with some padding
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  domainImage: {
    width: '100%',
    height: 150, // Top section for domain image
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
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
    top: '50%',
  },
  favoriteIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
});

export default HorizontalCard;
