import React, { FC } from "react";
import Text from "antd/lib/typography/Text";

import { ArrowRightOutlined } from "@ant-design/icons";

import classes from "./insightCard.module.scss";

interface InsightCardProps {
    id: string | number;
    image: string;
    title: string;
    author: string;
    date: string | Date;
    onInsightClick: (id: string | number) => void;
}

export const InsightCard: FC<InsightCardProps> = ({
    id,
    image,
    title,
    author,
    date,
    onInsightClick,
}) => {
    return (
        <div className={classes.insightCardWrapper}>
            <img src={image} alt={title} />
            <Text className={classes.title}>{title}</Text>
            <Text
                className={classes.description}
            >{`By ${author} | ${date}`}</Text>
            <div
                className={classes.learnMore}
                onClick={() => onInsightClick(id)}
            >
                <Text>Learn More</Text>
                <ArrowRightOutlined />
            </div>
        </div>
    );
};
