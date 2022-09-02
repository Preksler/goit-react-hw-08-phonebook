import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
   text-decoration: none;
   font-size: 18px;
   font-weight: 700;
   color: #ffffff;
   margin-right: 8px;
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