import CatImage from '@/assets/images/surprised-cat-with-pacifier-hat.webp';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

export default function PopularFortuneCard() {
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
