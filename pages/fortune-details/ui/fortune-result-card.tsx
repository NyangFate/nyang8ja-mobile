import { DivinationSalResultResponseDto } from '@/openapi/models';
import { Text, View } from 'react-native';
import StarIcon from './star.svg';

type FortuneResultCardProps = {
  result: DivinationSalResultResponseDto;
};

export default function FortuneResultCard({ result }: FortuneResultCardProps) {
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
      <FortuneResultItem title={`${result.effectiveType}의 의미`} text={result.meaning} />
      <StarIcon />
      <FortuneResultItem
        title={`그래서 이 ${result.effectiveType}은 언제 오는데?`}
        text={result.season}
      />
      <StarIcon />
      <FortuneResultItem title="냥도사의 조언" text={result.advice} />
    </View>
  );
}
