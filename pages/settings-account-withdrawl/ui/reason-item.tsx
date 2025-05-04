import COLORS from '@/shared/utils/colors';
import Checkbox, { CheckboxProps } from 'expo-checkbox';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

type ReasonItemProps = {
  label: string;
} & Pick<CheckboxProps, 'value' | 'onValueChange'>;

export default function ReasonItem({ label, value, onValueChange }: ReasonItemProps) {
  return (
    <Pressable onPress={() => onValueChange?.(!value)} className="flex-row items-center py-2.5">
      <View className="p-[3px]">
        <Checkbox
          value={value}
          onValueChange={onValueChange}
          color={value ? COLORS.primary['03'] : undefined}
          style={{ height: 18, width: 18 }}
        />
      </View>
      <Text className="flex-1 ml-2 text-body3 text-grey-70 font-suit-regular">{label}</Text>
    </Pressable>
  );
}
