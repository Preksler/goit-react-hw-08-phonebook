import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

export const Label = styled.label`
    color: #757575;
    font-weight: 400;
    font-size: 14px;
    margin-right: 8px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-right: 8px;
    box-sizing: border-box;

    border: 1px solid #0500C0;
    border-radius: 4px;
    outline: none;

    color: #757575;
    background-color: #ffffff;
    font-weight: 400;
    font-size: 14px;

    &:focus {
        border: 1px solid #0640fd;
    }

    @media screen and (max-width: 720px) {
        margin-bottom: 8px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    background-color: #0640fd;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 8px;
    transition-property: background-color, color, transform;
    transition-duration: 300ms;
    transition-timing-function: linear;

    &:hover {
      background-color: #0500C0;
    }

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`;

export const Icon = styled.span`
    display: flex;
    align-items: center;
    margin-left: 4px;
`;
    