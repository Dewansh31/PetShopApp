import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CartItem as CartItemType} from '../types';
import Colors from '../utils/colors';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({item, onRemove}) => {
  const totalPrice = (parseFloat(item.price) * item.quantity).toFixed(2);

  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.breed}>{item.breed}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.quantity}>x {item.quantity}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => onRemove(item.id)}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: Colors.cardAlt,
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  breed: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  quantity: {
    fontSize: 13,
    color: Colors.textMuted,
    marginLeft: 8,
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  removeButton: {
    backgroundColor: Colors.error,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeText: {
    color: Colors.textInverse,
    fontSize: 12,
    fontWeight: '600',
  },
});
