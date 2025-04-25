import COLORS from '@/src/shared/utils/colors';
import Checkbox, { CheckboxProps } from 'expo-checkbox';
import React from 'react';
import { Text, View } from 'react-native';

type ReasonItemProps = {
  label: string;
} & Pick<CheckboxProps, 'value' | 'onValueChange'>;

export default function ReasonItem({ label, value, onValueChange }: ReasonItemProps) {
  return (
    <View className="flex-row items-center gap-1.5 py-2.5">
      <View className="p-[3px]">
        <Checkbox
          value={value}
          onValueChange={onValueChange}
          color={value ? COLORS.primary['03'] : undefined}
          style={{ height: 18, width: 18 }}
        />
      </View>
      <Text className="text-body3 text-grey-70 font-suit-regular">{label}</Text>
    </View>
  );
}
