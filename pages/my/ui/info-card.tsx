import ChillSwagSunglassesCatImage from '@/assets/images/chill-swag-sunglasses-cat.webp';
import ChevronRightIcon from '@/assets/svgs/chevron-right.svg';
import {
  UserProfileResponseDto,
  UserResponseDto,
  UserResponseDtoUserProfileStatusEnum,
} from '@/openapi/models';
import useUser from '@/shared/api/useUser';
import cn from '@/shared/utils/cn';
import dayjs from '@/shared/utils/dayjs';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function InfoCard() {
  const router = useRouter();
  const { data: user } = useUser();

  const handleNavigate = (user: UserResponseDto | null | undefined) => {
    if (!user) {
      router.navigate('/login-page');
    } else {
      router.navigate('/saju-info/edit-page');
    }
  };

  const getUserDescription = (user: UserResponseDto | null | undefined) => {
    if (!user) {
      return '로그인하고 맞춤 결과를 만나봐요';
    }

    if (user.userProfileStatus === UserResponseDtoUserProfileStatusEnum.COMPLETE && user.profile) {
      return formatSajuInfoDescription(user.profile);
    }

    return '사주 정보를 입력해 주세요';
  };

  const formatSajuInfoDescription = (profile: UserProfileResponseDto) => {
    const gender = profile.gender === 'FEMALE' ? '여' : '남';
    const birthDate = dayjs.tz(profile.birthday, 'Asia/Seoul').format('YYYY. M. D.');
    const separator = ' ・ ';

    let birthTimeInfo = '모름';
    if (profile.birthtime) {
      birthTimeInfo = dayjs.tz(profile.birthtime as Date, 'Asia/Seoul').format('H시 m분');
    }

    return `${gender}${separator}${birthDate}${separator}${birthTimeInfo}`;
  };

  const description = getUserDescription(user);

  return (
    <View className="px-5">
      <Pressable onPress={() => handleNavigate(user)}>
        <View className="flex-row items-center justify-between py-4 pl-5 pr-4 bg-grey-00 rounded-xl">
          <View className="flex-row items-center gap-[10px]">
            {user && (
              <View
                className={cn(
                  'bg-white border rounded-full border-grey-20 px-[6px] py-2 w-[60px] h-[60px] justify-center items-center',
                  {
                    'opacity-35':
                      user.userProfileStatus === UserResponseDtoUserProfileStatusEnum.EMPTY,
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
