import React from 'react';
import {ClinicScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ClinicNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ClinicScreen" component={ClinicScreen} />
    </Stack.Navigator>
  );
};

export default ClinicNavigator;
