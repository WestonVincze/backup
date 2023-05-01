import React, { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (newContent: React.ReactNode) => {
    console.log("opening modal...");
    console.log(newContent);
    setIsOpen(true);
    setContent(newContent);
    console.log(content);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, content, openModal, closeModal };
};

export default useModal;
