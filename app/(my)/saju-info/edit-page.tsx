import { SajuInfoFormData, sajuInfoFormDataSchema } from '@/pages/saju-info-edit/model/types';
import BirthdateFormField from '@/pages/saju-info-edit/ui/birthdate-form-field';
import BirthtimeFormField from '@/pages/saju-info-edit/ui/birthtime-form-field';
import GenderFormField from '@/pages/saju-info-edit/ui/gender-form-field';
import NameFormField from '@/pages/saju-info-edit/ui/name-form-field';
import Header from '@/shared/ui/header';
import cn from '@/shared/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function SajuInfoEditPage() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(sajuInfoFormDataSchema),
    defaultValues: {
      isLunarCalendar: false,
      isBirthTimeUnknown: false,
    },
  });

  // 저장 처리
  const onSubmit = (data: SajuInfoFormData) => {
    // 사주 정보 저장 로직
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1 bg-white">
        <Header title="사주 정보" onBackPress={handleBackPress} />

        <ScrollView className="flex-1">
          <View className="gap-8 px-5 py-3">
            {/* 이름 입력 */}
            <NameFormField control={control} errors={errors} />

            {/* 성별 선택 */}
            <GenderFormField control={control} errors={errors} />

            {/* 생년월일 */}
            <BirthdateFormField control={control} errors={errors} />

            {/* 태어난 시간 */}
            <BirthtimeFormField control={control} errors={errors} />
          </View>
        </ScrollView>

        {/* 저장 버튼 */}
        <View className="px-5 py-3">
          <Pressable
            className={cn(
              'items-center justify-center py-4 rounded-lg bg-grey-70',
              !isValid && 'bg-grey-30'
            )}
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
          >
            <Text className="text-white text-subhead3 font-suit-bold">저장하기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
