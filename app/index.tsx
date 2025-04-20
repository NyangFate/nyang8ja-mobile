import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>마이페이지</Text>
      <Button title="홈으로 이동" onPress={() => router.push('/(my)/my-page')} />
      <Button
        title="사주 정보 생성"
        onPress={() => router.push('/(my)/saju-info/(create)/create-page')}
      />
    </View>
  );
}
