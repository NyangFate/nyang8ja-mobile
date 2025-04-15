import '@/global.css';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

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

  if (!fontsLoaded || fontLoadError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="mypage" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}
      />
    </Stack>
  );
}
