import React from "react";

import Modal from ".";
import Text from "../Text";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Modal", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const modalOpen = boolean("Open", true);
  const contentWidth = number("Content Width", 350);
  const contentHeight = number("Content Height", 300);

  const modalContent = () => {
    const divStyle = {
      width: `${contentWidth}px`,
      height: `${contentHeight}px`,
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "12px",
      userSelect: "none",
      transition: "all 0.5s"
    };
    return (
      <div style={divStyle}>
        <Text color="#000" fontSize="18px" fontWeight="300">
          Conteúdo da modal
        </Text>
      </div>
    );
  };

  return (
    <Modal
      open={modalOpen}
      onBackdropClick={() => {
        console.log("Backdrop Click");
      }}
    >
      {modalContent()}
    </Modal>
  );
});
