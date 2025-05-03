import AppleIcon from '@/assets/svgs/apple.svg';
import KakaoIcon from '@/assets/svgs/kakao.svg';
import { UserResponseDto } from '@/openapi';
import { SocialAccountResponseDtoSocialTypeEnum } from '@/openapi/models/SocialAccountResponseDto';
import cn from '@/shared/utils/cn';
import React from 'react';
import { Text, View } from 'react-native';

type AccountInfoProps = {
  user: UserResponseDto;
};

export default function AccuntInfo({ user }: AccountInfoProps) {
  const isKakaoLogin =
    user.socialAccounts[0].socialType === SocialAccountResponseDtoSocialTypeEnum.KAKAO;
  const isAppleLogin =
    user.socialAccounts[0].socialType === SocialAccountResponseDtoSocialTypeEnum.APPLE;

  return (
    <View className="px-5 py-3">
      <View className="flex-row items-center gap-1 py-3">
        <View className="flex-row items-center gap-2">
          <View
            className={cn(
              'w-8 h-8 rounded-full bg-[#FFE833] justify-center items-center',
              isKakaoLogin && 'bg-[#FFE833]',
              isAppleLogin && 'bg-grey-90'
            )}
          >
            {isKakaoLogin && <KakaoIcon width={20} height={20} />}
            {isAppleLogin && <AppleIcon width={20} height={20} />}
          </View>
          <Text className="font-suit-bold text-subhead3 text-grey-90">
            {isKakaoLogin ? '카카오톡' : 'Apple'}
          </Text>
        </View>
        <Text className="font-suit-regular text-body3 text-grey-60">
          {isKakaoLogin ? '으로 연결됨' : '로 연결됨'}
        </Text>
      </View>
    </View>
  );
}
