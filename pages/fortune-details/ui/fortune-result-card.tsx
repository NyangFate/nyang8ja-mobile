import { Text, View } from 'react-native';
import StarIcon from './star.svg';
export default function FortuneResultCard() {
  const FortuneResultItem = ({ title, text }: { title: string; text: string }) => {
    return (
      <View className="gap-1">
        <Text className="text-center text-subhead3 font-suit-bold text-grey-90">{title}</Text>
        <Text className="text-center text-body1 font-suit-regular text-grey-60">{text}</Text>
      </View>
    );
  };

  return (
    <View className="items-center gap-5 px-6 py-5 border border-grey-20 rounded-xl">
      <FortuneResultItem
        title="올해의 총운"
        text="작년이 좀 정신없었다면, 올해는 호흡 좀 가다듬을 수 있어. 큰 변화보단, 지금 하고 있는 일에 힘 실리는 해. 묵묵히 가던 길 계속 가면 좋은 결과 나올 확률 높아. 그리고 생각보다 주변에서 널 돕는 사람들이 꽤 있어."
      />
      <StarIcon />
      <FortuneResultItem
        title="재물운"
        text="이제 돈 좀 모일 타이밍이야. 특히 쓸 데 안 쓰고, 잘 걸러내기만 해도 꽤 남을 거야. 다만, '한 방' 노리는 건 올해랑 안 맞아. 꾸준함이 재산인 해라고 보면 돼."
      />
      <StarIcon />
      <FortuneResultItem
        title="애정운"
        text="올해는 뜨겁다기보단, 잔잔한 파도 같은 해야. 오래 본 사람이 점점 좋아지거나, 예상 못한 사람한테 마음이 스르륵 열릴 수도 있어. 있잖아, 조용히 깊어지는 그런 사랑. 나쁘지 않지?"
      />
      <StarIcon />
      <FortuneResultItem
        title="학업운 / 직업운"
        text="집중력 좋고, 꾸준함이 무기인 시기야. 새로운 걸 시작하기보다는, 원래 하던 걸 더 탄탄히 다질 수 있어. 시험이나 승진 준비 중이라면, 꽤 괜찮은 흐름이야. 다만 초반엔 살짝 늘어질 수 있으니까 리듬을 잘 잡는 게 중요해."
      />
      <StarIcon />
      <FortuneResultItem
        title="냥도사의 조언"
        text="괜히 초조해하지 말고, 내 리듬대로만 가도 충분해. 올해는 나를 믿는 해야. 조금 느려도 괜찮아. 대신 틀어지진 않을 거거든. 그리고 중간중간, 기분 좋게 웃을 일이 생길 거야. 괜히 기대된다냥, 그치?"
      />
    </View>
  );
}
