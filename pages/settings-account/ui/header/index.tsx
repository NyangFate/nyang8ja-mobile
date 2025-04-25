import BaseHeader from '@/shared/ui/header';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Header() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return <BaseHeader title="계정 설정" onBackPress={handleBackPress} />;
}
