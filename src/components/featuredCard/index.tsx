import React, { FC } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background: linear-gradient(180deg, #6d7aff 0%, #6197ff 100%);
    border-radius: 9.67499px;
    height: 128px;
    width: 340px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: bold;
    font-size: 29.025px;
    line-height: 36px;
    color: #ffffff;
    padding: 28px 60px;
    @media (max-width: 768px) {
        height: 64px;
        max-width: 175px;
        width: 100%;
        font-size: 14px;
        line-height: 18px;
        padding: 10px 20px;
    }
`;

interface IFeaturedCard {
    title: string;
    onFeaturedCardClick?: () => void;
}

export const FeaturedCard: FC<IFeaturedCard> = ({
    title,
    onFeaturedCardClick,
}) => {
    return <StyledCard onClick={onFeaturedCardClick}>{title}</StyledCard>;
};
