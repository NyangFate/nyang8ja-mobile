import { Text, View } from 'react-native';
import PrimaryStar from './primary-star.svg';
type FortuneSummaryCardProps = {
  userName: string;
};

export default function FortuneSummaryCard({ userName }: FortuneSummaryCardProps) {
  return (
    <View className="items-center gap-2 px-5 py-4 border bg-primary-00 border-primary-02 rounded-xl">
      <PrimaryStar />
      <Text className="text-center text-subhead3 font-suit-bold text-primary-03">
        {userName}의 올해는 안정감 있게{'\n'}차곡차곡 쌓이는 해가 될 운명이야.
      </Text>
    </View>
  );
}
