import React from 'react';
import { Image, View } from 'react-native';
import { TextComponent, SectionComponent } from '../../../components';
import { appColor } from '../../../constants/appColor';
import { appInfo } from '../../../constants/appInfo';
import { fontFamily } from '../../../constants/fontFamily';

const Swiper3 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1.2,
          maxHeight: appInfo.sizes.HEIGHT * 0.6,
          padding: 20,
        }}>
        <Image
          source={require('../../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            resizeMode: 'stretch',
            height: 'auto',
            width: appInfo.sizes.WIDTH - 40,
          }}
        />
      </View>

      <SectionComponent styles={[{ paddingTop: 24 }]}>
        <TextComponent
          text={`Community`}
          size={30}
          title
          font={fontFamily.bold}
        />
        <TextComponent
          numberOfLine={2}
          color={appColor.text}
          text="Capture and share every joyful moment with your pets. And with other pet owners as well."
        />
      </SectionComponent>
    </View>
  );
};

export default Swiper3;
