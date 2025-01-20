import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Section from './Section';
import { normalize } from '../../../utils/utils';

const Explore: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section title="Most Favorites" type="horizontal" />
      <Section title="Nearest" type="vertical" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(20),
  },
});

export default Explore;
