import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 4px;
    color: #757575;
    font-weight: 400;
    font-size: 14px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px;

    border: 1px solid #0500C0;
    border-radius: 4px;
    outline: none;

    color: #757575;
    
    background-color: #ffffff;
    font-weight: 400;
    font-size: 14px;

    &:focus {
        border: 1px solid #2196f3;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    background-color: #0101ff;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 8px;
    transition-property: background-color, color, transform;
    transition-duration: 300ms;
    transition-timing-function: linear;

    &:hover,
    &:focus {
        background-color: #0500C0;
    }

    &:last-child {
        margin-right: 0;
    }
`;
    