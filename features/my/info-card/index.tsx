import React from 'react';
import { Button, Text, View } from 'react-native';

export default function InfoCard() {
  return (
    <View className="p-5 bg-gray-100 rounded-lg">
      <Text className="text-xl font-bold">로그인하기</Text>
      <Text className="text-sm text-gray-600">로그인하고 맞춤 결과를 만나봐요</Text>
      <Button title="로그인" onPress={() => {}} />
    </View>
  );
}
