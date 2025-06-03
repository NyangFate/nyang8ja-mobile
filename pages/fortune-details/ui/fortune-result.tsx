import { DivinationSalResultResponseDto } from '@/openapi/models';
import useUser from '@/shared/api/useUser';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFortuneDetails from '../api/useFortuneDetails';
import { convertCategoryToKorean } from '../utils/categoryConverter';
import FortuneCardList from './fortune-card-list';
import FortuneResultCard from './fortune-result-card';
import FortuneResultTitle from './fortune-result-title';
import FortuneSummaryCard from './fortune-summary-card';

export default function FortuneResult() {
  const router = useRouter();
  const { data: user } = useUser();
  const { id, data } = useLocalSearchParams();
  const { data: fortuneDetails } = useFortuneDetails(Number(id));
  const result = JSON.parse(data as string) as DivinationSalResultResponseDto;

  if (!fortuneDetails) return null;

  const categoryInKorean = convertCategoryToKorean(fortuneDetails.category);
  const handleGoHome = () => {
    router.navigate('/');
  };

  if (!user?.name) return null;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-1 px-5 pb-16 pt-7">
          <FortuneResultTitle headerText={''} titleText={result.title} />
          <View className="gap-3 mt-5">
            <FortuneSummaryCard summary={result.summary} />
            <FortuneResultCard result={result} />
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
