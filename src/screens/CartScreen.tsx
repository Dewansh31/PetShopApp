import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartItem } from '../components/CartItem';
import { Button } from '../components/Button';
import { useCartStore } from '../store/cartStore';
import { showToast } from '../utils/Toast';
import Colors from '../utils/colors';
import { CustomHeader } from '../components/CustomHeader';

export const CartScreen = (props: any) => {
  const items = useCartStore((state: any) => state.items);
  const removeFromCart = useCartStore((state: any) => state.removeFromCart);
  const clearCart = useCartStore((state: any) => state.clearCart);
  const getTotalPrice = useCartStore((state: any) => state.getTotalPrice);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    showToast('info', 'Removed', 'Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    showToast('info', 'Cart Cleared', 'All items removed from cart');
  };

  const totalPrice = getTotalPrice().toFixed(2);

  return (
    <>
      <CustomHeader
        title="Shopping Cart"
        showBackButton={true}
        onBackPress={() => { props.navigation.goBack(); }}
        rightIcon={null}
        onRightPress={() => { }}
        subtitle={""}
      />

      {
        items.length === 0 ?
          <View style={styles.emptyContainer}>
            {/* Empty State */}
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <Text style={styles.emptySubtext}>
              Add some pets to get started!
            </Text>
          </View>
          :

          <View style={styles.container}>
            {/* Main view */}
            <FlatList
              data={items}
              renderItem={({ item }) => (
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
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  footer: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: -2 },
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
    color: Colors.textPrimary,
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  clearButton: {
    width: '100%',
  },
});
