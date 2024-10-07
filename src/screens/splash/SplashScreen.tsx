import React from 'react';
import {
  ActivityIndicator,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { SpaceComponent, TextComponent } from '../../components';
import { appInfo } from '../../constants/appInfo';
import { appColor } from '../../constants/appColor';
import { fontFamily } from '../../constants/fontFamily';

const logo = require('../../assets/images/logo.png');

const SplashScreen = () => {
  return (
    <SafeAreaView style={localStyles.container}>
      <View style={localStyles.innerContainer}>
        <Image source={logo} style={localStyles.logo} />
        <SpaceComponent height={16} />
        <TextComponent
          size={50}
          title
          text="PetCare"
          font={fontFamily.bold}
          color={appColor.white}
          styles={{ textAlign: 'center' }}
        />
        <SpaceComponent height={16} />
        <ActivityIndicator color={appColor.gray} size={20} />
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.primary,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: appInfo.sizes.WIDTH * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
