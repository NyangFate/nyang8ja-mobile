import { josa } from 'es-hangul';
import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FortuneCard from './fortune-card';

import TextLogo from '@/assets/images/nyang8ja-text-logo.webp';
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

export default function Home() {
  const router = useRouter();
  const { data: user } = useUser();

  const handleProfilePress = () => {
    router.navigate('/(my)/my-page');
  };

  const getDaysSinceJoined = (joinedAt: Date) => {
    return dayjs().diff(dayjs(joinedAt), 'day') + 1;
  };

  const handleFortuneCardPress = (href: string) => {
    // TODO: 실제 적절한 경로로 수정 필요
    // locked, isLoggedIn 조건 추가
    // as Href 제거
    router.navigate(href as Href);
  };

  const getJosa = (word: Parameters<typeof josa>[0], josaType: Parameters<typeof josa>[1]) => {
    const josaResult = josa(word, josaType);
    const lastChar = josaResult[josaResult.length - 1];

    return lastChar;
  };

  return (
    <SafeAreaView className="flex-1 px-5 bg-white">
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

        <View className="gap-4 pb-14">
          <Text className=" text-grey-50 font-suit-bold text-subhead1">콘텐츠</Text>
          <View className="gap-4">
            <FortuneCard
              type="saju"
              locked
              title="오늘 그 사람이 날 생각하고 있을까?"
              onPress={() => handleFortuneCardPress('/love-today')}
            />

            <FortuneCard
              type="saju"
              title="내 팔자에 숨겨진 특별한 연애운이 있을까?"
              onPress={() => handleFortuneCardPress('love-special')}
            />

            <FortuneCard
              type="tarot"
              title="내 팔자에 숨겨진 특별한 연애운이 있을까?"
              onPress={() => handleFortuneCardPress('future-partner')}
            />

            <FortuneCard
              type="saju"
              title="어떻게 하면 경제적으로 안정될 수 있을까?"
              onPress={() => handleFortuneCardPress('wealth')}
            />

            <FortuneCard
              type="tarot"
              title="재물이 들어오는 내 대운 시기는?"
              locked
              onPress={() => handleFortuneCardPress('wealth-timing')}
            />

            <FortuneCard
              type="saju"
              title="20년 뒤, 옆에 누가 있을까?"
              onPress={() => handleFortuneCardPress('future-relation')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
