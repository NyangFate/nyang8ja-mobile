import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

interface CheckIconProps {
  selected: boolean;
}

export default function CheckIcon({ selected }: CheckIconProps) {
  const bgColor = selected ? '#7A6DF0' : '#EAEEF2';
  const strokeColor = selected ? '#FFFFFF' : '#AFB8C1';

  return (
    <View className="w-6 h-6">
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="12" fill={bgColor} />
        <Path
          d="M8 12.5L10.5 15L16 9"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
