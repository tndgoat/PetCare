import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { appColor } from '../../constants/appColor';
import { appInfo } from '../../constants/appInfo';
import { globalStyles } from '../../styles/globalStyles';
import { ButtonComponent, TextComponent } from '../../components';
import { fontFamily } from '../../constants/fontFamily';

const LandingScreen = ({ navigation }: any) => {
  return (
    <View style={[globalStyles.container, localStyles.container]}>
      {/* Top Section: Logo and Text */}
      <View style={localStyles.topSection}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={localStyles.logo}
        />
        <TextComponent
          text="Let's get started!"
          color={appColor.text1}
          size={22}
          font={fontFamily.bold}
          styles={localStyles.title}
        />
        <TextComponent
          text="Login to enjoy the features we've"
          color={appColor.text2}
          size={16}
          font={fontFamily.regular}
          styles={localStyles.subtitle}
        />
        <TextComponent
          text="provided, and stay healthy!"
          color={appColor.text2}
          size={16}
          font={fontFamily.regular}
          styles={localStyles.subtitle}
        />
      </View>

      {/* Bottom Section: Buttons */}
      <View style={localStyles.bottomSection}>
        <ButtonComponent
          color={appColor.primary}
          styles={localStyles.button}
          onPress={() => navigation.navigate('LoginScreen')}
          text="Login"
          type="primary"
        />
        <ButtonComponent
          color={appColor.white}
          styles={[localStyles.button, localStyles.signupButton]}
          textColor={appColor.primary}
          onPress={() => navigation.navigate('SignUpScreen')}
          text="Sign Up"
          type="primary"
        />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  topSection: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: appInfo.sizes.WIDTH * 0.5,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 2,
  },
  bottomSection: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 263,
    height: 56,
    borderRadius: 32,
  },
  signupButton: {
    borderColor: appColor.primary,
    borderWidth: 1,
  },
});

export default LandingScreen;
