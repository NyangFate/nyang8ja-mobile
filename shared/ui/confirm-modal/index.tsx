import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

export type ConfirmModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  cancelText: string;
  confirmText: string;
};

export default function ConfirmModal({
  isVisible,
  onClose,
  onConfirm,
  title,
  cancelText,
  confirmText,
}: ConfirmModalProps) {
  return (
    <Modal transparent visible={isVisible}>
      <View className="items-center justify-center flex-1 bg-black/40">
        <View className="items-center w-4/5 px-5 pb-5 bg-white rounded-lg pt-7">
          <View className="items-center w-full mb-6">
            <Text className="text-center font-suit-bold text-subhead4 text-grey-90">{title}</Text>
          </View>

          <View className="flex-row w-full gap-2">
            <Pressable
              className="flex-1 h-[54px] rounded-lg justify-center items-center bg-grey-10"
              onPress={onClose}
            >
              <Text className="text-center font-suit-bold text-subhead3 text-grey-70">
                {cancelText}
              </Text>
            </Pressable>

            <Pressable
              className="flex-1 h-[54px] rounded-lg justify-center items-center bg-grey-70"
              onPress={onConfirm}
            >
              <Text className="text-center text-white font-suit-bold text-subhead3">
                {confirmText}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
