import { DivinationQuestionResponseDtoTypeEnum } from '@/openapi/models';
import FortuneCard from '@/pages/fortune-details/ui/fortune-card';
import useFortuneContentsList from '@/pages/home/api/useFortuneContentsList';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function FortuneCardList() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data: fortuneContentsList } = useFortuneContentsList();
  const handleFortuneCardPress = (id: number) => {
    // TODO: 실제 적절한 경로로 수정 필요
    // locked, isLoggedIn 조건 추가
    // as Href 제거
    router.navigate(`/fortune/${id}`);
  };

  if (!fortuneContentsList) return null;

  return (
    <View className="gap-4">
      <Text className=" text-grey-50 font-suit-bold text-subhead1">콘텐츠</Text>
      <View className="gap-4">
        {fortuneContentsList.results
          .filter((item) => item.id !== Number(id))
          .map((item) => (
            <FortuneCard
              key={item.id}
              type={item.type === DivinationQuestionResponseDtoTypeEnum.SAJU ? 'saju' : 'tarot'}
              title={item.question}
              onPress={() => handleFortuneCardPress(item.id)}
            />
          ))}
      </View>
    </View>
  );
}
