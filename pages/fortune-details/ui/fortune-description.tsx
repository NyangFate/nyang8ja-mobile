import { Text } from 'react-native';

export default function FortuneDescription({
  descriptionText,
  highlightedText,
}: {
  descriptionText: string;
  highlightedText: string;
}) {
  return (
    <Text className="font-suit-regular text-body3 text-grey-60">
      {descriptionText}
      {'\n'}
      <Text className="font-suit-bold text-subhead3 text-primary-03">{highlightedText}</Text>
    </Text>
  );
}
