import React from 'react';
import { Text, View } from 'react-native';

export default function Menu() {
  return (
    <View className="p-5">
      <Text className="my-2 text-base">서비스</Text>
      <Text className="my-2 text-base">관리</Text>
      <Text className="my-2 text-base">서비스 이용약관</Text>
      <Text className="my-2 text-base">개인정보처리방침</Text>
    </View>
  );
}
