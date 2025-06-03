import { DivinationResultResponseDto, DivinationSalResultResponseDto } from '@/openapi/models';
import { Fragment } from 'react';
import { Text, View } from 'react-native';
import StarIcon from './star.svg';

type FortuneResultCardProps = {
  result?: DivinationSalResultResponseDto;
  todayResult?: DivinationResultResponseDto;
};

export default function FortuneResultCard({ result, todayResult }: FortuneResultCardProps) {
  const FortuneResultItem = ({ title, text }: { title: string; text: string }) => {
    return (
      <View className="gap-1">
        <Text className="text-center text-subhead3 font-suit-bold text-grey-90">{title}</Text>
        <Text className="text-center text-body1 font-suit-regular text-grey-60">{text}</Text>
      </View>
    );
  };

  const FortuenTodayResultItem = ({
    title,
    text,
    score,
  }: {
    title: string;
    text: string;
    score?: number;
  }) => {
    return (
      <View className="gap-1">
        <View className="flex-row items-center justify-center gap-1">
          <Text className="text-center text-subhead3 font-suit-bold text-grey-90">{title}</Text>
          {score && (
            <Text className="text-center text-subhead3 font-suit-bold text-grey-90">
              <Text className="text-subhead3 font-suit-bold text-primary-03">{score}점</Text>
            </Text>
          )}
        </View>
        <Text className="text-center text-body1 font-suit-regular text-grey-60">{text}</Text>
      </View>
    );
  };

  if (todayResult) {
    return (
      <View className="items-center gap-5 px-6 py-5 border border-grey-20 rounded-xl">
        {todayResult.body.map((item, index) => (
          <Fragment key={item.category}>
            <FortuenTodayResultItem
              title={item.category}
              text={item.description}
              score={item.score}
            />
            {index !== todayResult.body.length - 1 && <StarIcon />}
          </Fragment>
        ))}
      </View>
    );
  }

  if (result) {
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
}
