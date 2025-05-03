import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import XCircleIcon from '@/assets/svgs/x-circle.svg';
import Header from '@/pages/saju-info-create/ui/header';
import ErrorMessage from '@/pages/saju-info-edit/ui/error-message';
import TextField from '@/shared/ui/text-field';
import cn from '@/shared/utils/cn';
import COLORS from '@/shared/utils/colors';
import { useKeyboard } from '@/shared/utils/useKeyboard';
import { zodResolver } from '@hookform/resolvers/zod';
import Checkbox from 'expo-checkbox';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { z } from 'zod';
export default function BirthDateForm() {
  const { name, gender, birthDate, isLunarCalendar, birthTime, isBirthTimeUnknown } =
    useLocalSearchParams<{
      name: string;
      gender: string;
      birthDate?: string;
      isLunarCalendar?: string;
      birthTime?: string;
      isBirthTimeUnknown?: string;
    }>();
  const birthDateSchema = z.object({
    birthDate: z
      .string({
        required_error: '생년월일을 입력해 주세요',
      }) // YYYY.MM.DD 형식 검사 (정규식)
      .regex(/^\d{4}\.\d{2}\.\d{2}$/, { message: '날짜는 YYYY.MM.DD 형식으로 입력해주세요' })
      .transform((val) => {
        // YYYY.MM.DD -> YYYY-MM-DD 로 변환 (Zod date() 메서드를 위함)
        return val.replace(/\./g, '-');
      })
      // date() 메서드는 YYYY-MM-DD 형식을 검증하고 유효한 날짜인지 확인
      .pipe(z.string().date('유효하지 않은 날짜입니다'))
      // 추가로 연도 범위 체크
      .refine(
        (dateStr) => {
          const date = new Date(dateStr);
          const year = date.getFullYear();

          // 연도 범위 체크 (1900년부터 현재 연도까지)
          const currentYear = new Date().getFullYear();
          return year >= 1900 && year <= currentYear;
        },
        { message: '1900년부터 현재까지의 날짜만 입력 가능합니다' }
      ),
    isLunarCalendar: z.boolean(),
  });

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

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(birthDateSchema),
    defaultValues: {
      birthDate: birthDate?.split('-').join('.') || '',
      isLunarCalendar: isLunarCalendar === 'true' ? true : false,
    },
  });
  const onSubmit = (data: z.infer<typeof birthDateSchema>) => {
    router.push({
      pathname: '/(my)/saju-info/(create)/birthtime-input-page',
      params: {
        name: name,
        isLunarCalendar: data.isLunarCalendar ? 'true' : 'false',
        gender: gender,
        birthDate: data.birthDate,
        birthTime: birthTime,
        isBirthTimeUnknown: isBirthTimeUnknown,
      },
    });
  };
  const { keyboardShown } = useKeyboard();

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-white">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          className="flex-1"
        >
          <Header />
          <View className="items-center justify-center flex-1">
            <View className="items-center justify-center">
              <Image source={SurprisedCatWithPacifierImage} style={{ width: 180, height: 180 }} />
            </View>
            <View className="mt-5">
              <Text className="text-center text-body3 font-suit-regular text-grey-70">
                생년월일도 알려줘.
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2 mt-3">
              <Text className="text-headline1 font-suit-bold text-grey-90">내 생년월일은</Text>
              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    error={!!errors.birthDate?.message}
                    className="min-w-[112px] leading-[20px]"
                    value={value}
                    onChangeText={(text) => {
                      const formattedDate = formatDate(text, prevInputRef.current);
                      onChange(formattedDate);
                    }}
                    placeholder="YYYY.MM.DD"
                    onBlur={onBlur}
                    inputMode="numeric"
                    maxLength={10}
                  />
                )}
              />
              <Text className="text-headline1 font-suit-bold text-grey-90">이야</Text>
            </View>
          </View>
          <View
            className="flex-row items-center justify-center"
            style={{
              marginBottom: keyboardShown ? 16 : 0,
            }}
          >
            <Controller
              control={control}
              name="isLunarCalendar"
              render={({ field: { onChange, value } }) => (
                <Pressable
                  onPress={() => onChange(!value)}
                  className="flex-row items-center justify-center gap-1"
                >
                  <Checkbox
                    value={value}
                    onValueChange={onChange}
                    color={value ? COLORS.primary['03'] : undefined}
                  />
                  <Text className="text-body-3 font-suit-regular text-grey-60">음력이에요</Text>
                </Pressable>
              )}
            />
          </View>
        </KeyboardAvoidingView>
        <View className="gap-4 p-5">
          {errors.birthDate?.message && (
            <View className="flex-row items-center justify-center gap-1">
              <XCircleIcon width={24} height={24} />
              <ErrorMessage message={errors.birthDate.message} />
            </View>
          )}
          <Pressable
            className={cn(
              'bg-grey-90 h-[54px] rounded-lg justify-center items-center',
              !isValid && 'bg-grey-30 text-grey-10'
            )}
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
          >
            <Text className="text-white text-subhead3 font-suit-bold">다음</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}
