import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Pet } from '../types';
import Colors from '../utils/colors';

interface PetCardProps {
  pet: Pet;
  onAddToCart: (pet: Pet) => void;
  isInCart?: boolean;
}

const { width } = Dimensions.get('window');

export const PetCard: React.FC<PetCardProps> = ({ pet, onAddToCart, isInCart = false }) => {
  return (
    <View style={styles.card}>

      {isInCart && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>🛒</Text>
          </View>
        )}

      <View style={styles.imageContainer}>
        <Image source={{ uri: pet.image }} style={styles.image} />
      </View>

      <View style={styles.content}>

        <View style={{ gap: 4 }}>

          <Text style={styles.name} numberOfLines={1}>
            Name : {pet.name}
          </Text>

          <Text style={styles.breed} numberOfLines={1}>
            Breed : {pet.breed}
          </Text>

          <Text style={styles.age}>Age : {pet.age} years</Text>
          <Text style={styles.price}>Price : ${pet.price}</Text>

        </View>

        <View style={styles.footer}>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAddToCart(pet)}>
            <Text style={styles.addButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 26,
    marginBottom: 16,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  imageContainer: {
    padding: 10,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 16,
    backgroundColor: Colors.cardAlt,
  },
  content: {
    padding: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  breed: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  age: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  addButton: {
    backgroundColor: Colors.primary,
    height: 32,
    borderRadius: 10,
    paddingHorizontal: 16,
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
    backgroundColor: Colors.surface,
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cartBadgeText: {
    fontSize: 16,
  },
});
