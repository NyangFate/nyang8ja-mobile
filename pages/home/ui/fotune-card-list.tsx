import { DivinationQuestionResponseDtoTypeEnum } from '@/openapi/models';
import FortuneCard from '@/pages/home/ui/fortune-card';
import useUser from '@/shared/api/useUser';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import useFortuneContentsList from '../api/useFortuneContentsList';

export default function FortuneCardList() {
  const router = useRouter();
  const { data: fortuneContentsList } = useFortuneContentsList();
  const { data: user } = useUser();
  const handleFortuneCardPress = (fortuneId: number, isLoggedIn: boolean) => {
    if (!isLoggedIn) {
      router.navigate('/login-page');
    }

    router.navigate(`/fortune/${fortuneId}`);
  };

  if (!fortuneContentsList) return null;

  return (
    <View className="gap-4">
      <Text className=" text-grey-50 font-suit-bold text-subhead1">콘텐츠</Text>
      <View className="gap-4">
        {fortuneContentsList.results.map((item) => (
          <FortuneCard
            key={item.id}
            type={item.type === DivinationQuestionResponseDtoTypeEnum.SAJU ? 'saju' : 'tarot'}
            title={item.question}
            onPress={() => handleFortuneCardPress(item.id, !!user)}
          />
        ))}
      </View>
    </View>
  );
}
