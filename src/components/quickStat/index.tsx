import React, { FC } from "react";
import Text from "antd/lib/typography/Text";

import classes from "./quickStat.module.scss";

interface ICardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

export const QuickStat: FC<ICardProps> = ({ title, icon, description }) => {
    return (
        <div className={classes.quickStats}>
            {icon}
            <Text className={classes.title}>{title}</Text>
            <Text className={classes.description}>{description}</Text>
        </div>
    );
};
