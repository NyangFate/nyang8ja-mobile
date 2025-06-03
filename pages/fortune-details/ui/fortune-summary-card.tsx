import { Text, View } from 'react-native';
import PrimaryStar from './primary-star.svg';
type FortuneSummaryCardProps = {
  summary: string;
};

export default function FortuneSummaryCard({ summary }: FortuneSummaryCardProps) {
  return (
    <View className="items-center gap-2 px-5 py-4 border bg-primary-00 border-primary-02 rounded-xl">
      <PrimaryStar />
      <Text className="text-center text-subhead3 font-suit-bold text-primary-03">{summary}</Text>
    </View>
  );
}
