import React from 'react';
import {Facebook, Google, Apple} from '../../../assets/svgs';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {appColor} from '../../../constants/appColor';
import {fontFamily} from '../../../constants/fontFamily';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColor.gray4}
        size={16}
        font={fontFamily.medium}
      />
      <SpaceComponent height={16} />

      <ButtonComponent
        icon={<Google />}
        text="Login with Google"
        type="primary"
        color={appColor.white}
        styles={{justifyContent: 'center', alignItems: 'flex-start'}}
        textColor={appColor.text}
        textFont={fontFamily.semiBold}
        iconFlex="right"
      />

      <ButtonComponent
        icon={<Apple />}
        text="Login with Apple"
        type="primary"
        color={appColor.white}
        styles={{justifyContent: 'center', alignItems: 'flex-start'}}
        textColor={appColor.text}
        textFont={fontFamily.semiBold}
        iconFlex="right"
      />

      <ButtonComponent
        icon={<Facebook />}
        text="Login with Facebook"
        type="primary"
        color={appColor.white}
        styles={{justifyContent: 'center', alignItems: 'flex-start'}}
        textColor={appColor.text}
        textFont={fontFamily.semiBold}
        iconFlex="right"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
