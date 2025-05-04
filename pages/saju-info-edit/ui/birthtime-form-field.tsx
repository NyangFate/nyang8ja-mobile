import TextField from '@/shared/ui/text-field';
import cn from '@/shared/utils/cn';
import COLORS from '@/shared/utils/colors';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { Control, Controller, FieldErrors, useController } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SajuInfoFormData } from '../model/types';
import ErrorMessage from './error-message';

type BirthtimeFormFieldProps = {
  control: Control<SajuInfoFormData>;
  errors: FieldErrors<SajuInfoFormData>;
};

export default function BirthtimeFormField({ control, errors }: BirthtimeFormFieldProps) {
  const { field: isBirthTimeUnknownField } = useController({ control, name: 'isBirthTimeUnknown' });
  const { field: birthTimeField } = useController({ control, name: 'birthTime' });

  // 시간 입력 포맷팅 함수
  const formatTimeInput = (text: string): string => {
    // 숫자만 추출
    const numbers = text.replace(/[^0-9]/g, '');
    if (!numbers) return '';

    const [hours, minutes] = [numbers.slice(0, 2), numbers.slice(2, 4)].map(Number);

    // 시(HH) 부분만 있는 경우
    if (numbers.length <= 2) {
      return hours > 23 ? '23' : numbers;
    }

    // 시:분(HH:MM) 형식으로 변환 및 유효성 검사
    const validHours = hours > 23 ? '23' : numbers.slice(0, 2);
    const validMinutes = minutes > 59 ? '59' : numbers.slice(2, 4);

    return `${validHours}:${validMinutes}`;
  };

  // 백스페이스 감지 및 처리 함수
  const handleTimeChange = (text: string) => {
    // birthTimeField.value가 없을 경우 대비
    const currentValue = birthTimeField.value || '';

    if (text.length < currentValue.length) {
      // 백스페이스로 문자 삭제 중
      if (currentValue.endsWith(':')) {
        // ':' 앞의 문자 삭제
        return currentValue.slice(0, -1);
      } else if (currentValue.length === 4 && currentValue.includes(':') && text.length === 2) {
        // ':' 뒤의 첫 번째 문자 삭제 시 ':' 함께 삭제
        return text.slice(0, 2);
      }
    } else {
      // 문자 추가 중
      if (text.length === 2 && !text.includes(':')) {
        // 시(HH) 입력 후 자동으로 ':' 추가
        return text + ':';
      }
    }

    return formatTimeInput(text);
  };

  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center pb-[2px]">
          <Text className="text-body1 text-grey-70 font-suit-regular">태어난 시간</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Controller
            control={control}
            name="isBirthTimeUnknown"
            render={({ field: { onChange, value } }) => (
              <View className="p-[3px]">
                <Checkbox
                  value={value}
                  onValueChange={(checked) => {
                    onChange(checked);
                    if (checked) {
                      birthTimeField.onChange('모름');
                    } else {
                      birthTimeField.onChange('');
                    }
                  }}
                  color={value ? COLORS.primary['03'] : undefined}
                  style={{ height: 18, width: 18 }}
                />
              </View>
            )}
          />

          <Text className="text-body1 text-grey-90 font-suit-regular">시간을 몰라요</Text>
        </View>
      </View>
      <View className="gap-1.5">
        <Controller
          control={control}
          name="birthTime"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChangeText={(text) => {
                const formattedTime = handleTimeChange(text);
                onChange(formattedTime);
              }}
              onBlur={onBlur}
              containerClassName={cn({
                'bg-grey-10': isBirthTimeUnknownField.value,
              })}
              className={cn({
                'text-subhead3 font-suit-bold text-primary-03 ': isBirthTimeUnknownField.value,
                'text-body3 font-suit-regular text-grey-90': !isBirthTimeUnknownField.value,
              })}
              editable={!isBirthTimeUnknownField.value}
              placeholder="HH:MM"
              inputMode="numeric"
              maxLength={5}
              error={!!errors.birthTime}
            />
          )}
        />
        {errors.birthTime?.message && <ErrorMessage message={errors.birthTime.message} />}
      </View>
    </View>
  );
}
