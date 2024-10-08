import React, {ReactNode} from 'react';
import HomeNavigator from './HomeNavigator';
import FeedsNavigator from './FeedsNavigator';
import ClinicNavigator from './ClinicNavigator';
import ScheduleNavigator from './ScheduleNavigator';
import ProfileNavigator from './ProfileNavigator';
import {appColor} from '../constants/appColor';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {User} from 'iconsax-react-native';
import {TextComponent} from '../components';
import {Platform} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 68,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColor.white,
        },
        tabBarIcon: ({focused, color, size}) => {
          let icon: ReactNode;
          color = focused ? appColor.primary : appColor.gray5;
          size = 24;
          switch (route.name) {
            case 'Home':
              icon = <MaterialIcons name="home" size={size} color={color} />;
              break;
            case 'Feeds':
              icon = <FontAwesome name="newspaper-o" size={24} color={color} />;
              break;
            case 'Clinic':
              icon = <FontAwesome name="stethoscope" size={24} color={color} />;
              break;
            case 'Schedule':
              icon = <AntDesign name="calendar" size={24} color={color} />;
              break;
            case 'Profile':
              icon = <User size={size} variant="Bold" color={color} />;
              break;
          }
          return icon;
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabel({focused}) {
          return route.name === 'Add' ? null : (
            <TextComponent
              text={route.name}
              flex={0}
              size={12}
              color={focused ? appColor.primary : appColor.gray5}
              styles={{
                marginBottom: Platform.OS === 'android' ? 12 : 0,
              }}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Feeds" component={FeedsNavigator} />
      <Tab.Screen name="Clinic" component={ClinicNavigator} />
      <Tab.Screen name="Schedule" component={ScheduleNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
