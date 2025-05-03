import React from 'react';
import { Pressable, Text, View } from 'react-native';

import ArrowRightIcon from '@/assets/svgs/arrow-right.svg';
import LockIcon from '@/assets/svgs/lock-off.svg';
import SajuSymbolIcon from '@/assets/svgs/saju-symbol.svg';
import TarotSymbolIcon from '@/assets/svgs/tarot-symbol.svg';

interface FortuneCardProps {
  type: 'saju' | 'tarot';
  title: string;
  locked?: boolean;
  onPress: () => void;
}

export default function FortuneCard({ title, type, locked, onPress }: FortuneCardProps) {
  return (
    <Pressable className="flex-row items-center justify-between h-9" onPress={onPress}>
      <View className="flex-row items-center gap-3">
        {locked && (
          <View className="px-[2px]">
            <LockIcon width={32} height={32} />
          </View>
        )}
        {!locked && type === 'saju' && <SajuSymbolIcon />}
        {!locked && type === 'tarot' && (
          <View className="px-[6.5px]">
            <TarotSymbolIcon />
          </View>
        )}

        <Text className="text-grey-90 font-suit-bold text-subhead3">{title}</Text>
      </View>
      <ArrowRightIcon width={24} height={24} />
    </Pressable>
  );
}
