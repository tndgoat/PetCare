import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>SignUpScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
