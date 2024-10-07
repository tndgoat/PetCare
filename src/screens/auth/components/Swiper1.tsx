import React from 'react';
import { Image, View } from 'react-native';
import { TextComponent, SectionComponent } from '../../../components';
import { appColor } from '../../../constants/appColor';
import { appInfo } from '../../../constants/appInfo';
import { fontFamily } from '../../../constants/fontFamily';

const Swiper1 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1.2,
          maxHeight: appInfo.sizes.HEIGHT * 0.6,
          padding: 20,
        }}>
        <Image
          source={require('../../../assets/images/onboarding-1.png')}
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
          text={`My Pets`}
          size={30}
          title
          font={fontFamily.bold}
        />
        <TextComponent
          numberOfLine={2}
          color={appColor.text}
          text="Set up an individual profile and track the growth and health of each of your little guys."
        />
      </SectionComponent>
    </View>
  );
};

export default Swiper1;
