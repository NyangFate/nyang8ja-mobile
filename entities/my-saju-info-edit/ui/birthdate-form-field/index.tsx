import { SajuInfoFormData } from '@/entities/my-saju-info-edit/model/types';
import COLORS from '@/shared/utils/colors';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

type BirthdateFormFieldProps = {
  control: Control<SajuInfoFormData>;
};

export default function BirthdateFormField({ control }: BirthdateFormFieldProps) {
  return (
    <View className="flex-col gap-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-0.5">
          <Text className="text-body1 text-grey-70 font-suit-regular">생년월일</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Controller
            control={control}
            name="isLunarCalendar"
            render={({ field: { onChange, value } }) => (
              <Checkbox
                value={value}
                onValueChange={onChange}
                color={value ? COLORS.primary['03'] : undefined}
                className="w-4 h-4 rounded-full"
              />
            )}
          />
          <Text className="text-body1 text-grey-90 font-suit-regular">음력이에요</Text>
        </View>
      </View>
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="px-3 py-2 rounded-lg bg-grey-00 text-body3 font-suit-regular"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="YYYY.MM.DD"
          />
        )}
      />
    </View>
  );
}
