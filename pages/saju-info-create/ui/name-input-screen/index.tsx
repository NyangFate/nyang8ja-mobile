import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import XCircleIcon from '@/assets/svgs/x-circle.svg';
import Header from '@/pages/saju-info-create/ui/header';
import ErrorMessage from '@/pages/saju-info-edit/ui/error-message';
import TextField from '@/shared/ui/text-field';
import cn from '@/shared/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
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
export default function NameInputScreen() {
  const { name, gender, birthDate, isLunarCalendar, birthTime, isBirthTimeUnknown } =
    useLocalSearchParams<{
      name?: string;
      gender?: string;
      birthDate?: string;
      isLunarCalendar?: string;
      birthTime?: string;
      isBirthTimeUnknown?: string;
    }>();

  const nameSchema = z.object({
    name: z.string().min(2, { message: '2자 이상의 실명을 입력해 주세요' }).max(6, {
      message: '6자 이하로 입력해 주세요',
    }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: name || '',
    },
  });

  const onSubmit = (data: z.infer<typeof nameSchema>) => {
    router.push({
      pathname: '/(my)/saju-info/(create)/gender-select-page',
      params: {
        name: data.name,
        gender,
        birthDate,
        isLunarCalendar,
        birthTime,
        isBirthTimeUnknown,
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
                집사의 이름을 알고 싶어.
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2 mt-3">
              <Text className="text-headline1 font-suit-bold text-grey-90">내 이름은</Text>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    error={!!errors.name?.message}
                    className="leading-[20px] min-w-24"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    inputMode="text"
                    maxLength={6}
                  />
                )}
              />
              <Text className="text-headline1 font-suit-bold text-grey-90">이야</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View className="gap-4 p-5">
          {errors.name?.message && (
            <View className="flex-row items-center justify-center gap-1">
              <XCircleIcon width={24} height={24} />
              <ErrorMessage message={errors.name.message} />
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
