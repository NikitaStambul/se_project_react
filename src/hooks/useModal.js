import { useState, useCallback } from "react";

export const useModal = () => {
  const [isModalOpened, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpened,
    openModal,
    closeModal,
  };
};
