import COLORS from '@/shared/utils/colors';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

export default function SajuInfoEditPage() {
  const router = useRouter();

  // 상태 관리
  const [name, setName] = useState('김람지');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [birthDate, setBirthDate] = useState('1997.02.28 (음력)');
  const [isLunarCalendar, setIsLunarCalendar] = useState(true);
  const [birthTime, setBirthTime] = useState('모름');
  const [isTimeUnknown, setIsTimeUnknown] = useState(true);

  // 이름 오류 상태
  const [nameError, setNameError] = useState('');

  // 뒤로가기 처리
  const handleGoBack = () => {
    router.back();
  };

  // 저장 처리
  const handleSave = () => {
    if (name.length < 2) {
      setNameError('2자 이상의 실명을 입력해 주세요');
      return;
    }

    // 사주 정보 저장 로직
    console.log({
      name,
      gender,
      birthDate,
      isLunarCalendar,
      birthTime,
      isTimeUnknown,
    });

    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 헤더 */}
      <View className="flex-row justify-between items-center px-3.5 py-3.5">
        <Pressable onPress={handleGoBack} className="w-6 h-6">
          <View className="items-center justify-center w-6 h-6">
            <Text className="text-2xl text-grey-60">&lt;</Text>
          </View>
        </Pressable>
        <View className="flex-row items-center">
          <Text className="text-subhead3 text-grey-90 font-suit-bold">사주 정보</Text>
        </View>
        <View className="w-6 h-6" />
      </View>

      <ScrollView className="flex-1">
        <View className="flex-col gap-8 px-5 py-3">
          {/* 이름 입력 */}
          <View className="flex-col gap-2">
            <Text className="text-body1 text-grey-70 font-suit-regular">이름</Text>
            <View className="flex-col gap-1.5">
              <TextInput
                className={`bg-grey-00 rounded-lg px-3 py-2 text-body3 font-suit-regular ${
                  nameError ? 'border border-error' : ''
                }`}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (text.length >= 2) {
                    setNameError('');
                  }
                }}
                placeholder="이름을 입력하세요"
              />
              {nameError ? (
                <Text className="text-body1 text-error font-suit-regular">{nameError}</Text>
              ) : null}
            </View>
          </View>

          {/* 성별 선택 */}
          <View className="flex-col gap-2">
            <Text className="text-body1 text-grey-70 font-suit-regular">성별</Text>
            <View className="flex-row gap-3">
              <Pressable
                className={`flex-1 py-3 rounded-lg justify-center items-center ${
                  gender === 'male' ? 'bg-grey-00 border border-grey-20' : 'bg-grey-00'
                }`}
                onPress={() => setGender('male')}
              >
                <Text
                  className={`font-suit-regular text-body3 ${
                    gender === 'male' ? 'text-grey-60' : 'text-grey-60'
                  }`}
                >
                  남자
                </Text>
              </Pressable>
              <Pressable
                className={`flex-1 py-3 rounded-lg justify-center items-center ${
                  gender === 'female' ? 'bg-primary-01 border border-primary-03' : 'bg-grey-00'
                }`}
                onPress={() => setGender('female')}
              >
                <Text
                  className={`font-suit-regular text-body3 ${
                    gender === 'female' ? 'text-primary-03 font-suit-bold' : 'text-grey-60'
                  }`}
                >
                  여자
                </Text>
              </Pressable>
            </View>
          </View>

          {/* 생년월일 */}
          <View className="flex-col gap-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-0.5">
                <Text className="text-body1 text-grey-70 font-suit-regular">생년월일</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Checkbox
                  value={isLunarCalendar}
                  onValueChange={setIsLunarCalendar}
                  color={isLunarCalendar ? COLORS.primary['03'] : undefined}
                  className="w-4 h-4 rounded-full"
                />
                <Text className="text-body1 text-grey-90 font-suit-regular">음력이에요</Text>
              </View>
            </View>
            <TextInput
              className="px-3 py-2 rounded-lg bg-grey-00 text-body3 font-suit-regular"
              value={birthDate}
              onChangeText={setBirthDate}
              placeholder="YYYY.MM.DD"
            />
          </View>

          {/* 태어난 시간 */}
          <View className="flex-col gap-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-0.5">
                <Text className="text-body1 text-grey-70 font-suit-regular">태어난 시간</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Checkbox
                  value={isTimeUnknown}
                  onValueChange={setIsTimeUnknown}
                  color={isTimeUnknown ? COLORS.primary['03'] : undefined}
                  className="w-4 h-4 rounded-full"
                />
                <Text className="text-body1 text-grey-90 font-suit-regular">시간을 몰라요</Text>
              </View>
            </View>
            <TextInput
              className={`px-3 py-2 text-body3 rounded-lg ${
                isTimeUnknown
                  ? 'bg-grey-10 text-primary-03 font-suit-bold'
                  : 'bg-grey-00 font-suit-regular'
              }`}
              value={isTimeUnknown ? '모름' : birthTime}
              onChangeText={setBirthTime}
              editable={!isTimeUnknown}
              placeholder="HH:MM"
            />
          </View>
        </View>
      </ScrollView>

      {/* 저장 버튼 */}
      <View className="px-5 py-3">
        <Pressable
          className="items-center justify-center py-4 rounded-lg bg-grey-70"
          onPress={handleSave}
        >
          <Text className="text-white text-subhead3 font-suit-bold">저장하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
