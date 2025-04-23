import { useRouter } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';

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
      <Button title="마이 페이지로 이동" onPress={() => router.push('/(my)/my-page')} />
      <Button
        title="사주 정보 생성하기"
        onPress={() => router.push('/(my)/saju-info/(create)/create-page')}
      />
    </View>
  );
}
