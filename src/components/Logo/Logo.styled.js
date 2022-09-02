import styled from "styled-components";
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: black;
    border-radius: 4px;
    padding: 8px;
    margin-right: 8px;

    &:hover {
        background-color: #0500C0;
    }

    @media screen and (max-width: 720px) {
        display: none;
    }
`;