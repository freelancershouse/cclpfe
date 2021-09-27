import React, { FC } from "react";
import { Col, Layout, Row } from "antd";
import {
    FacebookFilled,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeFilled,
} from "@ant-design/icons";

import classes from "./layout.module.scss";

const { Content, Footer } = Layout;

interface ILayoutProps {
    children: JSX.Element[];
}

export const MainLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Layout className={classes.layoutWrapper}>
            <Row className={classes.promotionHeader}>
                <Col xs={0} sm={0} md={22} className={classes.promotionHeaderCol}>
                    Want to know how Blockchain can make a difference in your
                    Business? Get Expert Advice from our Team now!{" "}
                </Col>
                <Col xs={24} sm={24} md={2} className={classes.icons}>
                    <FacebookFilled />
                    <TwitterOutlined />
                    <InstagramOutlined />
                    <YoutubeFilled />
                </Col>
            </Row>
            <Content>
                <div className="site-layout-background">{children}</div>
            </Content>
            {/* <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
            </Footer> */}
        </Layout>
    );
};
