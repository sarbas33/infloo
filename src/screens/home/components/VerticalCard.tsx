import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

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
    width: screenWidth - 20, // Full width with some padding
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 13,
    marginLeft: 15,
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
  },
  profession: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
  },
  favoriteIcon: {
    width: 36,
    height: 36,
  },
});

export default VerticalCard;
