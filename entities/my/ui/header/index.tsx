import BaseHeader from '@/shared/ui/base-header';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Header() {
  const router = useRouter();

  const handleBackPress = () => {
    router.navigate('/');
  };

  return <BaseHeader title="마이" onBackPress={handleBackPress} />;
}
