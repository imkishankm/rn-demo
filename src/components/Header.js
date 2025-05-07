import React from 'react';
import {View, StyleSheet, Text, StatusBar, Platform} from 'react-native';
import {COLOR} from '../contstants/colors';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerStyle: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  titleStyle: {
    fontSize: 18,
    color: COLOR.white,
  },
});

export default Header;
