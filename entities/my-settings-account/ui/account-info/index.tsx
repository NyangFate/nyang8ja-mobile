import AppleIcon from '@/assets/svgs/apple.svg';
import KakaoIcon from '@/assets/svgs/kakao.svg';
import { User } from '@/entities/my/model/types';
import cn from '@/shared/utils/cn';
import React from 'react';
import { Text, View } from 'react-native';

type AccountInfoProps = {
  user: User;
};

export default function AccuntInfo({ user }: AccountInfoProps) {
  return (
    <View className="px-5 py-3">
      <View className="flex-row items-center gap-1 py-3">
        <View className="flex-row items-center gap-2">
          <View
            className={cn(
              'w-8 h-8 rounded-full bg-[#FFE833] justify-center items-center',
              user.signInMethod === 'kakao' && 'bg-[#FFE833]',
              user.signInMethod === 'apple' && 'bg-grey-90'
            )}
          >
            {user.signInMethod === 'kakao' && <KakaoIcon width={20} height={20} />}
            {user.signInMethod === 'apple' && <AppleIcon width={20} height={20} />}
          </View>
          <Text className="font-suit-bold text-subhead3 text-grey-90">
            {user.signInMethod === 'kakao' ? '카카오톡' : 'Apple'}
          </Text>
        </View>
        <Text className="font-suit-regular text-body3 text-grey-60">
          {user.signInMethod === 'kakao' ? '으로 연결됨' : '로 연결됨'}
        </Text>
      </View>
    </View>
  );
}
