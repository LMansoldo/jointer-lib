import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.color || `#000`};
    border-radius: 15px;
    padding: 15px;
`;

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`;

export const MiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`;