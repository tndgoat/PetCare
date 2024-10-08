import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const ScheduleScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>ScheduleScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
