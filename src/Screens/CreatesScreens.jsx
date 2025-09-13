import { StyleSheet, TextInput, Text, View, Pressable, FlatList, Alert } from 'react-native';
import { useState } from 'react';

const CreatesScreens = () => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [data, setData] = useState([]);

  // Add or update item
  const addItem = () => {
    const stockNumber = parseInt(stock);
    if (!itemName || !stock || stockNumber <= 0) {
      Alert.alert('Error', 'Please enter a valid item name and positive stock number.');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockNumber,
    };

    setData([...data, newItem]);
    setItemName('');
    setStock('');
  };

  // Delete item
  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Item</Text>

      {/* Inputs */}
      <TextInput
        placeholder="Item Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />

      <TextInput
        placeholder="Stock"
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        keyboardType="numeric"
        onChangeText={setStock}
      />

      {/* Add Button */}
      <Pressable style={styles.addBtn} onPress={addItem}>
        <Text style={styles.addBtnText}>Add Item</Text>
      </Pressable>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.itemsHeading}>Items</Text>
        <Text style={styles.itemsHeading}>Quantity</Text>
      </View>

      {/* FlatList */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemRow,
              { backgroundColor: item.stock < 5 ? '#ffd6d6' : '#d6ffd6' },
            ]}
          >
            {/* Item Info */}
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.stockText}>{item.stock} units</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <Pressable style={[styles.smallBtn, { backgroundColor: '#3ac883ff' }]}>
                <Text style={styles.btnText}>Edit</Text>
              </Pressable>
              <Pressable
                style={[styles.smallBtn, { backgroundColor: '#ff4d4d' }]}
                onPress={() => deleteItem(item.id)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default CreatesScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  addBtn: {
    backgroundColor: '#3ac883ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  itemsHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemDetails: {
    flex: 2,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  stockText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  smallBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
});
