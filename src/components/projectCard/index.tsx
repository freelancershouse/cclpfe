import React, { FC } from "react";
import Text from "antd/lib/typography/Text";

import classes from "./projectCard.module.scss";
import { ThemedButton } from "@components/themedButton";

interface ICardProps {
    button: string;
    title: string;
    description: string;
}

export const ProjectCard: FC<ICardProps> = ({ title, button, description }) => {
    return (
        <div className={classes.cardWrapper}>
            <Text>{title}</Text>
            <Text className={classes.description}>{description}</Text>
            <ThemedButton>{button}</ThemedButton>
        </div>
    );
};
