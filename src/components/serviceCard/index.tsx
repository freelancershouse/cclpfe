import React, { FC } from "react";
import Text from "antd/lib/typography/Text";

import classes from "./serviceCard.module.scss";

interface ICardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

export const ServiceCard: FC<ICardProps> = ({ title, icon, description }) => {
    return (
        <div className={classes.cardWrapper}>
            {icon}
            <Text>{title}</Text>
            <Text className={classes.description}>{description}</Text>
        </div>
    );
};
