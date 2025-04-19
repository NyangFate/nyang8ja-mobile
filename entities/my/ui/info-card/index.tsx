import ChillSwagSunglassesCatImage from '@/assets/images/chill-swag-sunglasses-cat.webp';
import ChevronRightIcon from '@/assets/svgs/chevron-right.svg';
import cn from '@/shared/utils/cn';
import dayjs from '@/shared/utils/dayjs';
import { fakerKO as faker } from '@faker-js/faker';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SajuInfo, User } from '../../model/types';

export default function InfoCard() {
  const router = useRouter();

  const user: User = {
    name: faker.person.fullName(),
    joinedAt: faker.date.past().toISOString(),
    signInMethod: 'kakao',
    sajuInfo: {
      gender: 'male',
      birthDate: faker.date.past().toISOString(),
      isBirthTimeKnown: false,
    },
  };

  const handleNavigation = () => {
    if (!user) {
      router.navigate('/login-page');
    } else if (user.sajuInfo) {
      router.navigate('/saju-info/edit-page');
    } else {
      router.navigate('/saju-info/create-page');
    }
  };

  const getUserDescription = () => {
    if (!user) {
      return '로그인하고 맞춤 결과를 만나봐요';
    }

    if (user.sajuInfo) {
      return formatSajuInfoDescription(user.sajuInfo);
    }

    return '사주 정보를 입력해 주세요';
  };

  const formatSajuInfoDescription = (sajuInfo: SajuInfo) => {
    const gender = sajuInfo.gender === 'female' ? '여' : '남';
    const birthDate = dayjs.tz(sajuInfo.birthDate, 'Asia/Seoul').format('YYYY.MM.DD');
    const separator = ' ・ ';

    let birthTimeInfo = '모름';
    if (sajuInfo.isBirthTimeKnown) {
      birthTimeInfo = dayjs.tz(sajuInfo.birthDate, 'Asia/Seoul').format('HH시 mm분');
    }

    return `${gender}${separator}${birthDate}${separator}${birthTimeInfo}`;
  };

  const description = getUserDescription();

  return (
    <View className="px-5">
      <Pressable onPress={handleNavigation}>
        <View className="flex-row items-center justify-between py-4 pl-5 pr-4 bg-grey-00 rounded-xl">
          <View className="flex-row items-center gap-[10px]">
            {user && (
              <View
                className={cn(
                  'bg-white border rounded-full border-grey-20 px-[6px] py-2 w-[60px] h-[60px] justify-center items-center',
                  {
                    'opacity-35': !user.sajuInfo,
                  }
                )}
              >
                <Image source={ChillSwagSunglassesCatImage} style={{ width: 50, height: 44 }} />
              </View>
            )}
            <View className="gap-[2px]">
              <Text className="text-headline1 text-grey-90 font-suit-bold">
                {user ? user.name : '로그인하기'}
              </Text>
              <Text className="text-body1 font-suit-regular text-grey-70">{description}</Text>
            </View>
          </View>

          <ChevronRightIcon width={24} height={24} />
        </View>
      </Pressable>
    </View>
  );
}
