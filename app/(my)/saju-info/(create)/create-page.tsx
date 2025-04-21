import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import NyaongSinText from '@/assets/svgs/nyaong-sin-text.svg';
import Header from '@/entities/my-saju-info-create/ui/header';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function SajuInfoCreatePage() {
  const router = useRouter();

  const [currentComponent, setCurrentComponent] = useState(0);

  // 애니메이션 상태
  const [animationEnded, setAnimationEnded] = useState(false);

  const components = [
    // component1
    <Animated.View
      key="component1"
      className="mt-5"
      entering={FadeIn.duration(1200)}
      exiting={FadeOut.duration(500)}
    >
      <View className="flex-row items-center justify-center gap-0.5">
        <Animated.Text className="text-headline1 font-suit-bold text-grey-90">나는</Animated.Text>
        <NyaongSinText style={{ width: 62, height: 24 }} />
        <Animated.Text className="text-headline1 font-suit-bold text-grey-90">
          의 신묘한 힘을
        </Animated.Text>
      </View>
      <View className="items-center justify-center mt-px">
        <Animated.Text className="text-headline1 font-suit-bold text-grey-90">
          이어받은 점괘 고양이...
        </Animated.Text>
      </View>
    </Animated.View>,

    // component2
    <Animated.View
      key="component2"
      className="mt-5"
      entering={FadeIn.duration(1200)}
      exiting={FadeOut.duration(500)}
    >
      <View className="flex-row items-center justify-center gap-0.5">
        <Animated.Text className="text-center text-headline1 font-suit-bold text-grey-90">
          안녕 집사!{'\n'}냥팔자에 어서와.
        </Animated.Text>
      </View>
    </Animated.View>,

    // component3
    <Animated.View
      key="component3"
      className="mt-5"
      entering={FadeIn.duration(1200)}
      exiting={FadeOut.duration(500)}
    >
      <View className="flex-row items-center justify-center gap-0.5">
        <Animated.Text className="text-center text-headline1 font-suit-bold text-grey-90">
          정확한 결과를 위해 집사의 정보가 필요해.{'\n'}알려줄래?
        </Animated.Text>
      </View>
    </Animated.View>,
  ];

  // 컴포넌트 전환 타이머
  useEffect(() => {
    if (animationEnded) return;

    const interval = setInterval(() => {
      setCurrentComponent((prev) => {
        const next = (prev + 1) % components.length;
        if (next === 2) {
          // component3에 도달하면 애니메이션 중지
          setAnimationEnded(true);
        }
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [animationEnded]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <View className="flex-1 mt-40">
        <View className="items-center justify-center">
          <Image source={SurprisedCatWithPacifierImage} style={{ width: 240, height: 240 }} />
        </View>
        {components[currentComponent]}
      </View>
      {animationEnded && (
        <Animated.View entering={FadeIn.duration(1200)} className="p-5">
          <Pressable
            onPress={() => router.navigate('/(my)/saju-info/(create)/name-input-page')}
            className="rounded-lg bg-grey-90 h-[54px] items-center justify-center"
          >
            <Text className="text-white text-subhead3 font-suit-bold">알려줄게</Text>
          </Pressable>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
