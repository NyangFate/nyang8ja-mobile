import { SajuInfoFormData } from '@/pages/my-saju-info-edit/model/types';
import TextField from '@/shared/ui/text-field';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Text, View } from 'react-native';
import ErrorMessage from '../error-message';

type NameFieldProps = {
  control: Control<SajuInfoFormData>;
  errors: FieldErrors<SajuInfoFormData>;
};

export default function NameFormField({ control, errors }: NameFieldProps) {
  return (
    <View className="gap-2">
      <Text className="text-body1 text-grey-70 font-suit-regular">이름</Text>
      <View className="gap-1.5">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="냐옹신"
              error={!!errors.name}
              inputMode="text"
            />
          )}
        />
        {errors.name?.message && <ErrorMessage message={errors.name.message} />}
      </View>
    </View>
  );
}
