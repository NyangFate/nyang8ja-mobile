import { josa } from 'es-hangul';
import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TextLogo from '@/assets/images/nyang8ja-text-logo.webp';
import ArrowRightIcon from '@/assets/svgs/chevron-right.svg';
import LockIcon from '@/assets/svgs/lock-off.svg';
import ProfileIcon from '@/assets/svgs/profile-circle.svg';
import useUser from '@/shared/api/useUser';
import dayjs from 'dayjs';
import PopularFortuneCard from './popular-fortune-card';
import TodayFortuneCard from './today-fortune-card';

interface FortuneCardProps {
  title: string;
  icon?: React.ReactNode;
  locked?: boolean;
  onPress: () => void;
}

function FortuneCard({ title, icon, locked, onPress }: FortuneCardProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between p-4 bg-white shadow-sm rounded-2xl"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-3">
        {icon || (
          <View className="items-center justify-center w-10 h-10 rounded-full bg-primary-03">
            <Image source={TextLogo} style={{ width: 63, height: 21 }} />
          </View>
        )}
        {locked ? (
          <View className="flex-row items-center gap-2 ">
            <LockIcon width={20} height={20} />
            <Text className="text-grey-90 font-suit-bold text-subhead3">{title}</Text>
          </View>
        ) : (
          <Text className="text-grey-90 font-suit-bold text-subhead3">{title}</Text>
        )}
      </View>
      <ArrowRightIcon width={24} height={24} />
    </TouchableOpacity>
  );
}

export default function Home() {
  const router = useRouter();
  const { data: user } = useUser();

  const handleProfilePress = () => {
    router.navigate('/(my)/my-page');
  };

  const getDaysSinceJoined = (joinedAt: Date) => {
    return dayjs().diff(dayjs(joinedAt), 'day') + 1;
  };

  // 실제 앱의 경로 구조에 맞게 수정해야 합니다
  const handleFortuneCardPress = (type: string) => {
    // 실제 적절한 경로로 수정 필요
    router.navigate(`/fortune/${type}-page` as Href);
  };

  const getJosa = (word: Parameters<typeof josa>[0], josaType: Parameters<typeof josa>[1]) => {
    const josaResult = josa(word, josaType);
    const lastChar = josaResult[josaResult.length - 1];

    return lastChar;
  };

  return (
    <SafeAreaView className="flex-1 px-5 bg-white">
      {/* 헤더 */}
      <View className="flex-row items-center justify-between py-4">
        <Image source={TextLogo} style={{ width: 63, height: 21 }} />
        <Pressable onPress={handleProfilePress} className="py-2 pl-2">
          <ProfileIcon width={24} height={24} />
        </Pressable>
      </View>

      <ScrollView className="flex-1">
        {user?.profile?.name && (
          <View className="flex-row items-center justify-between mt-6">
            <Text>
              <Text className="text-subhead3 font-suit-bold text-grey-80">{user.profile.name}</Text>
              <Text className=" text-grey-80 font-suit-regular text-body3">{`${getJosa(user.profile.name, '이/가')} 냥팔자와 함께한지`}</Text>
            </Text>
            <Text className="text-primary-03 font-suit-bold text-subhead3">
              {getDaysSinceJoined(user.socialAccounts[0].updatedAt)}일
            </Text>
          </View>
        )}
        <View className="gap-3 my-7">
          <PopularFortuneCard />
          <TodayFortuneCard />
        </View>

        <Text className=" text-grey-50 font-suit-bold text-subhead1">콘텐츠</Text>
        <View className="gap-4 mt-6 pb-14">
          <FortuneCard
            title="오늘 그 사람이 날 생각하고 있을까?"
            onPress={() => handleFortuneCardPress('love-today')}
          />

          <FortuneCard
            title="내 팔자에 숨겨진 특별한 연애운이 있을까?"
            onPress={() => handleFortuneCardPress('love-special')}
          />

          <FortuneCard
            title="20년 뒤, 옆에 누가 있을까?"
            locked
            onPress={() => handleFortuneCardPress('future-partner')}
          />

          <FortuneCard
            title="어떻게 하면 경제적으로 안정될 수 있을까?"
            onPress={() => handleFortuneCardPress('wealth')}
          />

          <FortuneCard
            title="재물이 들어오는 내 대운 시기는?"
            locked
            onPress={() => handleFortuneCardPress('wealth-timing')}
          />

          <FortuneCard
            title="20년 뒤, 옆에 누가 있을까?"
            locked
            onPress={() => handleFortuneCardPress('future-relation')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
