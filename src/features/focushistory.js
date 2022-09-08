import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export const FocusHistory = ({ history }) => {
  const renderItem = ({item}) => <Text style={ styles.item}> - {item} </Text>;
  if (!history || !history.length) return <View style={styles.container}><Text style={styles.item}> We have not focused yet </Text></View>;
  return (
    <View style={styles.container}>
      <Text style = {styles.text}> Things we have to focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },

  item: {
    fontSize: 16,
    color: 'white',
    paddingTop: 15,
  },
});
