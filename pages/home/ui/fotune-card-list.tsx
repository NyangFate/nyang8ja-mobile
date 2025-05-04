import FortuneCard from '@/pages/home/ui/fortune-card';
import { Href, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function FortuneCardList() {
  const router = useRouter();
  const handleFortuneCardPress = (href: string) => {
    // TODO: 실제 적절한 경로로 수정 필요
    // locked, isLoggedIn 조건 추가
    // as Href 제거
    router.navigate(href as Href);
  };
  return (
    <View className="gap-4">
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
  );
}
