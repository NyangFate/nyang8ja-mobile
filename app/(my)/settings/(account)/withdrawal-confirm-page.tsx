import WithdrawalConfirmScreen from '@/entities/my-settings-account-withdrawl/ui/WithdrawalConfirmScreen';
import { User } from '@/entities/my/model/types';
import { fakerKO as faker } from '@faker-js/faker';
import React from 'react';

export default function WithdrawalConfirmPage() {
  // 실제 구현 시 상태 관리나 API로 현재 사용자 정보 가져오기
  const user: User = {
    name: faker.person.firstName(),
    joinedAt: faker.date.past().toISOString(),
    signInMethod: 'apple',
    sajuInfo: {
      gender: 'male',
      birthDate: faker.date.past().toISOString(),
      isBirthTimeKnown: false,
    },
  };

  return <WithdrawalConfirmScreen username={user.name} />;
}
