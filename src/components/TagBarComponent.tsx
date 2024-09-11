import { ArrowRight2 } from 'iconsax-react-native';
import React from 'react';
import { RowComponent, TextComponent } from '.';
import { appColor } from '../constants/appColor';
import { StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const TagBarComponent = (props: Props) => {
  const { title, onPress } = props;

  return (
    <RowComponent onPress={onPress} styles={localStyles.row}>
      <TextComponent numberOfLine={1} size={18} title text={title} flex={1} />
      <RowComponent>
        <TextComponent text="See All " color={appColor.gray} />
        <ArrowRight2 variant="Bold" size={14} color={appColor.gray} />
      </RowComponent>
    </RowComponent>
  );
};

export default TagBarComponent;

const localStyles = StyleSheet.create({
  row: {
    marginBottom: 12,
    paddingHorizontal: 16,
  },
});
