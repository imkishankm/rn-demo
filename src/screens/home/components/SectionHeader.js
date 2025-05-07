import React, {memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLOR} from '../../../contstants/colors';

const SectionHeader = ({title = ''}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: COLOR.headerBg,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default memo(SectionHeader);
