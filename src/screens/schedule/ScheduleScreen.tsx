import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {fontFamily} from '../../constants/fontFamily';
import {appColor} from '../../constants/appColor';
import {ButtonComponent, TextComponent} from '../../components';

// icon
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';

const ScheduleScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        style={[
          globalStyles.container,
          {paddingTop: 85, paddingHorizontal: 35},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 29,
          }}>
          <TextComponent
            text="Schedule"
            font={fontFamily.semiBold}
            size={24}
            styles={{marginRight: 4, flex: 1}}
          />
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F3E8ED',
            borderRadius: 8,
            paddingRight: 15,
            marginBottom: 25,
          }}>
          <TouchableOpacity
            style={{
              width: 75,
              alignItems: 'center',
              backgroundColor: '#DB3169',
              borderRadius: 8,
              paddingVertical: 18,
            }}>
            <TextComponent
              text="All"
              color={appColor.white}
              size={14}
              font={fontFamily.semiBold}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <TextComponent
              text="Routine"
              color={appColor.black}
              size={14}
              font={fontFamily.semiBold}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <TextComponent
              text="Appointments"
              color={appColor.black}
              size={14}
              font={fontFamily.semiBold}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#F3E8ED',
            borderRadius: 8,
            borderWidth: 1,
            paddingVertical: 18,
            paddingHorizontal: 16,
            marginBottom: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 28,
            }}>
            <View
              style={{
                flex: 1,
                marginRight: 4,
              }}>
              <Text
                style={{
                  color: '#101623',
                  fontSize: 18,
                  marginBottom: 8,
                }}>
                {'Take Golden for a walk'}
              </Text>
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 12,
                  marginLeft: 1,
                }}>
                {'Routine'}
              </Text>
            </View>
            <Image
              source={require('../../assets/images/avatar.png')}
              resizeMode={'stretch'}
              style={{
                width: 49,
                height: 49,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <AntDesign name="calendar" size={16} color="black" />
            <TextComponent
              text="Everyday"
              size={12}
              styles={{marginLeft: 2, marginRight: 18}}
            />
            <EvilIcons name="clock" size={16} color="black" />
            <TextComponent
              text="04:30 PM"
              size={12}
              styles={{marginLeft: 2, marginRight: 18}}
            />
            <Entypo name="dot-single" size={16} color="#7BEB78" />
            <TextComponent text="Mr. Golden" size={12} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 124,
                alignItems: 'center',
                borderRadius: 8,
                paddingVertical: 18,
              }}>
              <ButtonComponent
                text="Cancel"
                type="primary"
                color="#F3E8ED"
                textColor={appColor.black}
              />
            </View>
            <View
              style={{
                width: 124,
                alignItems: 'center',
                borderRadius: 8,
                paddingVertical: 18,
              }}>
              <ButtonComponent
                text="Reschedule"
                type="primary"
                color={appColor.primary}
                textColor={appColor.white}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
