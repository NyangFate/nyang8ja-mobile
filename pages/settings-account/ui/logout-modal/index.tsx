import ConfirmModal, { ConfirmModalProps } from '@/shared/ui/confirm-modal';

type LogoutModalProps = Pick<ConfirmModalProps, 'isVisible' | 'onClose' | 'onConfirm'>;

export default function LogoutModal({ isVisible, onClose, onConfirm }: LogoutModalProps) {
  return (
    <ConfirmModal
      isVisible={isVisible}
      onClose={onClose}
      onConfirm={onConfirm}
      title="정말 로그아웃 하시겠어요?"
      cancelText="취소하기"
      confirmText="로그아웃"
    />
  );
}
