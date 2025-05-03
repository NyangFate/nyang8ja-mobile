import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// SVG 아이콘 임포트 (실제 경로는 프로젝트에 맞게 조정 필요)
import TextLogo from '@/assets/images/nyang8ja-text-logo.webp';
import CatImage from '@/assets/images/surprised-cat-with-pacifier-hat.webp';
import ArrowRightIcon from '@/assets/svgs/chevron-right.svg';
import LockIcon from '@/assets/svgs/lock-off.svg';
import ProfileIcon from '@/assets/svgs/profile-circle.svg';

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
            <Image source={TextLogo} className="w-10 h-10" />
          </View>
        )}
        {locked ? (
          <View className="flex-row items-center gap-2">
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

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
}

function FeaturedCard({ title, subtitle, buttonText, onPress }: FeaturedCardProps) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-grey-00 rounded-2xl">
      <View className="flex-1">
        <Text className="mb-1 text-grey-50 font-suit-bold text-caption">{subtitle}</Text>
        <Text className="text-grey-90 font-suit-bold text-subhead3">{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <ArrowRightIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
}

function PopularFortuneCard() {
  return (
    <View className="p-4 bg-grey-00 rounded-2xl">
      <View className="flex-row justify-between mb-2">
        <View>
          <Text className="text-primary-03 font-suit-bold text-caption">
            12,374명이 보고 있는 중
          </Text>
          <Text className="mt-1 text-grey-90 font-suit-bold text-subhead3">
            오늘 그 사람이{'\n'}날 생각하고 있을까?
          </Text>
        </View>
        <View className="items-center justify-center w-16 h-16">
          <Image source={CatImage} className="w-16 h-16" />
        </View>
      </View>
      <TouchableOpacity className="py-2 mt-2 bg-white rounded-lg">
        <Text className="text-center text-primary-03 font-suit-bold">보러가기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Home() {
  const router = useRouter();
  const daysSinceJoined = 42; // 실제 앱에서는 이 값을 계산하거나 API에서 가져와야 함

  const handleProfilePress = () => {
    // 실제 앱의 마이페이지 경로를 사용
    router.navigate('/my-page' as Href);
  };

  // 실제 앱의 경로 구조에 맞게 수정해야 합니다
  const handleFortuneCardPress = (type: string) => {
    // 실제 적절한 경로로 수정 필요
    router.navigate(`/fortune/${type}-page` as Href);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 헤더 */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <View className="flex-row items-center gap-2">
          <Image source={TextLogo} className="w-10 h-10" />
        </View>
        <TouchableOpacity onPress={handleProfilePress}>
          <ProfileIcon width={32} height={32} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* 콘텐츠 */}
        <Text className="mt-4 text-grey-50 font-suit-bold text-subhead1">콘텐츠</Text>
        <Text className="mt-1 text-grey-80 font-suit-bold text-subhead3">
          김팔자가 냥팔자와 함께한지
        </Text>
        <Text className="text-primary-03 font-suit-bold text-subhead3">{daysSinceJoined}일</Text>

        {/* 오늘의 운세 카드 */}
        <View className="mt-4">
          <FeaturedCard
            subtitle="냥도사가 봐주는"
            title="오늘의 운세 보러가기"
            buttonText="보러가기"
            onPress={() => handleFortuneCardPress('today')}
          />
        </View>

        {/* 운세 카드 그리드 */}
        <View className="gap-4 mt-6">
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

        {/* 인기 운세 카드 */}
        <View className="my-6">
          <PopularFortuneCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
