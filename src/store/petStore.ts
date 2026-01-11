import {create} from 'zustand';
import {Pet} from '../types';

interface PetState {
  pets: Pet[];
  addPet: (pet: Pet) => void;
  setPets: (pets: Pet[]) => void;
}

export const usePetStore = create<PetState>(set => ({
  pets: [],
  addPet: (pet: Pet) =>
    set(state => ({
      pets: [pet, ...state.pets],
    })),
  setPets: (pets: Pet[]) => set({pets}),
}));
