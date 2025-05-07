import React, { memo } from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import { COLOR } from '../../../contstants/colors';

const ListItem = ({item = {}}) => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.item}>
      <Text>{item?.name}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    height:46,
   justifyContent:'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.grey,
    backgroundColor: COLOR.white,
  },
});

export default memo(ListItem);
