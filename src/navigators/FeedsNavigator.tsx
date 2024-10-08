import React from 'react';
import {FeedsScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const FeedsNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FeedsScreen" component={FeedsScreen} />
    </Stack.Navigator>
  );
};

export default FeedsNavigator;
