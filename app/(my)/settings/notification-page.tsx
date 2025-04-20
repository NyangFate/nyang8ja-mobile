import Header from '@/entities/my-settings-notification/ui/header';
import COLORS from '@/shared/utils/colors';
import React, { useState } from 'react';
import { SafeAreaView, Switch, Text, View } from 'react-native';

export default function NotificationPage() {
  const [isEventNotificationOn, setIsEventNotificationOn] = useState(true);
  const [isFortuneNotificationOn, setIsFortuneNotificationOn] = useState(true);

  const handleEventNotificationOnChange = (value: boolean) => {
    // TODO: 이벤트 알림 설정 변경
    // NOTE: 낙관적 업데이트, 디바운싱
    setIsEventNotificationOn(value);
  };

  const handleFortuneNotificationOnChange = (value: boolean) => {
    // TODO: 오늘의 운세 알림 설정 변경
    setIsFortuneNotificationOn(value);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />

      {/* 혜택 및 이벤트 섹션 */}
      <View className="px-5 py-3">
        <Text className="text-body1 text-grey-50 font-suit-regular">혜택 및 이벤트</Text>
        <View className="flex-row items-center justify-between py-3">
          <Text className="text-body3 text-grey-70 font-suit-regular">이벤트 소식</Text>
          <Switch
            trackColor={{ false: COLORS.grey[10], true: COLORS.primary['03'] }}
            thumbColor={COLORS.white}
            onValueChange={setIsEventNotificationOn}
            value={isEventNotificationOn}
          />
        </View>
      </View>

      {/* 구분선 */}
      <View className="h-3 bg-grey-10" />

      {/* 서비스 알림 섹션 */}
      <View className="px-5 py-6">
        <Text className="text-body1 text-grey-50 font-suit-regular">서비스 알림</Text>
        <View className="flex-row items-center justify-between py-3">
          <Text className="text-body3 text-grey-70 font-suit-regular">오늘의 운세</Text>
          <Switch
            trackColor={{ false: COLORS.grey[10], true: COLORS.primary['03'] }}
            thumbColor={COLORS.white}
            onValueChange={setIsFortuneNotificationOn}
            value={isFortuneNotificationOn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
