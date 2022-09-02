import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogOutBtn = styled.button`
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    color: #ffffff;
    background-color: #0640fd;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 8px;

    &.active {
      border: 1px solid #ffffff;
    }

    &:hover:not(.active) {
      background-color: #0600fd;
    }
`;

export const UserText = styled.span`
    font-size: 16px;
    font-weight: 600;
    cursor: default;
`;

export const UserNameText = styled.span`
    font-size: 16px;
    font-weight: 700;
    margin-right: 15px;
`;