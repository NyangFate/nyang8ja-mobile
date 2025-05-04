import useUser from '@/shared/api/useUser';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FortuneContentProps = {
  title: string;
  text: string;
};

function FortuneContent({ title, text }: FortuneContentProps) {
  return (
    <View className="flex flex-col items-center w-full gap-1">
      <Text className="text-base font-suit-bold text-grey-90">{title}</Text>
      <Text className="text-sm text-center font-suit-regular text-grey-60">{text}</Text>
    </View>
  );
}

type FortuneCardProps = {
  text: string;
  isLocked?: boolean;
  onPress: () => void;
};

function FortuneCard({ text, isLocked = false, onPress }: FortuneCardProps) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        {isLocked && (
          <View className="items-center justify-center w-6 h-6">
            <Text className="text-grey-40">🔒</Text>
          </View>
        )}
        <Text className="text-base font-suit-bold text-grey-90">{text}</Text>
      </View>
      <Pressable onPress={onPress}>
        <Text className="text-grey-40">›</Text>
      </Pressable>
    </View>
  );
}

export default function NewYearFortuneResult() {
  const router = useRouter();
  const { data: user } = useUser();

  const handleGoHome = () => {
    router.replace('/');
  };

  if (!user?.profile?.name) return null;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className="font-suit-bold text-headline2 text-grey-90">
            올해 {user.profile.name}의 총운은 꽤 괜찮은 편이야
          </Text>
          <Text className="mt-2 text-sm font-suit-bold text-grey-50">
            2025년, 나한테 어떤 해가 될까?
          </Text>
        </View>

        <View className="mx-5">
          <Text className="text-sm font-suit-bold text-grey-80">
            지금 인기 있는 무료 사주 더보기
          </Text>

          <View className="mt-4 space-y-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-sm bg-primary-02" />
                <Text className="text-base font-suit-bold text-grey-90">
                  오늘 그 사람이 날 생각하고 있을까?
                </Text>
              </View>
              <Pressable>
                <Text className="text-grey-40">›</Text>
              </Pressable>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-sm bg-primary-02" />
                <Text className="text-base font-suit-bold text-grey-90">
                  내 팔자에 숨겨진 특별한 연애운이 있을까?
                </Text>
              </View>
              <Pressable>
                <Text className="text-grey-40">›</Text>
              </Pressable>
            </View>

            <FortuneCard text="20년 뒤, 옆에 누가 있을까?" isLocked={true} onPress={() => {}} />

            <FortuneCard text="20년 뒤, 옆에 누가 있을까?" isLocked={true} onPress={() => {}} />
          </View>
        </View>

        <View className="h-2 my-4 bg-grey-10" />

        <View className="px-5 space-y-3">
          <View className="items-center p-5 border bg-primary-00 border-primary-02 rounded-xl">
            <View className="items-center justify-center w-6 h-6 mb-2">
              <Text>⭐</Text>
            </View>
            <Text className="text-base text-center font-suit-bold text-primary-03">
              {user.profile.name}의 올해는 안정감 있게{'\n'}차곡차곡 쌓이는 해가 될 운명이야.
            </Text>
          </View>

          <View className="p-5 space-y-5 bg-white border border-grey-20 rounded-xl">
            <View className="items-center">
              <Text className="text-grey-40">⭐</Text>
              <FortuneContent
                title="올해의 총운"
                text="작년이 좀 정신없었다면, 올해는 호흡 좀 가다듬을 수 있어. 큰 변화보단, 지금 하고 있는 일에 힘 실리는 해. 묵묵히 가던 길 계속 가면 좋은 결과 나올 확률 높아. 그리고 생각보다 주변에서 널 돕는 사람들이 꽤 있어."
              />
            </View>

            <View className="items-center">
              <Text className="text-grey-40">⭐</Text>
              <FortuneContent
                title="재물운"
                text="이제 돈 좀 모일 타이밍이야. 특히 쓸 데 안 쓰고, 잘 걸러내기만 해도 꽤 남을 거야. 다만, '한 방' 노리는 건 올해랑 안 맞아. 꾸준함이 재산인 해라고 보면 돼."
              />
            </View>

            <View className="items-center">
              <Text className="text-grey-40">⭐</Text>
              <FortuneContent
                title="애정운"
                text="올해는 뜨겁다기보단, 잔잔한 파도 같은 해야. 오래 본 사람이 점점 좋아지거나, 예상 못한 사람한테 마음이 스르륵 열릴 수도 있어. 있잖아, 조용히 깊어지는 그런 사랑. 나쁘지 않지?"
              />
            </View>

            <View className="items-center">
              <Text className="text-grey-40">⭐</Text>
              <FortuneContent
                title="학업운 / 직업운"
                text="집중력 좋고, 꾸준함이 무기인 시기야. 새로운 걸 시작하기보다는, 원래 하던 걸 더 탄탄히 다질 수 있어. 시험이나 승진 준비 중이라면, 꽤 괜찮은 흐름이야. 다만 초반엔 살짝 늘어질 수 있으니까 리듬을 잘 잡는 게 중요해."
              />
            </View>

            <View className="items-center">
              <Text className="text-grey-40">⭐</Text>
              <FortuneContent
                title="냥도사의 조언"
                text="괜히 초조해하지 말고, 내 리듬대로만 가도 충분해. 올해는 나를 믿는 해야. 조금 느려도 괜찮아. 대신 틀어지진 않을 거거든. 그리고 중간중간, 기분 좋게 웃을 일이 생길 거야. 괜히 기대된다냥, 그치?"
              />
            </View>
          </View>

          <View className="items-center py-6">
            <Pressable onPress={handleGoHome} className="px-6 py-3 rounded-lg bg-primary-03">
              <Text className="text-base text-white font-suit-bold">홈으로 돌아가기</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
