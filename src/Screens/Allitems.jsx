import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Allitems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.itemsHeading}>Items</Text>
        <Text style={styles.itemsHeading}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // ensure id is string
        renderItem={({ item }) => (
          <View style={[styles.itemRow,
          {backgroundColor: item.stock <5 ? '#df4c80ff': '#45e676ff'}]} >
            <Text style={styles.items}>{item.name}</Text>
            <Text style={styles.items}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{
          gap:10
        }}
      />
    </View>
  );
};

export default Allitems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7
  },
  itemsHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Arial',
  }, 
  items: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
