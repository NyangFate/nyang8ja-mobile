import {
  UserProfileResponseDtoBirthTypeEnum,
  UserProfileResponseDtoGenderEnum,
  UserUpdateRequestDtoBirthTypeEnum,
  UserUpdateRequestDtoGenderEnum,
} from '@/openapi/models';
import { SajuInfoFormData, sajuInfoFormDataSchema } from '@/pages/saju-info-edit/model/types';
import BirthdateFormField from '@/pages/saju-info-edit/ui/birthdate-form-field';
import BirthtimeFormField from '@/pages/saju-info-edit/ui/birthtime-form-field';
import GenderFormField from '@/pages/saju-info-edit/ui/gender-form-field';
import NameFormField from '@/pages/saju-info-edit/ui/name-form-field';
import { useUpdateUser } from '@/shared/api/useUpdateUser';
import useUser from '@/shared/api/useUser';
import Header from '@/shared/ui/header';
import cn from '@/shared/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
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
import Toast from 'react-native-toast-message';

export default function SajuInfoEdit() {
  const router = useRouter();
  const { data: user } = useUser();
  const { mutate: updateUser } = useUpdateUser();
  const handleBackPress = () => {
    router.back();
  };

  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SajuInfoFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(sajuInfoFormDataSchema),
    values: {
      name: user?.name ?? '',
      gender: (user?.profile?.gender === UserProfileResponseDtoGenderEnum.MALE
        ? 'male'
        : 'female') as 'male' | 'female',
      birthDate: (user?.profile?.birthday as unknown as string)?.split('-').join('.') || '',
      birthTime: (user?.profile?.birthtime as unknown as string) || '',
      isLunarCalendar: user?.profile?.birthType === UserProfileResponseDtoBirthTypeEnum.LUNAR,
      isBirthTimeUnknown: !user?.profile?.birthtime,
    },
  });

  // 저장 처리
  const onSubmit = async (data: SajuInfoFormData) => {
    // 사주 정보 저장 로직
    updateUser(
      {
        userUpdateRequestDto: {
          name: data.name,
          gender:
            data.gender === 'male'
              ? UserUpdateRequestDtoGenderEnum.MALE
              : UserUpdateRequestDtoGenderEnum.FEMALE,
          birthday: data.birthDate as unknown as Date,
          birthtime: data.birthTime === '모름' ? undefined : (data.birthTime as unknown as Date),
          birthType: data.isLunarCalendar
            ? UserUpdateRequestDtoBirthTypeEnum.LUNAR
            : UserUpdateRequestDtoBirthTypeEnum.SOLAR,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
          router.back();

          Toast.show({
            text1: '사주 정보가 저장되었습니다.',
          });
        },
      }
    );
  };

  if (!user) return null;

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
