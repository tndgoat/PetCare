import React from 'react';
import { Facebook, Google, Apple } from '../../../assets/svgs';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import { appColor } from '../../../constants/appColor';
import { fontFamily } from '../../../constants/fontFamily';
import { StyleSheet } from 'react-native';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={localStyles.orText}
        text="OR"
        color={appColor.gray4}
        size={16}
        font={fontFamily.medium}
      />
      <SpaceComponent height={16} />

      <ButtonComponent
        type="primary"
        color={appColor.white}
        textColor={appColor.text}
        text="Login with Google"
        textFont={fontFamily.semiBold}
        iconFlex="left"
        icon={<Google />}
      />

      <ButtonComponent
        type="primary"
        color={appColor.white}
        textColor={appColor.text}
        text="Login with Apple"
        textFont={fontFamily.semiBold}
        iconFlex="left"
        icon={<Apple />}
      />

      <ButtonComponent
        type="primary"
        color={appColor.white}
        textColor={appColor.text}
        text="Login with Facebook"
        textFont={fontFamily.semiBold}
        iconFlex="left"
        icon={<Facebook />}
      />
    </SectionComponent>
  );
};

export default SocialLogin;

const localStyles = StyleSheet.create({
  orText: {
    textAlign: 'center',
  },
});
