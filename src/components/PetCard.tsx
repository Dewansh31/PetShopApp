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
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  breed: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  age: {
    fontSize: 12,
    color: '#999',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6C63FF',
  },
  addButton: {
    backgroundColor: '#6C63FF',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  cartBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cartBadgeText: {
    fontSize: 16,
  },
});
