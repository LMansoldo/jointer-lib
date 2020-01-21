import React from "react";

import Input from "../components/Input";
import DatePicker from "../components/DatePicker";

import theme from "../components/Themes";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Input", module);
stories.add("default", () => {
  return (
    <Input
      width="280px"
      height="56px"
      placeholder="default input"
      type="text"
      color={theme.color.tertiary}
      borderColor="rgba(0,0,0, 0.8)"
      selectedColor={theme.color.primary}
    />
  );
});

stories.add("textarea", () => {
  return (
    <Input
      width="280px"
      height="90px"
      placeholder="Texto"
      name="Textarea"
      type="textarea"
      color="rgba(0,0,0, 0.3)"
      borderColor="rgba(0,0,0, 0.8)"
      selectedColor="#f91e96"
      autoFocus={true}
      error={true}
    />
  );
});

stories.add("masked", () => {
  return (
    <Input
      width="280px"
      height="56px"
      placeholder="CPF"
      name="masked"
      mask="000.000.000-00"
      type="text"
      onFocus={e => console.log(e.target.value)}
      onChangeValue={e => console.log(e)}
      color="rgba(0,0,0, 0.3)"
      borderColor="rgba(0,0,0, 0.8)"
      selectedColor="#f91e96"
      error={true}
    />
  );
});

stories.add("password", () => {
  return (
    <Input
      width="280px"
      height="56px"
      name="password"
      placeholder="Senha"
      type="password"
      value="teste"
      color="rgba(0,0,0, 0.3)"
      borderColor="rgba(0,0,0, 0.8)"
      selectedColor="#f91e96"
      error={false}
    />
  );
});

stories.add("dropdown", () => {
  const items = [
    { label: "Item 1", value: "value1" },
    { label: "Item 2", value: "value2" },
    { label: "Item 3", value: "value3" }
  ];

  return (
    <Input
      width="280px"
      height="56px"
      color="rgba(0,0,0, 0.3)"
      borderColor="rgba(0,0,0, 0.8)"
      selectedColor="#f91e96"
      onSelectItem={e => console.log("selected", e)}
      onKeyPress={() => console.log("enter submit")}
      placeholder="Lista"
      type="dropdown"
      readOnly={true}
      itemList={items}
      error={true}
    />
  );
});

stories.add("calendar", () => {
  return (
    <Input
      width="280px"
      height="56px"
      name="calendar"
      color="rgba(0,0,0, 0.3)"
      borderColor="rgba(0,0,0, 0.8)"
      selectedColor="#f91e96"
      placeholder="Data"
      usStandard={true}
      mask="00/00/0000"
      type="calendar"
      onChangeValue={e => console.log(e)}
      onBlur={e => console.log(e)}
      datePicker={DatePicker}
    />
  );
});
