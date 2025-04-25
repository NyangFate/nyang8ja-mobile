import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Header() {
  const router = useRouter();

  const handleBackPress = () => {
    router.replace('/(my)/my-page');
  };

  return (
    <View className="flex-row justify-between items-center p-[14px]">
      <View className="w-6" />

      <Pressable onPress={handleBackPress}>
        <Text className="text-subhead3 font-suit-bold text-primary-03">나중에 하기</Text>
      </Pressable>
    </View>
  );
}
