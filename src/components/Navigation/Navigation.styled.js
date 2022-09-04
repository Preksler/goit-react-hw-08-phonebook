import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
   display: flex;
   align-items: center;
   text-decoration: none;
   font-size: 18px;
   font-weight: 700;
   color: #ffffff;
   margin-right: 8px;
   cursor: pointer;
   border: none;
   border-radius: 4px;
   padding: 8px;
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
        font-size: 16px;
    }

   @media screen and (max-width: 480px) {
      font-size: 14px;
   }
`;

export const Icon = styled.span`
   display: flex;
   align-items: center;
   margin-right: 4px;
`;
