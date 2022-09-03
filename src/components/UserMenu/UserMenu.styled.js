import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogOutBtn = styled.button`
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
    margin-left: 8px;
    transition-property: background-color, color, transform;
    transition-duration: 300ms;
    transition-timing-function: linear;

    &.active {
      border: 1px solid #ffffff;
    }

    &:hover:not(.active) {
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

export const UserWrapper = styled.div`
    background-color: #ffffff;
    padding: 10px;
    border-radius: 4px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const UserText = styled.span`
    font-size: 16px;
    font-weight: 600;
    cursor: default;

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const UserNameText = styled.span`
    font-size: 16px;
    font-weight: 700;

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;