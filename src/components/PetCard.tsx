import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Pet} from '../types';
import Colors from '../utils/colors';

interface PetCardProps {
  pet: Pet;
  onAddToCart: (pet: Pet) => void;
  isInCart?: boolean;
}

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export const PetCard: React.FC<PetCardProps> = ({pet, onAddToCart, isInCart = false}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: pet.image}} style={styles.image} />
      {isInCart && (
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>🛒</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {pet.name}
        </Text>
        <Text style={styles.breed} numberOfLines={1}>
          {pet.breed}
        </Text>
        <View style={styles.footer}>
          <View>
            <Text style={styles.age}>{pet.age} years</Text>
            <Text style={styles.price}>${pet.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAddToCart(pet)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Colors.cardAlt,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  breed: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  age: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: Colors.textInverse,
    fontSize: 20,
    fontWeight: '600',
  },
  cartBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: Colors.success,
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cartBadgeText: {
    fontSize: 16,
  },
});
