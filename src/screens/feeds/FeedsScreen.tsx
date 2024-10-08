import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const FeedsScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>FeedsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedsScreen;
