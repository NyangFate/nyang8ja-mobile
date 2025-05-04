import useUser from '@/shared/api/useUser';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FortuneCardList from './fortune-card-list';
import FortuneResultCard from './fortune-result-card';
import FortuneResultTitle from './fortune-result-title';
import FortuneSummaryCard from './fortune-summary-card';

// 홈 버튼 컴포넌트
type HomeButtonProps = {
  onPress: () => void;
};

function HomeButton({ onPress }: HomeButtonProps) {
  return (
    <View className="items-center py-6">
      <Pressable onPress={onPress} className="px-6 py-3 rounded-lg bg-primary-03">
        <Text className="text-base text-white font-suit-bold">홈으로 돌아가기</Text>
      </Pressable>
    </View>
  );
}

export default function NewYearFortuneResult() {
  const router = useRouter();
  const { data: user } = useUser();

  const handleGoHome = () => {
    router.dismissTo('/');
  };

  if (!user?.profile?.name) return null;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-1 px-5 pb-16 pt-7">
          <FortuneResultTitle
            headerText="2025년, 나한테 어떤 해가 될까?"
            titleText={`올해 ${user.profile.name}의 총운은 꽤\n괜찮은 편이야`}
          />
          <View className="gap-3 mt-5">
            <FortuneSummaryCard userName={user.profile.name} />
            <FortuneResultCard />
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
