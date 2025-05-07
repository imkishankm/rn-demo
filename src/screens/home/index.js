import React from 'react';
import {StyleSheet, View} from 'react-native';
import GroupedList from './components/GroupedList';
import Header from '../../components/Header';
import { COLOR } from '../../contstants/colors';
import { generateItems } from '../../utils';

const Home = () => {
  const items = generateItems(10000);

  return (
    <View style={styles.container}>
      <Header title={'Home - Random list'} />
      <GroupedList items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
});

export default Home;
