import React from 'react';
import {ScheduleScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ScheduleNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
    </Stack.Navigator>
  );
};

export default ScheduleNavigator;
