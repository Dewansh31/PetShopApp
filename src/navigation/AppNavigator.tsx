import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PetListScreen} from '../screens/PetListScreen';
import {AddPetScreen} from '../screens/AddPetScreen';
import {CartScreen} from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6C63FF',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}>
        <Stack.Screen
          name="PetList"
          component={PetListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPet"
          component={AddPetScreen}
          options={{title: 'Add Pet'}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{title: 'Shopping Cart'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
