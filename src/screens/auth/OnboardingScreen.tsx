import React, {useEffect, useState} from 'react';
import {Button, StatusBar, View} from 'react-native';
import {
  SectionComponent,
  RowComponent,
  ButtonComponent,
} from '../../components';
import Swiper from 'react-native-swiper';
import Swiper1 from './components/Swiper1';
import Swiper2 from './components/Swiper2';
import Swiper3 from './components/Swiper3';
import {appColor} from '../../constants/appColor';
import {globalStyles} from '../../styles/globalStyles';
import {useIsFocused} from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  const isFocused = useIsFocused();

  useEffect(() => {
    setIndex(0);
  }, [isFocused]);

  return (
    <View style={[globalStyles.container, {paddingTop: 20, flex: 1}]}>
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
            textColor={appColor.white}
            onPress={() =>
              index === 2
                ? navigation.navigate('LandingScreen')
                : setIndex(index + 1)
            }
            text=""
            type="primary"
            icon={
              <FontAwesome6
                name="arrow-right"
                size={24}
                color={appColor.white}
              />
            }
            styles={{
              width: 56,
              height: 56,
              borderRadius: 28,
            }}
          />
        </RowComponent>
      </SectionComponent>
    </View>
  );
};

export default OnboardingScreen;
