import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { normalize } from '../../../utils/utils';

const Events: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Events coming soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#666',
  },
});

export default Events;
