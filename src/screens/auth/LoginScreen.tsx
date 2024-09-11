import { Lock, Sms } from 'iconsax-react-native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Switch } from 'react-native';
import authenticationAPI from '../../apis/authApi';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { appColor } from '../../constants/appColor';
import { Validate } from '../../utils/validates';
import SocialLogin from './components/SocialLogin';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontFamily } from '../../constants/fontFamily';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const userNameValidation = Validate.email(username);

    if (!username || !password || !userNameValidation) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [username, password]);

  const handleLogin = async () => {
    const userNameValidation = Validate.email(username);
    if (userNameValidation) {
      try {
        const res = await authenticationAPI.HandleAuthentication(
          '/login',
          { username, password },
          'post',
        );

        dispatch(addAuth(res.data));

        await AsyncStorage.setItem(
          'auth',
          isRemember ? JSON.stringify(res.data) : username,
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Username is not correct!!!!');
    }
  };

  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 180,
            height: 90.4,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent
          size={24}
          title
          text="Login"
          font={fontFamily.semiBold}
          color={appColor.text1}
          styles={{ textAlign: 'center' }}
        />
        <SpaceComponent height={21} />
        <InputComponent
          value={username}
          placeholder="Enter your username"
          onChange={val => setUsername(val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          value={password}
          placeholder="Enter your password"
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColor.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ true: appColor.primary }}
              thumbColor={appColor.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponent width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent text="Forgot Password?" type="text" />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          disable={isDisable}
          onPress={handleLogin}
          text="Login"
          type="primary"
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            type="link"
            text="Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
      <SocialLogin />
    </ContainerComponent>
  );
};

export default LoginScreen;
