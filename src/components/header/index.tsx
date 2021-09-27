import React from "react";
import { Col, Row, Layout, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { ChaincodeLogo, ThemedButton } from "@components";

import classes from "./header.module.scss";

const { Header: AntDHeader } = Layout;
const { SubMenu } = Menu;

export const Header: React.FC = () => {
    return (
        <AntDHeader className={classes.header}>
            <Row className={classes.width100}>
                <Col xs={8} sm={8} md={6} className={classes.logo}>
                    <ChaincodeLogo />
                </Col>
                <Col xs={16} sm={16} md={14} className={classes.menu}>
                    <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">About us</Menu.Item>
                        <Menu.Item key="2">Blockchain solutions</Menu.Item>
                        <Menu.Item key="3">Case studies</Menu.Item>
                        <SubMenu key="4" title="Services">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col xs={0} sm={0} md={4} className={classes.cta}>
                    <ThemedButton>Let's talk</ThemedButton>
                    <SearchOutlined height={16} width={16} color="#121212" />
                </Col>
            </Row>
        </AntDHeader>
    );
};
