import { FlatList, StyleSheet, Text, View } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: '$59' },
  { id: '2', name: 'Smart Watch', price: '$120' },
  { id: '3', name: 'Phone Case', price: '$12' },
  { id: '4', name: 'Power Bank', price: '$30' },
  { id: '5', name: 'Bluetooth Speaker', price: '$45' },
];

export default function ProductList() {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      style={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { alignSelf: 'stretch', flex: 1, paddingHorizontal: 16, marginTop: 8 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2a2a2e',
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: { color: '#fff', fontSize: 16 },
  price: { color: '#4da3ff', fontSize: 16, fontWeight: '600' },
});