import { UserNotificationResponseDto } from '@/openapi';
import { Class01UserAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useNotification() {
  return useQuery({
    queryKey: ['notification'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class01UserAPIApi(config);

      // TODO: MOCK 처리 추후 삭제
      const res = await api.getNotificationSettings().then((res) => {
        return mockNotification;
      });

      return res;
    },
  });
}

/**
 * 테스트용 알림 설정 정보
 */
const mockNotification: UserNotificationResponseDto = {
  event: {
    news: true,
  },
  service: {
    fortune: true,
  },
};
