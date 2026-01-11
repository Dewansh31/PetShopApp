import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { PetCard } from '../components/PetCard';
import { usePetStore } from '../store/petStore';
import { useCartStore } from '../store/cartStore';
import { Pet } from '../types';
import { showToast } from '../utils/Toast';
import Colors from '../utils/colors';
import { CustomHeader } from '../components/CustomHeader';

export const PetListScreen = ({ navigation }: any) => {
  const pets = usePetStore(state => state.pets);
  const addToCart = useCartStore((state: any) => state.addToCart);
  const cartItems = useCartStore((state: any) => state.items);
  const itemCount = useCartStore((state: any) => state.getItemCount());

  const handleAddToCart = (pet: Pet) => {
    addToCart(pet);
    showToast('success', 'Added to Cart', `${pet.name} has been added to your cart`);
  };

  return (
    <View style={styles.container}>

      <CustomHeader
        title="Pet Shop"
        showBackButton={false}
        onBackPress={() => { }}
        rightIcon={
          <View style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
            {itemCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{itemCount}</Text>
              </View>
            )}
          </View>
        }
        onRightPress={() => navigation.navigate('Cart')}
        subtitle={""}
      />

      {pets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🐾</Text>
          <Text style={styles.emptyText}>No pets yet</Text>
          <Text style={styles.emptySubtext}>
            Add your first pet to get started!
          </Text>
        </View>
      ) : (
        <FlatList
          data={pets}
          renderItem={({ item }) => (
            <PetCard
              pet={item}
              onAddToCart={handleAddToCart}
              isInCart={cartItems.some((cartItem: any) => cartItem.id === item.id)}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={1}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddPet')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.surface,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  cartButton: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: 28,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: Colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: Colors.textInverse,
    fontSize: 12,
    fontWeight: '700',
  },
  listContent: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  fabText: {
    color: Colors.textInverse,
    fontSize: 32,
    fontWeight: '300',
  },
});
