import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    outline: none;

    color: #757575;
    background-color: #ffffff;
    font-weight: 400;
    font-size: 14px;

    &:focus {
        border: 1px solid #0640fd;
    }
`;
