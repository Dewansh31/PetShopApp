# 🐾 Pet Shop Mobile Application

A feature-rich React Native mobile application for managing a pet shop with image upload, form validation, API integration, and cart management.

## 📱 Features

- **Pet Image Upload**: Capture from camera or select from gallery
- **Random Pet Image**: Fetch random dog images from API
- **Form Validation**: Comprehensive validation using Yup
- **Pet Listing**: Beautiful card-based grid layout
- **Shopping Cart**: Add/remove items with quantity management
- **State Management**: Global state using Zustand
- **Toast Notifications**: User-friendly feedback
- **TypeScript**: Full type safety
- **Modern UI**: Clean, intuitive design with smooth animations

## 🛠 Tech Stack

- **Framework**: React Native CLI with TypeScript
- **State Management**: Zustand
- **Navigation**: React Navigation v6
- **Form Validation**: Yup
- **HTTP Client**: Axios
- **Image Picker**: react-native-image-picker
- **Notifications**: react-native-toast-message
- **Animations**: React Native Reanimated & Gesture Handler

## 📋 Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)
- JDK 17 or newer

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd PetShopApp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install iOS dependencies (macOS only)
```bash
cd ios && pod install && cd ..
```

### 4. Run the application

**For Android:**
```bash
npm run android
```

**For iOS:**
```bash
npm run ios
```

## 🏗 Project Structure

```
PetShopApp/
├── src/
│   ├── api/
│   │   └── petService.ts          # API integration
│   ├── components/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Input.tsx              # Reusable input component
│   │   ├── PetCard.tsx            # Pet listing card
│   │   └── CartItem.tsx           # Cart item component
│   ├── navigation/
│   │   └── AppNavigator.tsx       # Navigation configuration
│   ├── screens/
│   │   ├── AddPetScreen.tsx       # Add new pet screen
│   │   ├── PetListScreen.tsx      # Pet listing screen
│   │   └── CartScreen.tsx         # Shopping cart screen
│   ├── store/
│   │   ├── cartStore.ts           # Cart state management
│   │   └── petStore.ts            # Pet state management
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   └── utils/
│       └── validation.ts          # Form validation schemas
├── App.tsx                        # Root component
└── README.md                      # Documentation
```

## 🔌 API Endpoints Used

1. **Submit Pet Details**
   - **URL**: `https://reqres.in/api/users`
   - **Method**: POST
   - **Purpose**: Submit new pet information

2. **Random Dog Image**
   - **URL**: `https://dog.ceo/api/breeds/image/random`
   - **Method**: GET
   - **Purpose**: Fetch random dog images

> **Note**: ReqRes is used as a mock API for demonstration. In production, this would be replaced with an actual backend API.

## 🎨 Key Features Explained

### State Management with Zustand

- **cartStore**: Manages shopping cart items, quantities, and totals
- **petStore**: Manages the list of pets

### Form Validation

All pet form fields are validated using Yup:
- Name: Required, minimum 2 characters
- Breed: Required, minimum 2 characters
- Age: Required, must be numeric
- Price: Required, must be valid decimal number
- Image: Required

### Image Handling

Users can:
1. Capture images using device camera
2. Select images from gallery
3. Fetch random dog images from API
4. Preview images before submission

### Shopping Cart

Features include:
- Add pets to cart
- Automatic quantity increment for duplicate items
- Remove items from cart
- Real-time total calculation
- Clear entire cart

## 📸 Screenshots

(Add screenshots of your app here)

## 🧪 Testing

The application handles:
- ✅ Loading states during API calls
- ✅ Error handling with user-friendly messages
- ✅ Form validation with inline error messages
- ✅ Network failure scenarios
- ✅ Empty states for lists

## 🎯 Assignment Requirements Checklist

- [x] Pet Image Upload (Camera/Gallery)
- [x] Image preview before submission
- [x] Form validation (Yup)
- [x] Required fields: Name, Breed, Age, Price
- [x] Submit to mock API (POST)
- [x] Handle loading/error/success states
- [x] Fetch random pet image (GET)
- [x] Pet listing with cards
- [x] Cart functionality (Add/Remove/View/Total)
- [x] Global state management (Zustand)
- [x] TypeScript implementation
- [x] Reusable components
- [x] Toast notifications
- [x] Modern UI design
- [x] Error handling
- [x] Loading indicators

## 🔧 Troubleshooting

### Android Build Issues
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

### iOS Build Issues
```bash
cd ios && pod deintegrate && pod install && cd ..
npm run ios
```

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

## 📦 Third-Party Libraries

| Library | Purpose | Justification |
|---------|---------|---------------|
| zustand | State Management | Lightweight, minimal boilerplate, excellent TypeScript support |
| react-navigation | Navigation | Industry standard for React Native navigation |
| axios | HTTP Client | Robust API client with interceptors and better error handling |
| yup | Validation | Popular, declarative validation with great TypeScript support |
| react-native-image-picker | Image Selection | Native module for camera/gallery access |
| react-native-toast-message | Notifications | Beautiful, customizable toast notifications |
| react-native-reanimated | Animations | Performant animations running on native thread |

## 👨‍💻 Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error boundaries
- Keep components small and reusable
- Follow React Native performance best practices
- Use meaningful variable and function names
- Add comments for complex logic

## 📝 License

This project is created for assignment purposes.

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

---

**Built with ❤️ using React Native**
