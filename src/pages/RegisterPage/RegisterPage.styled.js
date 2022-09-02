import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 8px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
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

export const Button = styled.button`
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    color: #ffffff;
    background-color: #0640fd;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 8px;

    &:hover {
      background-color: #0600fd;
    }
`;
    