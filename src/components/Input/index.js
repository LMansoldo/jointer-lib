import React from "react";

import defaultTheme from "../Themes";
import Modal from "../Modal";
import CancelIcon from "./icons/cancel";
import DownArrowIcon from "./icons/downarrow";
import VisibilityOff from "./icons/visibilityoff";
import VisibilityOn from "./icons/visibilityon";
import CalendarIcon from "./icons/calendar";

import {
  Wrapper,
  InputWrapper,
  TextAreaWrapper,
  Placeholder,
  HiddenPlaceholder,
  ErrorText,
  TrailingIcon,
  LeadingIcon,
  Dropdown,
  DropdownOverflowMask,
  DropdownItem,
  DropdownItemWrapper,
  InputBackdrop
} from "./styled";

const InputIcon = ({
  type,
  color,
  currentValue,
  passwordVisible,
  dropdownVisible,
  setMaskedValue,
  setPasswordVisible,
  setDropdownVisible,
  setBackdropVisible,
  onClear = () => {}
}) => {
  switch (type) {
    case "text":
    case "textarea":
    case "number":
    case "calendar":
      if (currentValue.length >= 1) {
        return (
          <CancelIcon
            onClose={onClear}
            setMaskedValue={setMaskedValue}
            color={color}
          />
        );
      }
      return null;
    case "password":
      if (passwordVisible) {
        return (
          <VisibilityOff
            setPasswordVisible={setPasswordVisible}
            color={color}
          />
        );
      }
      return (
        <VisibilityOn setPasswordVisible={setPasswordVisible} color={color} />
      );
    case "dropdown":
    case "list":
      return (
        <DownArrowIcon
          setDropdownVisible={setDropdownVisible}
          dropdownVisible={dropdownVisible}
          setBackdropVisible={setBackdropVisible}
          color={color}
        />
      );
    default:
      return null;
  }
};

const Input = ({
  theme = defaultTheme,
  width,
  height,
  name,
  color,
  selectedColor,
  borderColor,
  borderRadius,
  boxShadow,
  margin,
  type,
  readOnly = false,
  placeholder,
  mask,
  gradientBackground,
  errorMessage = "",
  defaultValue = "",
  hideTrailingIcon,
  dropdownLimit = 0,
  itemList = [],
  leadingIcon = null,
  trailingIcon = null,
  datePicker = null,
  usStandard = false,
  autoFocus = false,
  outputValue = false,
  onClose = () => {},
  onChangeValue = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onSubmit = () => {},
  onSelectItem = () => {},
  onTrailingIconClick = () => {}
}) => {
  const [backspace, setBackspace] = React.useState(false);
  const [maskedValue, setMaskedValue] = React.useState(defaultValue);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const [showInputModal, setShowInputModal] = React.useState(false);
  const [backdropVisible, setBackdropVisible] = React.useState(false);
  const inputRef = React.useRef(null);

  const placeholderRef = React.useRef(null);

  React.useEffect(() => {
    onChangeValue(maskedValue);
  }, [onChangeValue, maskedValue]);

  const parseInternalType = type => {
    switch (type) {
      case "text":
      case "number":
      case "dropdown":
      case "list":
      case "calendar":
        return "text";
      case "password":
        if (passwordVisible) return "text";
        return "password";
      default:
        return "text";
    }
  };

  const getPolygon = (cut, placeholder) => {
    if (!placeholder.current) return "none";
    const width = placeholder.current.clientWidth;
    if (cut)
      return `polygon(0 0, 8px 0, 8px 3px, calc(8px + ${width}px) 3px, calc(8px + ${width}px) 0, 100% 0, 100% 100%, 0 100%)`;
    return "polygon(0 0, 32px 0, 32px 3px, 32px 3px, 32px 0, 100% 0, 100% 100%, 0 100%)";
  };

  const oddCharacterRemoval = text => {
    text = text.toLowerCase();
    text = text.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
    text = text.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
    text = text.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
    text = text.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
    text = text.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
    text = text.replace(new RegExp("[Ç]", "gi"), "c");
    return text;
  };

  const renderErrorMessage = errorMsg => {
    if (errorMsg && errorMsg.length > 0) {
      return (
        <ErrorText gradientBackground={gradientBackground}>
          {errorMsg}
        </ErrorText>
      );
    }
    return null;
  };

  const removeSpecialChar = value => value.replace(/[^A-z0-9]/g, "");

  const isSpecialCharacter = value => /[^A-z0-9]/.exec(value) !== null;

  const matchPattern = (value, maskChar) => {
    switch (maskChar) {
      case "0":
        // Number only
        return /[0-9]/.exec(value) !== null;
      case "A":
      case "a":
        // Text only
        return /[A-z]/.exec(value) !== null;
      case "X":
      case "x":
      default:
        return /[A-z0-9]/.exec(value) !== null;
    }
  };

  const applyMask = (value = "", mask = "") => {
    if (value.length < 1) return "";

    const cleanString = removeSpecialChar(value);
    if (cleanString.length < 1) return "";

    const valueCharArray = [...cleanString];
    const maskCharArray = [...mask];
    const cleanMaskCharArray = [...removeSpecialChar(mask)];
    const finalCharArray = [];

    let valueChar = valueCharArray.shift();
    let maskDigit = cleanMaskCharArray.shift();

    while (valueChar) {
      if (!matchPattern(valueChar, maskDigit)) break;

      let maskChar = maskCharArray.shift();
      if (!maskChar) break;

      while (isSpecialCharacter(maskChar)) {
        finalCharArray.push(maskChar);
        maskChar = maskCharArray.shift();
      }

      finalCharArray.push(valueChar);
      valueChar = valueCharArray.shift();
      maskDigit = cleanMaskCharArray.shift();
    }

    return finalCharArray.join("");
  };

  const getDropdownItems = (itemList, limit, term = "") => {
    if (term.length >= 1 && readOnly === false) {
      return itemList
        .filter(
          item =>
            oddCharacterRemoval(item.name || item.label).indexOf(
              oddCharacterRemoval(term)
            ) > -1
        )
        .slice(0, limit);
    }
    if (limit > 0) return itemList.slice(0, limit);
    return itemList;
  };

  const renderBackdrop = backdropVisible => {
    if (!backdropVisible) return null;
    return (
      <InputBackdrop
        onClick={() => {
          setDropdownVisible(false);
          setBackdropVisible(false);
        }}
      />
    );
  };

  const getTextAreaWrapper = () => {
    return (
      <TextAreaWrapper
        ref={inputRef}
        width={width}
        height={height}
        autoFocus={autoFocus}
        autoComplete="off"
        type={parseInternalType(type)}
        leadingIcon={type === "calendar"}
        fontFamily={theme.font.primary}
        value={maskedValue}
        borderColor={borderColor}
        borderRadius={borderRadius}
        color={color}
        selectedBorderColor={selectedColor}
        hasValue={maskedValue.length >= 1}
        cutPolygon={() => getPolygon(true, placeholderRef)}
        uncutPolygon={() => getPolygon(false, placeholderRef)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            onSubmit();
          }
        }}
        onFocus={event => {
          setDropdownVisible(true);
          setBackdropVisible(true);
          onFocus(event);
        }}
        onBlur={() => {
          onBlur(maskedValue);
          setDropdownVisible(false);
          setBackdropVisible(false);
        }}
        onKeyDown={event => {
          if (mask) {
            if (event.keyCode === 8) {
              setBackspace(true);
              setMaskedValue(maskedValue.substr(0, maskedValue.length - 1));
            }
          }
        }}
        onKeyUp={event => {
          if (mask) {
            if (event.keyCode === 8) setBackspace(false);
          }
        }}
        onChange={event => {
          if (mask) {
            if (!backspace) {
              const maskedApplied = applyMask(event.target.value, mask);
              setMaskedValue(maskedApplied);
            } else {
              setMaskedValue(event.target.value);
            }
          } else {
            setMaskedValue(event.target.value);
          }
        }}
      />
    );
  };

  const getInputWrapper = () => {
    return (
      <InputWrapper
        ref={inputRef}
        width={width}
        height={height}
        autoFocus={autoFocus}
        autoComplete="off"
        type={parseInternalType(type)}
        readOnly={readOnly}
        leadingIcon={type === "calendar"}
        trailingIcon={!hideTrailingIcon || trailingIcon}
        fontFamily={theme.font.primary}
        name={name}
        value={maskedValue}
        borderColor={borderColor}
        borderRadius={borderRadius}
        color={color}
        selectedBorderColor={selectedColor}
        hasValue={maskedValue.length >= 1}
        cutPolygon={() => getPolygon(true, placeholderRef)}
        uncutPolygon={() => getPolygon(false, placeholderRef)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            onSubmit();
          }
        }}
        onFocus={event => {
          setDropdownVisible(true);
          setBackdropVisible(true);
          onFocus(event);
        }}
        onBlur={event => {
          onBlur(maskedValue);
          setTimeout(() => {
            setDropdownVisible(false);
            setBackdropVisible(false);
          }, 100);
        }}
        onKeyUp={event => {
          if (mask) {
            if (event.keyCode === 8) setBackspace(false);
          }
        }}
        onChange={event => {
          if (mask) {
            if (!backspace) {
              const maskedApplied = applyMask(event.target.value, mask);
              setMaskedValue(maskedApplied);
            } else {
              setMaskedValue(event.target.value);
            }
          } else {
            setMaskedValue(event.target.value);
            onChangeValue(event.target.value);
          }
        }}
      />
    );
  };

  const renderInputWrapper = (type = "") => {
    if (type === "textarea") return getTextAreaWrapper();
    return getInputWrapper();
  };

  const renderPlaceholder = (placeholder = "") => {
    if (!placeholder || placeholder.length === 0) return null;
    return (
      <React.Fragment>
        <HiddenPlaceholder
          ref={placeholderRef}
          fontFamily={theme.font.primary}
          color={color}
          borderColor={borderColor}
        >
          {placeholder}
        </HiddenPlaceholder>
        <Placeholder
          fontFamily={theme.font.primary}
          leadingIcon={type === "calendar"}
          trailingIcon={!hideTrailingIcon || trailingIcon}
          className="placeholder"
          hasValue={maskedValue.length >= 1}
          borderColor={borderColor}
          color={color}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        >
          {placeholder}
        </Placeholder>
      </React.Fragment>
    );
  };

  const renderLeadingIcon = (type, leadingIcon, color) => {
    if (type === "calendar")
      return (
        <LeadingIcon onClick={() => setShowInputModal(true)}>
          <CalendarIcon color={color} />
        </LeadingIcon>
      );

    if (!leadingIcon) return null;

    return (
      <LeadingIcon>{React.createElement(leadingIcon, { color })}</LeadingIcon>
    );
  };

  const renderTrailingIcon = (show, type, trailingIcon, color) => {
    if (!show) return null;
    if (!trailingIcon && !type) return null;
    if (trailingIcon)
      return (
        <TrailingIcon onClick={onTrailingIconClick}>
          {React.createElement(trailingIcon, { color })}
        </TrailingIcon>
      );
    return (
      <TrailingIcon>
        <InputIcon
          type={type}
          color={color}
          currentValue={maskedValue}
          passwordVisible={passwordVisible}
          dropdownVisible={dropdownVisible}
          setMaskedValue={setMaskedValue}
          setPasswordVisible={setPasswordVisible}
          setDropdownVisible={setDropdownVisible}
          setBackdropVisible={setBackdropVisible}
          onClear={event => onClose(event)}
        />
      </TrailingIcon>
    );
  };

  const renderDropdown = (
    dropdownVisible,
    dropdownLimit,
    itemList,
    maskedValue
  ) => {
    if (!dropdownVisible) return null;

    const dropdownItems = getDropdownItems(
      itemList,
      dropdownLimit,
      maskedValue
    );
    if (dropdownItems.length === 0) return null;

    const dropdownItemClick = item => {
      setMaskedValue((item.name || item.label).toLowerCase());
      setDropdownVisible(false);
      setBackdropVisible(false);
      if (outputValue)
        onSelectItem({ label: item.name || item.label, value: item.value });
      else onSelectItem({ label: item.name || item.label });
    };
    const dropdownItemMapped = dropdownItems.map((item, index) => (
      <DropdownItemWrapper
        key={index}
        onClick={() => {
          dropdownItemClick(item);
        }}
      >
        <DropdownItem>{item.name || item.label}</DropdownItem>
      </DropdownItemWrapper>
    ));

    return (
      <DropdownOverflowMask width={width} height={height}>
        <Dropdown>{dropdownItemMapped}</Dropdown>
      </DropdownOverflowMask>
    );
  };

  const renderDatePicker = (datePicker, showInputModal) => {
    if (!datePicker || !showInputModal) return null;

    const onConfirm = date => {
      const { day, month, year } = date;
      const currentDay = day < 10 ? `0${day}` : day;
      const currentMonth = month < 10 ? `0${month + 1}` : month + 1;
      setMaskedValue(
        usStandard
          ? `${currentMonth}/${currentDay}/${year}`
          : `${currentDay}/${currentMonth}/${year}`
      );
      // onChangeValue(usStandard ? `${currentMonth}/${currentDay}/${year}` : `${currentDay}/${currentMonth}/${year}`);
      setShowInputModal(false);
    };

    const onCancel = () => setShowInputModal(false);

    return (
      <Modal open={showInputModal} onBackdropClick={onCancel}>
        {React.createElement(datePicker, { theme, onConfirm, onCancel })}
      </Modal>
    );
  };

  return (
    <Wrapper
      margin={margin}
      width={width}
      height={height}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      {renderBackdrop(backdropVisible)}
      {renderInputWrapper(type)}
      {renderErrorMessage(errorMessage)}
      {renderPlaceholder(placeholder)}
      {renderLeadingIcon(type, leadingIcon, color)}
      {renderTrailingIcon(!hideTrailingIcon, type, trailingIcon, color)}
      {renderDropdown(dropdownVisible, dropdownLimit, itemList, maskedValue)}
      {renderDatePicker(datePicker, showInputModal)}
    </Wrapper>
  );
};

export default Input;
