import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { ReactNode } from 'react';
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { appColor } from '../constants/appColor';
import { fontFamily } from '../constants/fontFamily';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    textColor,
    textStyles,
    textFont,
    color,
    styles,
    onPress,
    iconFlex,
    type,
    disable,
  } = props;

  const dynamicTextStyles = {
    marginLeft: icon ? 12 : 0,
  };

  return type === 'primary' ? (
    <View style={localStyles.center}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : disable
                ? appColor.gray4
                : appColor.primary,
          },
          localStyles.button,
          styles,
        ]}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColor.white}
          styles={[textStyles, localStyles.text, dynamicTextStyles]}
          flex={icon && iconFlex === 'right' ? 1 : 0}
          font={textFont ?? fontFamily.medium}
        />
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        flex={0}
        text={text}
        color={type === 'link' ? appColor.primary : appColor.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const localStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  button: {
    marginBottom: 17,
    width: '90%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
