import CatImage from '@/assets/images/surprised-cat-with-pacifier-hat.webp';
import { DivinationQuestionResponseDtoCategoryEnum } from '@/openapi/models';
import useUser from '@/shared/api/useUser';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import useFortuneContentsList from '../api/useFortuneContentsList';
import useRecommendedFortune from '../api/useRecommendedFortune';

export default function PopularFortuneCard() {
  const { data: fortuneContentsList } = useFortuneContentsList();
  const { data: recommendedFortune } = useRecommendedFortune();

  console.log('reco', recommendedFortune);
  const loveFortune = fortuneContentsList?.results.find(
    (item) => item.category === DivinationQuestionResponseDtoCategoryEnum.LOVE
  );

  const activeParticipants = loveFortune?.views ?? 0;
  const router = useRouter();
  const { data: user } = useUser();

  const handlePress = (isLoggedIn: boolean) => {
    if (isLoggedIn) {
      router.navigate(`/fortune/${loveFortune?.id}`);
    } else {
      router.navigate('/login-page');
    }
  };

  if (!recommendedFortune) return null;

  return (
    <View className="px-5 pt-4 pb-[18px] bg-grey-00 rounded-[20px] justify-between gap-5">
      <View className="pl-1">
        <View className="gap-[2px]">
          {recommendedFortune.views && recommendedFortune.views > 0 && (
            <Text className="text-primary-03 font-suit-bold text-captionBold">
              {recommendedFortune.views.toLocaleString()}명이 보고 있는 중
            </Text>
          )}
          <Text className="text-grey-90 font-suit-bold text-subhead3">
            {recommendedFortune.question}
          </Text>
        </View>
      </View>

      <Pressable onPress={() => handlePress(!!user)} className="z-10 py-2 bg-white rounded-lg">
        <Text className="text-center text-primary-03 font-suit-bold text-subhead1">보러가기</Text>
      </Pressable>

      <View className="absolute right-0 -bottom-3">
        <Image
          source={CatImage}
          style={{
            width: 192,
            height: 168,
          }}
        />
      </View>
    </View>
  );
}
