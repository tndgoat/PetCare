import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const NotifiScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>NotifiScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotifiScreen;
