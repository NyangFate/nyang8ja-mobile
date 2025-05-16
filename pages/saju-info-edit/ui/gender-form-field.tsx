import { SajuInfoFormData } from '@/pages/saju-info-edit/model/types';
import cn from '@/shared/utils/cn';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';
import ErrorMessage from './error-message';

type GenderFormFieldProps = {
  control: Control<SajuInfoFormData>;
  errors: FieldErrors<SajuInfoFormData>;
};

export default function GenderFormField({ control, errors }: GenderFormFieldProps) {
  return (
    <View className="gap-2">
      <Text className="text-body1 text-grey-70 font-suit-regular">성별</Text>
      <View className="gap-1.5">
        <Controller
          control={control}
          name="gender"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View className="flex-row gap-3">
              <Pressable
                className={cn(
                  'flex-1 py-3 rounded-lg justify-center items-center h-[48px]',
                  value === 'male'
                    ? 'bg-primary-01 border border-primary-03'
                    : 'bg-grey-00 border border-grey-20',
                  errors.gender && 'border-error'
                )}
                onPress={() => onChange('male')}
              >
                <Text
                  className={cn(
                    value === 'male'
                      ? 'text-subhead3 text-primary-03 font-suit-bold'
                      : 'text-body3 text-grey-30 font-suit-regular'
                  )}
                >
                  남자
                </Text>
              </Pressable>
              <Pressable
                className={cn(
                  'flex-1 py-3 rounded-lg justify-center items-center h-[48px]',
                  value === 'female'
                    ? 'bg-primary-01 border border-primary-03'
                    : 'bg-grey-00 border border-grey-20',
                  errors.gender && 'border-error'
                )}
                onPress={() => onChange('female')}
              >
                <Text
                  className={cn(
                    value === 'female'
                      ? 'text-subhead3 text-primary-03 font-suit-bold'
                      : 'text-body3 text-grey-30 font-suit-regular '
                  )}
                >
                  여자
                </Text>
              </Pressable>
            </View>
          )}
        />
        {errors.gender?.message && <ErrorMessage message={errors.gender.message} />}
      </View>
    </View>
  );
}
