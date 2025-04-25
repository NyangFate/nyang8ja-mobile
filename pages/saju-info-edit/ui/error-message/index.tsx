import { Text } from 'react-native';

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <Text className="text-body1 text-error font-suit-regular">{message}</Text>;
}
