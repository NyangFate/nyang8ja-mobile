import { Text, View } from 'react-native';

interface FortuneResultTitleProps {
  headerText: string;
  titleText: string;
}

export default function FortuneResultTitle({ headerText, titleText }: FortuneResultTitleProps) {
  return (
    <View className="gap-2">
      {headerText && (
        <Text className="text-grey-50 font-suit-bold text-subhead1">{headerText}</Text>
      )}
      <Text className="font-suit-bold text-headline2 text-grey-90">{titleText}</Text>
    </View>
  );
}
