import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CartItem} from '../components/CartItem';
import {Button} from '../components/Button';
import {useCartStore} from '../store/cartStore';
import { showToast } from '../utils/Toast';

export const CartScreen = () => {
  const items = useCartStore(state => state.items);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const clearCart = useCartStore(state => state.clearCart);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    showToast('info', 'Removed', 'Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    showToast('info', 'Cart Cleared', 'All items removed from cart');
  };

  const totalPrice = getTotalPrice().toFixed(2);

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <Text style={styles.emptySubtext}>
          Add some pets to get started!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <CartItem item={item} onRemove={handleRemove} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
        </View>
        <Button
          title="Clear Cart"
          onPress={handleClearCart}
          variant="danger"
          style={styles.clearButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
  footer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6C63FF',
  },
  clearButton: {
    width: '100%',
  },
});
