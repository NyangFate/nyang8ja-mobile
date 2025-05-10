import ReactQueryClientProvider from '@/app-setup/config/react-query';
import '@/global.css';
import Error from '@/pages/special/ui/error';
import { initializeKakaoSDK } from '@react-native-kakao/core';
import 'expo-dev-client';
import { useFonts } from 'expo-font';
import { Stack, type ErrorBoundaryProps } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded, fontLoadError] = useFonts({
    'SUIT-Regular': require('../assets/fonts/SUIT-Regular.otf'),
    'SUIT-Bold': require('../assets/fonts/SUIT-Bold.otf'),
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded || fontLoadError) {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded, fontLoadError]);

  useEffect(() => {
    const kakaoNativeAppKey = '9fadc629853919df087ddb8d3498716b';
    initializeKakaoSDK(kakaoNativeAppKey);
  }, []);

  if (!fontsLoaded || fontLoadError) {
    return null;
  }

  return (
    <ReactQueryClientProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(my)" />
        <Stack.Screen name="(fortune)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="login-page"
          options={{
            presentation: 'fullScreenModal',
          }}
        />
      </Stack>
      <Toast />
    </ReactQueryClientProvider>
  );
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return <Error error={error} retry={retry} />;
}
