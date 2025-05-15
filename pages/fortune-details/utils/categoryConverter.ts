import { DivinationQuestionResponseDtoCategoryEnum } from '@/openapi/models';

/**
 * 운세 카테고리 enum을 한글로 변환하는 함수
 * @param category 운세 카테고리 enum 값
 * @returns 한글로 변환된 카테고리명
 */
export function convertCategoryToKorean(
  category: DivinationQuestionResponseDtoCategoryEnum
): string {
  const categoryMap: Record<DivinationQuestionResponseDtoCategoryEnum, string> = {
    [DivinationQuestionResponseDtoCategoryEnum.LOVE]: '연애운',
    [DivinationQuestionResponseDtoCategoryEnum.WEALTH]: '재물운',
    [DivinationQuestionResponseDtoCategoryEnum.CAREER]: '직장운',
    [DivinationQuestionResponseDtoCategoryEnum.HEALTH]: '건강운',
    [DivinationQuestionResponseDtoCategoryEnum.NONE]: '기타',
  };

  return categoryMap[category] || '알 수 없음';
}

/**
 * 운세 카테고리 enum을 이모지와 함께 한글로 변환하는 함수
 * @param category 운세 카테고리 enum 값
 * @returns 이모지와 함께 한글로 변환된 카테고리명
 */
export function convertCategoryToKoreanWithEmoji(
  category: DivinationQuestionResponseDtoCategoryEnum
): string {
  const categoryMapWithEmoji: Record<DivinationQuestionResponseDtoCategoryEnum, string> = {
    [DivinationQuestionResponseDtoCategoryEnum.LOVE]: '❤️ 연애운',
    [DivinationQuestionResponseDtoCategoryEnum.WEALTH]: '💰 재물운',
    [DivinationQuestionResponseDtoCategoryEnum.CAREER]: '💼 직장운',
    [DivinationQuestionResponseDtoCategoryEnum.HEALTH]: '🏥 건강운',
    [DivinationQuestionResponseDtoCategoryEnum.NONE]: '✨ 기타',
  };

  return categoryMapWithEmoji[category] || '❓ 알 수 없음';
}
