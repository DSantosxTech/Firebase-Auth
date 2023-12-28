import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
