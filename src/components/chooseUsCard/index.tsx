import React, { FC } from "react";

import Text from "antd/lib/typography/Text";

import classes from "./chooseUsCard.module.scss";

interface ICardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

export const ChooseUsCard: FC<ICardProps> = ({ icon, title, description }) => {
    return (
        <div className={classes.chooseUsCard}>
            <div>{icon}</div>
            <div className={classes.meta}>
                <Text>{title}</Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
};
