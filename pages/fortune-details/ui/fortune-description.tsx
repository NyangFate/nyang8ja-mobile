import { Text } from 'react-native';

export default function FortuneDescription({
  descriptionText,
  highlightedText,
}: {
  descriptionText: string | undefined;
  highlightedText: string | undefined;
}) {
  if (!descriptionText && !highlightedText) return null;

  return (
    <Text className="font-suit-regular text-body3 text-grey-60">
      {descriptionText}
      {highlightedText && '\n'}
      {highlightedText && (
        <Text className="font-suit-bold text-subhead3 text-primary-03">{highlightedText}</Text>
      )}
    </Text>
  );
}
