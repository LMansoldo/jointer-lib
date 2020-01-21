import styled from "styled-components";

export const Wrapper = styled.div`
  width: 302px;
  height: 502px;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
  background: #fff;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;
  padding: 0 6px;
  user-select: none;
`;

export const Body = styled.div`
  width: 100%;
  height: 314px;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 76px;
  box-sizing: border-box;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  user-select: none;
`;
