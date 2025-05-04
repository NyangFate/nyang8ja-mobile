import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import XCircleIcon from '@/assets/svgs/x-circle.svg';
import Header from '@/pages/saju-info-create/ui/header';
import ErrorMessage from '@/pages/saju-info-edit/ui/error-message';
import TextField from '@/shared/ui/text-field';
import cn from '@/shared/utils/cn';
import COLORS from '@/shared/utils/colors';
import { zodResolver } from '@hookform/resolvers/zod';
import Checkbox from 'expo-checkbox';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
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
export default function BirthTimeForm() {
  const { name, gender, birthDate, isLunarCalendar, birthTime, isBirthTimeUnknown } =
    useLocalSearchParams<{
      name: string;
      gender: string;
      birthDate: string;
      isLunarCalendar: string;
      birthTime?: string;
      isBirthTimeUnknown?: string;
    }>();
  const birthTimeSchema = z.object({
    birthTime: z
      .string({
        required_error: '태어난 시간을 입력해 주세요',
      })
      .refine(
        (value) => {
          if (value === '모름') return true;
          const regex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
          return regex.test(value);
        },
        { message: '올바른 시간 형식(HH:MM)을 입력해주세요.' }
      ),
    isBirthTimeUnknown: z.boolean(),
  });

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

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    getValues,
    setValue,
    trigger,
  } = useForm({
    mode: 'all',
    resolver: zodResolver(birthTimeSchema),
    defaultValues: {
      birthTime: birthTime || '',
      isBirthTimeUnknown: isBirthTimeUnknown === 'true' ? true : false,
    },
  });

  // 백스페이스 감지 및 처리 함수
  const handleTimeChange = (text: string) => {
    // birthTimeField.value가 없을 경우 대비
    const currentValue = getValues('birthTime') || '';

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

  const onSubmit = (data: z.infer<typeof birthTimeSchema>) => {
    router.push({
      pathname: '/(my)/saju-info/(create)/confirm-page',
      params: {
        name: name,
        gender: gender,
        birthDate: birthDate,
        isLunarCalendar: isLunarCalendar,
        birthTime: data.birthTime,
        isBirthTimeUnknown: data.isBirthTimeUnknown ? 'true' : 'false',
      },
    });
  };

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
                태어난 시간도 궁금해.
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2 mt-3">
              <Text className="text-headline1 font-suit-bold text-grey-90">내가 태어난 시간은</Text>
              <Controller
                control={control}
                name="birthTime"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    error={!!errors.birthTime?.message}
                    value={value}
                    onChangeText={(text) => {
                      const formattedTime = handleTimeChange(text);
                      onChange(formattedTime);
                    }}
                    placeholder="HH:MM"
                    onBlur={onBlur}
                    inputMode="numeric"
                    maxLength={5}
                    containerClassName={cn({
                      'bg-grey-10': getValues('isBirthTimeUnknown'),
                    })}
                    className={cn('min-w-20', {
                      'text-subhead3 font-suit-bold text-primary-03':
                        getValues('isBirthTimeUnknown'),
                      'text-body3 font-suit-regular text-grey-90': !getValues('isBirthTimeUnknown'),
                    })}
                    editable={!getValues('isBirthTimeUnknown')}
                  />
                )}
              />
              <Text className="text-headline1 font-suit-bold text-grey-90">이야</Text>
            </View>
          </View>
          <View
            className="flex-row items-center justify-center"
            style={{
              marginBottom: 16,
            }}
          >
            <Controller
              control={control}
              name="isBirthTimeUnknown"
              render={({ field: { onChange, value } }) => (
                <Pressable
                  className="flex-row items-center justify-center gap-1"
                  onPress={() => {
                    onChange(!value);
                    if (!value) {
                      setValue('birthTime', '모름');
                      trigger('birthTime');
                    } else {
                      setValue('birthTime', '');
                      trigger('birthTime');
                    }
                  }}
                >
                  <Checkbox
                    value={value}
                    onValueChange={(checked) => {
                      onChange(checked);
                      if (checked) {
                        setValue('birthTime', '모름');
                      } else {
                        setValue('birthTime', '');
                      }
                    }}
                    color={value ? COLORS.primary['03'] : undefined}
                    style={{ height: 18, width: 18 }}
                  />
                  <Text className=" text-body-3 font-suit-regular text-grey-60">
                    태어난 시간을 몰라요
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </KeyboardAvoidingView>
        <View className="gap-4 p-5">
          {errors.birthTime?.message && (
            <View className="flex-row items-center justify-center gap-1">
              <XCircleIcon width={24} height={24} />
              <ErrorMessage message={errors.birthTime.message} />
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
