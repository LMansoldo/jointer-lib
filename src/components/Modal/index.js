import React from "react";

import { Wrapper, Backdrop, Content } from "./styled";

const Modal = ({ open, children, onBackdropClick = () => {} }) => {
  const renderBackdrop = open => {
    if (!open) return null;
    return <Backdrop onClick={onBackdropClick} />;
  };

  const renderModalContent = (open, children) => {
    if (!open) return null;

    return <Content>{children}</Content>;
  };

  return (
    <Wrapper>
      {renderBackdrop(open)}
      {renderModalContent(open, children)}
    </Wrapper>
  );
};
export default Modal;
