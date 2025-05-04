import { Text, View } from 'react-native';

interface FortuneTitleProps {
  headerText: string;
  titleText: string;
}

export default function FortuneTitle({ headerText, titleText }: FortuneTitleProps) {
  return (
    <View className="gap-2">
      <Text className="text-primary-03 font-suit-bold text-subhead1">{headerText}</Text>
      <Text className="font-suit-bold text-headline2 text-grey-90">{titleText}</Text>
    </View>
  );
}
