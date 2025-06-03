import { DivinationResultResponseDto } from '@/openapi/models';
import useUser from '@/shared/api/useUser';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FortuneCardList from './fortune-card-list';
import FortuneResultCard from './fortune-result-card';
import FortuneResultTitle from './fortune-result-title';
import FortuneSummaryCard from './fortune-summary-card';

export default function FortuneTodayResult() {
  const router = useRouter();
  const { data: user } = useUser();
  const { id, data } = useLocalSearchParams();
  const result = JSON.parse(data as string) as DivinationResultResponseDto;

  if (!user?.name) return null;

  const handleGoHome = () => {
    router.navigate('/');
  };

  // 현재 날짜를 한국어 형식으로 포맷
  const currentDate = new Date();
  const dateString = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* 헤더 섹션 */}
        <View className="flex-1 px-5 pb-16 pt-7">
          <FortuneResultTitle headerText={dateString} titleText={result.title} />
          <View className="gap-3 mt-5">
            <FortuneSummaryCard summary={result.summary} />
            <FortuneResultCard todayResult={result} />
          </View>
        </View>

        <View className="h-[10px] bg-grey-10" />

        <View className="px-5 py-10">
          <FortuneCardList />
        </View>

        <View className="px-5 py-8">
          <Pressable
            className="h-[54px] rounded-lg justify-center items-center bg-grey-70"
            onPress={handleGoHome}
          >
            <Text className="text-white font-suit-bold text-body2">홈으로 돌아가기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
