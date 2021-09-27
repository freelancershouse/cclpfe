import React, { FC } from "react";
import styled from "styled-components";

interface ItitleProps {
    title: string;
}

const StyledTitle = styled.span`
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    color: #121212;
`;

export const Title: FC<ItitleProps> = ({ title }) => (
    <StyledTitle>{title}</StyledTitle>
);
