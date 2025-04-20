import COLORS from '@/shared/utils/colors';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { Control, Controller, useController } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { SajuInfoFormData } from '../../model/types';

type BirthtimeFormFieldProps = {
  control: Control<SajuInfoFormData>;
};

export default function BirthtimeFormField({ control }: BirthtimeFormFieldProps) {
  const { field: isBirthTimeUnknownField } = useController({ control, name: 'isBirthTimeUnknown' });

  return (
    <View className="flex-col gap-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-0.5">
          <Text className="text-body1 text-grey-70 font-suit-regular">태어난 시간</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Controller
            control={control}
            name="isBirthTimeUnknown"
            render={({ field: { onChange, value } }) => (
              <Checkbox
                value={value}
                onValueChange={(checked) => {
                  onChange(checked);
                  if (checked) {
                    isBirthTimeUnknownField.onChange('birthTime', '모름');
                  }
                }}
                color={value ? COLORS.primary['03'] : undefined}
                className="w-4 h-4 rounded-full"
              />
            )}
          />
          <Text className="text-body1 text-grey-90 font-suit-regular">시간을 몰라요</Text>
        </View>
      </View>
      <Controller
        control={control}
        name="birthTime"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={`px-3 py-2 text-body3 rounded-lg ${
              isBirthTimeUnknownField.value
                ? 'bg-grey-10 text-primary-03 font-suit-bold'
                : 'bg-grey-00 font-suit-regular'
            }`}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            editable={!value}
            placeholder="HH:MM"
          />
        )}
      />
    </View>
  );
}
