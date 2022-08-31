import styled from "styled-components";
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
    font-size: 26px;
    font-weight: 700;
    text-decoration: none;
    color: black;
    &:hover {
        color: orangered;
    }
`;