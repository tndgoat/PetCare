import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const ClinicScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>ClinicScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ClinicScreen;
