import React, { FC } from "react";
import { Card } from "antd";
import Text from "antd/lib/typography/Text";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;

interface IBlogCardProps {
    id: string | number;
    image: string;
    title: string;
    description: string;
    tag: string;
    onBlogClick: (id: string | number) => void;
}

export const BlogCard: FC<IBlogCardProps> = ({
    id,
    image,
    title,
    description,
    onBlogClick,
    tag,
}) => {
    return (
        <Card
            className="blogCardWrapper"
            cover={<img alt={title} src={image} />}
        >
            <Meta title={title} description={description} />
            <div className="cardFooter" onClick={() => onBlogClick(id)}>
                <Text>{tag}</Text>
                <ArrowRightOutlined />
            </div>
        </Card>
    );
};
