import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
