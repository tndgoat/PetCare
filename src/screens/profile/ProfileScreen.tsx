import React from 'react';
import { Text, View } from 'react-native';
import {
  ButtonComponent,
  SectionComponent,
} from '../../components';
import { LoginManager } from 'react-native-fbsdk-next';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <SectionComponent>
        <ButtonComponent
          type="primary"
          text="Logout"
          onPress={async () => {
            await LoginManager.logOut();
            dispatch(removeAuth({}));
            await AsyncStorage.clear();
          }}
        />
      </SectionComponent>
    </View>
  )
}

export default ProfileScreen
