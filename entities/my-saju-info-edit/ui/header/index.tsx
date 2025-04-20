import BaseHeader from '@/shared/ui/base-header';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Header() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return <BaseHeader title="사주 정보" onBackPress={handleBackPress} />;
}
