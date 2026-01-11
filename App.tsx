import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {AppNavigator} from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      <AppNavigator />
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
