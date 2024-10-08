import React from 'react';
import {Image, View} from 'react-native';
import {TextComponent, SectionComponent} from '../../../components';
import {appColor} from '../../../constants/appColor';
import {appInfo} from '../../../constants/appInfo';
import {fontFamily} from '../../../constants/fontFamily';

const Swiper3 = () => {
  const {HEIGHT, WIDTH} = appInfo.sizes;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          position: 'absolute',
          top: HEIGHT * 0.2,
          width: (WIDTH * 293) / 430,
          height: (WIDTH * 293) / 430,
        }}>
        <Image
          source={require('../../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <SectionComponent
        styles={[
          {
            paddingTop: 24,
            marginTop: HEIGHT * 0.5,
            alignItems: 'center',
          },
        ]}>
        <TextComponent
          text={`Community`}
          size={40}
          title
          font={fontFamily.bold}
          styles={{textAlign: 'center'}}
        />
        <TextComponent
          color={appColor.text}
          text="Capture and share every joyful moment with your pets. And with other pet owners as well."
          size={20}
          numberOfLine={3}
          styles={{textAlign: 'center', marginTop: 10}}
        />
      </SectionComponent>
    </View>
  );
};

export default Swiper3;
