import { Class02DivinationAPIApi } from '@/openapi/apis/Class02DivinationAPIApi';
import { useQuery } from '@tanstack/react-query';

export default function useRecommendedFortune() {
  return useQuery({
    queryKey: ['recommendedFortune'],
    queryFn: async () => {
      const api = new Class02DivinationAPIApi();
      try {
        const res = await api.getRecommendDivination();
        return res;
      } catch (error) {}
    },
  });
}
