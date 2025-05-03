import CatImage from '@/assets/images/surprised-cat-with-pacifier-hat.webp';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

type PopularFortuneCardProps = {
  canNavigateToDetails: boolean;
};

export default function PopularFortuneCard({ canNavigateToDetails }: PopularFortuneCardProps) {
  const activeParticipants = 12374;
  const router = useRouter();

  const handlePress = () => {
    if (canNavigateToDetails) {
    } else {
      router.navigate('/login-page');
    }
  };

  return (
    <View className="px-5 pt-4 pb-[18px] bg-grey-00 rounded-[20px] justify-between gap-5">
      <View>
        <View className="gap-[2px]">
          <Text className="text-primary-03 font-suit-bold text-captionBold">
            {activeParticipants.toLocaleString()}명이 보고 있는 중
          </Text>
          <Text className="text-grey-90 font-suit-bold text-subhead3">
            오늘 그 사람이{'\n'}날 생각하고 있을까?
          </Text>
        </View>
      </View>

      <Pressable onPress={handlePress} className="z-10 py-2 bg-white rounded-lg">
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
