import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { submitPetDetails, fetchRandomDogImage } from '../api/petService';
import { petFormSchema } from '../utils/validation';
import { usePetStore } from '../store/petStore';
import { Pet } from '../types';
import { showToast } from '../utils/Toast';
import Colors from '../utils/colors';
import { CustomHeader } from '../components/CustomHeader';

export const AddPetScreen = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    price: '',
    image: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [fetchingImage, setFetchingImage] = useState(false);

  const addPet = usePetStore(state => state.addPet);

  const handleImagePicker = () => {
    Alert.alert('Select Image', 'Choose an option', [
      {
        text: 'Camera',
        onPress: () => {
          launchCamera({ mediaType: 'photo', quality: 0.7 }, response => {
            if (response.assets && response.assets[0].uri) {
              setFormData({ ...formData, image: response.assets[0].uri });
              setErrors({ ...errors, image: '' });
            }
          });
        },
      },
      {
        text: 'Gallery',
        onPress: () => {
          launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
            if (response.assets && response.assets[0].uri) {
              setFormData({ ...formData, image: response.assets[0].uri });
              setErrors({ ...errors, image: '' });
            }
          });
        },
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const handleFetchRandomImage = async () => {
    setFetchingImage(true);
    try {
      const imageUrl = await fetchRandomDogImage();
      setFormData({ ...formData, image: imageUrl });
      setErrors({ ...errors, image: '' });

      showToast('success', 'Success', 'Random dog image loaded!');
    } catch (error) {

      showToast('error', 'Error', 'Failed to fetch image');
    } finally {
      setFetchingImage(false);
    }
  };

  const handleSubmit = async () => {
    try {
      await petFormSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setLoading(true);

      await submitPetDetails(formData);

      const newPet: Pet = {
        id: Date.now().toString(),
        ...formData,
      };

      addPet(newPet);

      showToast('success', 'Success', 'Pet added successfully!');

      setFormData({ name: '', breed: '', age: '', price: '', image: '' });
      navigation.navigate('PetList');
    } catch (error: any) {
      if (error.inner) {
        const validationErrors: any = {};
        error.inner.forEach((err: any) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        showToast('error', 'Error', error.message || 'Failed to add pet');
      }
    } finally {
      setLoading(false);
    }
  };

  return (

    <>

      <CustomHeader
        title="Add Pet"
        showBackButton={true}
        onBackPress={() => { navigation.goBack(); }}
        rightIcon={null}
        onRightPress={() => { }}
        subtitle={""}
      />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

          <View style={styles.imageSection}>
            {formData.image ? (
              <TouchableOpacity onPress={handleImagePicker}>
                <Image source={{ uri: formData.image }} style={styles.imagePreview} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.imagePlaceholder}
                onPress={handleImagePicker}>
                <Text style={styles.imagePlaceholderText}>📷</Text>
                <Text style={styles.imagePlaceholderSubtext}>Tap to select</Text>
              </TouchableOpacity>
            )}
            {errors.image && <Text style={styles.errorText}>{errors.image}</Text>}

            <Button
              title="Fetch Random Dog"
              onPress={handleFetchRandomImage}
              loading={fetchingImage}
              variant="secondary"
              style={styles.randomButton}
            />
          </View>

          <Input
            label="Pet Name"
            value={formData.name}
            onChangeText={text => setFormData({ ...formData, name: text })}
            placeholder="e.g., Max"
            error={errors.name}
          />

          <Input
            label="Breed"
            value={formData.breed}
            onChangeText={text => setFormData({ ...formData, breed: text })}
            placeholder="e.g., Golden Retriever"
            error={errors.breed}
          />

          <Input
            label="Age (years)"
            value={formData.age}
            onChangeText={text => setFormData({ ...formData, age: text })}
            placeholder="e.g., 3"
            keyboardType="numeric"
            error={errors.age}
          />

          <Input
            label="Price ($)"
            value={formData.price}
            onChangeText={text => setFormData({ ...formData, price: text })}
            placeholder="e.g., 500"
            keyboardType="numeric"
            error={errors.price}
          />

          <Button
            title="Add Pet"
            onPress={handleSubmit}
            loading={loading}
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 24,
  },
  imageSection: {
    marginBottom: 24,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: Colors.cardAlt,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: Colors.cardAlt,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  imagePlaceholderText: {
    fontSize: 48,
  },
  imagePlaceholderSubtext: {
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 8,
  },
  randomButton: {
    marginTop: 12,
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    marginTop: 8,
    marginBottom: 40,
  },
});
