import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from './components/TopBar';
import CategoryIcons from './components/CategoryIcons';
import TabNavigation from './components/TabNavigation';
import Explore from './components/Explore';
import Events from './components/Events';

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Explore' | 'Events'>('Explore');

  return (
    <View style={styles.container}>
      <TopBar />
      <CategoryIcons />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Explore' ? <Explore /> : <Events />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default HomeScreen;
