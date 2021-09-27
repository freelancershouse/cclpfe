import React, { FC } from "react";
import Text from "antd/lib/typography/Text";

import classes from "./blockchainEnhanceCard.module.scss";

interface ICardProps {
    icon: JSX.Element;
    title: string;
}

export const BlockchainEnhanceCard: FC<ICardProps> = ({ title, icon }) => {
    return (
        <div className={classes.cardWrapper}>
            {icon}
            <Text>{title}</Text>
        </div>
    );
};
