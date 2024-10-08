import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.center}>
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
