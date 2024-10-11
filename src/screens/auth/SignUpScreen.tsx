import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColor} from '../../constants/appColor';
import {LoadingModal} from '../../modals';
import {Validate} from '../../utils/validates';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authApi';
import {fontFamily} from '../../constants/fontFamily';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage &&
        (errorMessage.email ||
          errorMessage.password ||
          errorMessage.confirmPassword)) ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage, values]);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };

  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = ``;

    switch (key) {
      case 'email':
        if (!values.email) {
          message = `Email is required!`;
        } else if (!Validate.email(values.email)) {
          message = 'Email is not invalid!';
        } else {
          message = '';
        }
        break;

      case 'password':
        message = !values.password ? `Password is required!` : '';
        break;

      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = `Please type confirm password!`;
        } else if (values.confirmPassword !== values.password) {
          message = 'Password is not match!';
        } else {
          message = '';
        }
        break;
    }

    data[`${key}`] = message;
    setErrorMessage(data);
  };

  const handleRegister = async () => {
    setErrorMessage('');

    const api = `/register`;
    const data = {
      email: values.email,
      password: values.password,
      firstName: values.firstName ?? '',
      lastName: values.lastName ?? '',
    };

    try {
      const res = await authenticationAPI.HandleAuthentication(
        api,
        data,
        'post',
      );
      console.log('Response from API:', res);
      navigation.navigate('LoginScreen');
    } catch (error) {
      const errorMessage = 'User has already exist!';
      setErrorMessage(errorMessage);
      console.log(`Can not create new user: ${JSON.stringify(error)}`);
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent
            size={24}
            title
            text="Sign Up"
            font={fontFamily.semiBold}
            color={appColor.text1}
            styles={{textAlign: 'center'}}
          />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.firstName}
            placeholder="Enter your firstname"
            onChange={val => handleChangeValue('firstName', val)}
            allowClear
            affix={<User size={22} color={appColor.gray} />}
          />
          <InputComponent
            value={values.lastName}
            placeholder="Enter your lastname"
            onChange={val => handleChangeValue('lastName', val)}
            allowClear
            affix={<User size={22} color={appColor.gray} />}
          />
          <InputComponent
            value={values.email}
            placeholder="Enter your email"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColor.gray} />}
            onEnd={() => formValidator('email')}
          />
          <InputComponent
            value={values.password}
            placeholder="Enter your password"
            onChange={val => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColor.gray} />}
            onEnd={() => formValidator('password')}
          />
          <InputComponent
            value={values.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColor.gray} />}
            onEnd={() => formValidator('confirmPassword')}
          />
        </SectionComponent>

        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    text={errorMessage[`${error}`]}
                    key={`error${index}`}
                    color={appColor.danger}
                  />
                ),
            )}
          </SectionComponent>
        )}
        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            onPress={handleRegister}
            text="Sign Up"
            disable={isDisable}
            type="primary"
          />
        </SectionComponent>
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Already have an account? " />
            <ButtonComponent
              type="link"
              text="Login"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
        <SocialLogin />
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
