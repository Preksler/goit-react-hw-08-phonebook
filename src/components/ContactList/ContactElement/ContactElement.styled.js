import styled from "styled-components";

export const ListItem = styled.li`
    margin-bottom: 8px;
    padding: 10px 15px;
    background-color: #ffffff;
    border: 1px solid #0640fd;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Name = styled.div`
    font-size: 16px;
    font-weight: 600;

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`;

export const Number = styled.div`
    font-size: 16px;
    font-weight: 500;

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`;

export const ListBTN = styled.button`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    background-color: #0640fd;
    border-radius: 4px;
    cursor: pointer;
    margin-left: auto;
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

export const WrapperBTN = styled.div`
    display: flex;
    align-items: center;
`;
