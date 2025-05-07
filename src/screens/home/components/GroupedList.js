import React, {useState, useMemo, useCallback} from 'react';
import {View, SectionList, TextInput, StyleSheet, Text} from 'react-native';
import ListItem from './ListItem';
import SectionHeader from './SectionHeader';
import {COLOR} from '../../../contstants/colors';
import {groupData} from '../../../utils';

const GroupedList = ({items}) => {
  const [searchText, setSearchText] = useState('');
  const [sortAsc, setSortAsc] = useState(false);
  const [listData, setListData] = useState(items);

  const onSearchChange = text => {
    setSearchText(text);
  };

  const onSortPress = () => {
    setSortAsc(prev => !prev);
  };

  const sections = useMemo(() => {
    let filtered = listData;
    if (searchText) {
      const lower = searchText.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lower),
      );
    }

    filtered = filtered.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    );

    return groupData(filtered);
  }, [searchText, sortAsc]);

  const renderItem = useCallback(({item}) => <ListItem item={item} />, []);

  const renderSectionHeader = useCallback(
    ({section}) => <SectionHeader title={section.title} />,
    [],
  );

  const keyExtractor = item => item.id;

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TextInput
          placeholder="Search..."
          value={searchText}
          style={styles.input}
          onChangeText={onSearchChange}
          placeholderTextColor={COLOR.black}
        />
        <Text
          style={[
            styles.sortText,
            {color: sortAsc ? COLOR.lightBlue : COLOR.black},
          ]}
          onPress={onSortPress}>
          Sort by Name
        </Text>
      </View>
      <SectionList
        sections={sections}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled
        initialNumToRender={25}
        maxToRenderPerBatch={25}
        windowSize={21}
        removeClippedSubviews
        contentContainerStyle={styles.contentStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 24},
  controls: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLOR.darkGrey,
    color: COLOR.black,
  },
  sortText: {
    fontWeight: '600',
  },
  contentStyle: {
    paddingBottom: 24,
  },
});

export default GroupedList;
