import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 38px;
    padding: 10px;
    box-sizing: border-box;
    margin-right: 8px;

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

export const Icon = styled.div`
    position: absolute;
    top: 6px;
    right: 14px;
    color: #757575;

    &:hover,
    &:focus {
        color: #0640fd;
    }
   
`;
