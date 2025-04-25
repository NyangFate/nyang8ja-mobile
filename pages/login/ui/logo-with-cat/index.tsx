import NyangPaljaTextLogo from '@/assets/images/nyang8ja-text-logo.webp';
import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import { Image } from 'expo-image';
import React from 'react';
import { View } from 'react-native';

export default function LogoWitchCat() {
  return (
    <View>
      <View className="items-center justify-center">
        <Image source={SurprisedCatWithPacifierImage} style={{ width: 240, height: 240 }} />
      </View>
      <View className="items-center justify-center mt-4">
        <Image source={NyangPaljaTextLogo} style={{ width: 174, height: 58 }} />
      </View>
    </View>
  );
}
