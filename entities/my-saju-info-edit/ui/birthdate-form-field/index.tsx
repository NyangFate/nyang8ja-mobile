import { SajuInfoFormData } from '@/entities/my-saju-info-edit/model/types';
import TextField from '@/shared/ui/text-field';
import COLORS from '@/shared/utils/colors';
import Checkbox from 'expo-checkbox';
import React, { useRef } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Text, View } from 'react-native';
import ErrorMessage from '../error-message';

type BirthdateFormFieldProps = {
  control: Control<SajuInfoFormData>;
  errors: FieldErrors<SajuInfoFormData>;
};

export default function BirthdateFormField({ control, errors }: BirthdateFormFieldProps) {
  const prevInputRef = useRef<string>('');

  // 날짜 입력값 포맷팅 - 지우기 기능과 마침표 자동 추가
  const formatDate = (input: string, prevInput: string) => {
    // 지우기 동작 감지 (이전 입력값보다 현재 입력값이 짧음)
    if (input.length < prevInput.length) {
      // 마침표가 마지막에 있는 경우 (예: "1999." -> 백스페이스 -> "1999")
      if (prevInput.endsWith('.')) {
        // 마침표를 지우고, 숫자 하나도 지움
        const withoutDot = prevInput.slice(0, -1); // 마침표 제거
        const withoutLastChar = withoutDot.slice(0, -1); // 마지막 숫자 제거
        prevInputRef.current = withoutLastChar;
        return withoutLastChar;
      }

      // 현재 입력 값이 마침표로 끝나는 경우 처리 (예: "1999.0" -> 백스페이스 -> "1999.")
      if (input.endsWith('.')) {
        // 마침표로 끝나면 마침표도 함께 지움
        const withoutDot = input.slice(0, -1);
        prevInputRef.current = withoutDot;
        return withoutDot;
      }

      // 이전 값과 현재 값의 마침표 개수가 다른 경우 (마침표 앞의 숫자를 지웠을 때)
      const prevDots = (prevInput.match(/\./g) || []).length;
      const currDots = (input.match(/\./g) || []).length;

      if (prevDots > currDots) {
        // 마침표가 사라진 경우, 마침표 위치 기준으로 이전 문자까지 포함해서 지움
        // 예: "1999.0" 에서 "0"을 지우려고 할 때 -> "1999"
        const lastDotIndex = prevInput.lastIndexOf('.');
        if (lastDotIndex !== -1 && lastDotIndex === input.length) {
          const beforeLastDot = prevInput.slice(0, lastDotIndex - 1);
          prevInputRef.current = beforeLastDot;
          return beforeLastDot;
        }
      }

      // 일반적인 지우기 - 현재 입력값 그대로 사용
      prevInputRef.current = input;
      return input;
    }

    // 추가 동작 - 숫자만 허용
    const cleaned = input.replace(/[^\d]/g, '');

    // YYYY.MM.DD 형식으로 자동 포맷팅
    let formatted = cleaned;

    // 4자리 입력했을 때 년도 뒤에 마침표 자동 추가
    if (cleaned.length >= 4) {
      formatted = cleaned.slice(0, 4);

      // 4자리 정확히 입력했을 때 마침표 추가
      if (cleaned.length === 4) {
        formatted += '.';
      }
      // 4자리 이상 입력했을 때
      else if (cleaned.length > 4) {
        formatted += '.';

        // 월 부분 추가 (최대 2자리)
        const monthPart = cleaned.slice(4, Math.min(6, cleaned.length));
        formatted += monthPart;

        // 6자리 정확히 입력했을 때 (월까지 입력) 두 번째 마침표 자동 추가
        if (cleaned.length === 6) {
          formatted += '.';
        }
        // 6자리 이상 입력했을 때
        else if (cleaned.length > 6) {
          formatted += '.';

          // 일 부분 추가 (최대 2자리)
          const dayPart = cleaned.slice(6, Math.min(8, cleaned.length));
          formatted += dayPart;
        }
      }
    }

    prevInputRef.current = formatted;
    return formatted;
  };

  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center pb-[2px]">
          <Text className="text-body1 text-grey-70 font-suit-regular">생년월일</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Controller
            control={control}
            name="isLunarCalendar"
            render={({ field: { onChange, value } }) => (
              <View className="p-[3px]">
                <Checkbox
                  value={value}
                  onValueChange={onChange}
                  color={value ? COLORS.primary['03'] : undefined}
                  style={{ height: 18, width: 18 }}
                />
              </View>
            )}
          />
          <Text className="self-start text-body1 text-grey-90 font-suit-regular">음력이에요</Text>
        </View>
      </View>
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            value={value}
            onChangeText={(text) => {
              const formattedDate = formatDate(text, prevInputRef.current);
              onChange(formattedDate);
            }}
            onBlur={onBlur}
            placeholder="YYYY.MM.DD"
            error={!!errors.birthDate}
            inputMode="numeric"
            maxLength={10} // YYYY.MM.DD 형식이므로 최대 10자
          />
        )}
      />
      {errors.birthDate?.message && <ErrorMessage message={errors.birthDate.message} />}
    </View>
  );
}
