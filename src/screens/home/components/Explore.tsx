import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Section from './Section';

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
    //padding: 10,
  },
});

export default Explore;
