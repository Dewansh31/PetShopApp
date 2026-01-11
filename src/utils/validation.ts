import * as yup from 'yup';

export const petFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Pet name is required')
    .min(2, 'Name must be at least 2 characters'),
  breed: yup
    .string()
    .required('Breed is required')
    .min(2, 'Breed must be at least 2 characters'),
  age: yup
    .string()
    .required('Age is required')
    .matches(/^[0-9]+$/, 'Age must be a number'),
  price: yup
    .string()
    .required('Price is required')
    .matches(/^[0-9]+(\.[0-9]{1,2})?$/, 'Price must be a valid number'),
  image: yup.string().required('Please select an image'),
});
