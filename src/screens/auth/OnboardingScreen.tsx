import {ArrowRight2} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {appColor} from '../../constants/appColor';
import {globalStyles} from '../../styles/globalStyles';
import Swiper1 from './components/Swiper1';
import Swiper2 from './components/Swiper2';
import Swiper3 from './components/Swiper3';
import {useIsFocused} from '@react-navigation/native';
import {
  SectionComponent,
  RowComponent,
  ButtonComponent,
} from '../../components';
import LandingScreen from './LandingScreen';

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  const isFocused = useIsFocused();

  useEffect(() => {
    setIndex(0);
  }, [isFocused]);

  return (
    <View style={[globalStyles.container, {paddingTop: 20}]}>
      <StatusBar hidden />
      <Swiper
        index={index}
        onIndexChanged={int => setIndex(int)}
        showsPagination={false}
        loop={false}>
        <Swiper1 />
        <Swiper2 />
        <Swiper3 />
      </Swiper>
      <SectionComponent>
        <RowComponent justify="space-between">
          <RowComponent>
            {Array.from({length: 3}).map((_item, ind) => (
              <View
                key={`dot${ind}`}
                style={{
                  height: 6,
                  backgroundColor:
                    ind === index ? appColor.primary : appColor.gray2,
                  borderRadius: 100,
                  marginRight: 4,
                  width: ind === index ? 16 : 6,
                }}
              />
            ))}
          </RowComponent>
          <ButtonComponent
            color={appColor.primary}
            text=""
            styles={{
              width: 50,
              height: 50,
            }}
            icon={<ArrowRight2 size={24} color="white" />}
            onPress={() =>
              index === 2
                ? navigation.navigate(LandingScreen)
                : setIndex(index + 1)
            }
          />
        </RowComponent>
      </SectionComponent>
    </View>
  );
};

export default OnboardingScreen;
