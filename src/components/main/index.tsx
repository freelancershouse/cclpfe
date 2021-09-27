import React from "react";
import { Col, Form, Input, Row, Space, Typography } from "antd";

import {
    Arrow,
    BusinessAndTrade,
    CcLogo,
    CertificationFile,
    Chat,
    Coding,
    CustomerFeedback,
    Dots,
    Efficiency,
    Ellipse,
    EllipseBig,
    EllipseLight,
    Governance,
    Heart,
    Medal,
    MouseScroll,
    Rocket,
    Security,
    Send,
    Star,
    Tracibility,
    Transparancy,
    Circle,
    BlurCircle,
    SemiCircle,
} from "@components/icons";
import {
    Header,
    MainLayout,
    FeaturedCard,
    Title as HeadTitle,
    BlockchainEnhanceCard,
    ChooseUsCard,
    QuickStat,
} from "@components";
import {
    FacebookFilled,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeFilled,
} from "@ant-design/icons";
import { ThemedButton } from "@components/themedButton";

import classes from "./main.module.scss";
import { ServiceCard } from "@components/serviceCard";
import { BlogCard } from "@components/blogCard";
import { ProjectCard } from "@components/projectCard";
import { InsightCard } from "@components/insightCard";

const { Title, Paragraph, Text } = Typography;

const FEATURES: string[] = [
    "Hyperledger Development ",
    "DeFi Development",
    "NFT Development",
    "Obortech Smart Hub",
    "GDPR Compliance",
];

const BLOCKCHAIN_ENHANCE = [
    { icon: <Security />, title: "Enhanced Security" },
    { icon: <Transparancy />, title: "Greater transparency" },
    { icon: <Tracibility />, title: "Instant traceability" },
    { icon: <Efficiency />, title: "Increased efficiency" },
    { icon: <Governance />, title: "Decentralized Governance" },
];

const OFFERED_SERVICES = [
    {
        icon: <Security />,
        title: "Decentraized Finance",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
        icon: <Security />,
        title: "Non Fungible Tokens",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
        icon: <Security />,
        title: "Binance Smart Chain",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
        icon: <Security />,
        title: "Website Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
        icon: <Security />,
        title: "Mobile App Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
        icon: <Security />,
        title: "AI Technology",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
];

const SERVICES = [
    {
        id: 1,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Obortech Smart Hub",
        description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.  Voluptate exercitation incididunt.",
        tag: "Blockchain",
    },
    {
        id: 2,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "GDPR Compliance",
        description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.  Voluptate exercitation incididunt.",
        tag: "Blockchain",
    },
    {
        id: 3,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Live Ledger",
        description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.  Voluptate exercitation incididunt.",
        tag: "Blockchain",
    },
    {
        id: 4,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "True Title",
        description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.  Voluptate exercitation incididunt.",
        tag: "Blockchain",
    },
    {
        id: 5,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Instasure",
        description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.  Voluptate exercitation incididunt.",
        tag: "Blockchain",
    },
];

const CHOOSE_US_FEATURES = [
    {
        icon: <Heart />,
        title: "Focus on Innovation",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        icon: <Star />,
        title: "True Partners",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        icon: <Chat />,
        title: "DevOps",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
    {
        icon: <Send />,
        title: "Dedicated Teams",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
];

const QUICK_STATS = [
    {
        icon: <Medal />,
        title: "150+",
        description: "Industry Awards",
    },
    {
        icon: <Rocket />,
        title: "1500",
        description: "Projects",
    },
    {
        icon: <BusinessAndTrade />,
        title: "4",
        description: "Offices",
    },
    {
        icon: <CustomerFeedback />,
        title: "500",
        description: "Happy Clients",
    },
    {
        icon: <CertificationFile />,
        title: "4",
        description: "Certified PMP",
    },
    {
        icon: <Coding />,
        title: "100",
        description: "MM Lines of Code",
    },
];

const DELIVERED_PROJECTS = [
    {
        title: "Blockchain Consulting",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        button: "Know More",
    },
    {
        title: "Blockchain Consulting",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        button: "Know More",
    },
    {
        title: "Blockchain Consulting",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        button: "Know More",
    },
    {
        title: "Blockchain Consulting",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        button: "Know More",
    },
    {
        title: "Blockchain Consulting",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        button: "Know More",
    },
    {
        title: "Blockchain Consulting",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        button: "Know More",
    },
];

const INSIGHT_BLOGS = [
    {
        id: 1,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Financial Inclusion, Advanced by Digital Currencies",
        author: "By Jane Cooper",
        date: new Date(),
    },
    {
        id: 2,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Financial Inclusion, Advanced by Digital Currencies",
        author: "By Jane Cooper",
        date: new Date(),
    },
    {
        id: 3,
        image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "Financial Inclusion, Advanced by Digital Currencies",
        author: "By Jane Cooper",
        date: new Date(),
    },
];

export const Main: React.FC = () => {
    return (
        <MainLayout>
            <div className={classes.mainWrapper}>
                <Header />
                <Row className={classes.rowWrap}>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        className={classes.blockchainInfo}
                    >
                        <Typography>
                            <Title className={classes.title}>
                                Blockchain Technology
                            </Title>
                            <div className={classes.subTitle}>
                                We provide enterprise blockchain consulting
                            </div>
                            <Paragraph className={classes.description}>
                                Unleash full business potential with our cutting
                                edge blockchain solutions. We innovate, build
                                and integrate real-world blockchain
                                applications.
                            </Paragraph>
                        </Typography>

                        <ThemedButton>Consult for free</ThemedButton>
                    </Col>
                    <Col
                        xs={0}
                        sm={0}
                        md={9}
                        className={classes.blockchainImage}
                    >
                        <img src="/images/main-info.png" alt="blockchain" />
                        {/* <Ellipse />
                        <EllipseBig />
                        <EllipseLight /> */}
                        {/* <div className={classes.circleSvg}>
                            <Circle />
                        </div>
                        
                        <div className={classes.blueCircle}>
                            <BlurCircle />
                        </div>
                        
                        <div className={classes.semiCircle}>
                            <SemiCircle />
                        </div> */}
                        
                    </Col>
                </Row>

                <Row className={classes.scrollDown}>
                    <span className={classes.vericalLine} />
                    <MouseScroll />
                    <p>Scroll down</p>
                </Row>
            </div>

            <div className={classes.featured}>
                <Row>
                    <HeadTitle title="Featured" />
                </Row>
                <Row className={classes.featuredCardList}>
                    {FEATURES.map((feature) => {
                        return (
                            <Col
                                key={feature}
                                xs={12}
                                sm={12}
                                md={8}
                                className={classes.cardCol}
                            >
                                <FeaturedCard title={feature} />
                            </Col>
                        );
                    })}
                </Row>
            </div>

            <div className={classes.blockchainBusiness}>
                <Row className={classes.rowWrap} gutter={16}>
                    <Col xs={24} sm={24} md={12}>
                        <HeadTitle title="How Blockchain Enhances Your Business" />
                        <Typography>
                            <Paragraph className={classes.description}>
                                Blockchain for business uses a shared and
                                immutable ledger that can only be accessed by
                                members with permission. Network members control
                                what information each organization or member may
                                see, and what actions each can take. Blockchain
                                is sometimes called a trustless network not
                                because business partners don’t trust each
                                other, but because they don’t have to.
                            </Paragraph>
                        </Typography>
                    </Col>
                    <Col xs={0} sm={0} md={12}>
                        <img
                            src="/images/blockchain-business.png"
                            alt="blockchain"
                        />
                    </Col>
                </Row>
                <Row className={classes.blockchainFeatures}>
                    <Space size={[12, 16]} wrap className={classes.customSpace}>
                        {BLOCKCHAIN_ENHANCE.map(({ title, icon }) => (
                            <BlockchainEnhanceCard
                                key={title}
                                title={title}
                                icon={icon}
                            />
                        ))}
                    </Space>
                </Row>
            </div>

            <div className={classes.services}>
                <Row className={classes.serviceHead}>
                    <Col xs={24} sm={24} md={12} className={classes.title}>
                        <HeadTitle title="Services We Offer" />
                        <Typography>
                            <Paragraph className={classes.description}>
                                Nulla Lorem mollit cupidatat irure. Laborum
                                magna nulla duis ullamco cillum dolor. Voluptate
                                exercitation incididunt aliquip deserunt
                                reprehenderit elit laborum.
                            </Paragraph>
                        </Typography>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    {OFFERED_SERVICES.map(({ icon, title, description }) => (
                        <Col
                            key={title}
                            xs={12}
                            sm={12}
                            md={8}
                            className={classes.offerWrap}
                        >
                            <ServiceCard
                                icon={icon}
                                title={title}
                                description={description}
                            />
                        </Col>
                    ))}
                </Row>
                <Row className={classes.alotText}>
                    <Text>And a lot more for you</Text>
                </Row>
            </div>

            <div className={classes.solutions}>
                <Row className={classes.title}>
                    <Text> Our BlockChain Solutions </Text>
                </Row>
                <Row gutter={[16, 16]} className="solutionBlog">
                    {SERVICES.map(({ id, title, description, tag, image }) => {
                        return (
                            <Col key={id} xs={12} sm={12} md={8}>
                                <BlogCard
                                    id={id}
                                    tag={tag}
                                    title={title}
                                    image={image}
                                    description={description}
                                    onBlogClick={(id: string | number) => {
                                        console.log({ id });
                                    }}
                                />
                            </Col>
                        );
                    })}
                </Row>
                <Row className={classes.viewMore}>
                    <ThemedButton>View More</ThemedButton>
                </Row>
            </div>

            <div className={classes.readyStart}>
                <Row className={classes.bg}>
                    <Col flex={1} className={classes.cta}>
                        <div className={classes.title}>
                            Ready to get <br /> Started?
                        </div>
                        <div>
                            <ThemedButton>Get a quote</ThemedButton>
                        </div>
                        <Arrow />
                    </Col>
                    <Col flex={3} className={classes.image}>
                        <div>
                            <Dots />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={classes.chooseUs}>
                <Row gutter={32}>
                    <Col xs={0} sm={0} md={12} className={classes.image}>
                        <img
                            src="/images/blockchain-business.png"
                            alt="blockchain"
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <HeadTitle title="Why Choose Us" />
                        <Typography>
                            <Paragraph className={classes.description}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. <br /> <br />
                                Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default
                                model text, and a search for 'lorem ipsum' will
                                uncover many web sites still in their infancy.
                            </Paragraph>
                        </Typography>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} className={classes.features}>
                    {CHOOSE_US_FEATURES.map(({ icon, title, description }) => (
                        <Col key={title} xs={12} sm={12} md={12}>
                            <ChooseUsCard
                                icon={icon}
                                title={title}
                                description={description}
                            />
                        </Col>
                    ))}
                </Row>
            </div>

            <div className={classes.quickStats}>
                <Row className={classes.title}>
                    <Col>
                        <Text>Quick Stats</Text>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} className={classes.statsList}>
                    {QUICK_STATS.map(({ icon, title, description }, index) => {
                        return (
                            <Col
                                key={index}
                                xs={8}
                                sm={8}
                                md={4}
                                className={classes.stats}
                            >
                                <QuickStat
                                    icon={icon}
                                    title={title}
                                    description={description}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </div>

            <div className={classes.weWork}>
                <Row className={classes.title}>
                    <HeadTitle title="We Work with" />
                </Row>
                <Row gutter={[16, 16]} className={classes.companies}>
                    <Col
                        xs={24}
                        sm={24}
                        md={8}
                        className={classes.clientfeedback}
                    >
                        <Text>
                            customers in over 120 countries growing their
                            businesses with Blockchain Consulting
                        </Text>
                    </Col>
                    <Col xs={24} sm={24} md={16} className={classes.imgWrap}>
                        <img src="/images/we-work.png" alt="we-work" />
                    </Col>
                </Row>
                <Row className={classes.bg}>
                    <Col flex={1} className={classes.image}></Col>
                    <Col flex={3} className={classes.cta}>
                        <div className={classes.title}>
                            Still Have some Questions in Mind? Don't Worry.{" "}
                            <br /> Get FREE Consultation from our Experts
                        </div>
                        <div>
                            <ThemedButton>Let's talk</ThemedButton>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={classes.deliveredProject}>
                <Row className={classes.title}>
                    <HeadTitle title="Explore Projects Delivered by ChainCode" />
                </Row>

                <Row gutter={[16, 16]} className={classes.projectList}>
                    {DELIVERED_PROJECTS.map(
                        ({ button, title, description }, index) => {
                            return (
                                <Col
                                    key={index}
                                    xs={12}
                                    sm={12}
                                    md={8}
                                    className={classes.project}
                                >
                                    <ProjectCard
                                        button={button}
                                        title={title}
                                        description={description}
                                    />
                                </Col>
                            );
                        },
                    )}
                </Row>
            </div>

            <div className={classes.latestInsights}>
                <Row className={classes.title}>
                    <HeadTitle title="Out Latest insights" />
                </Row>

                <Row gutter={[16, 16]} className={classes.projectList}>
                    {INSIGHT_BLOGS.map(({ id, author, image, title, date }) => {
                        return (
                            <Col
                                key={id}
                                xs={12}
                                sm={12}
                                md={8}
                                className={classes.insightCard}
                            >
                                <InsightCard
                                    id={id}
                                    author={author}
                                    image={image}
                                    title={title}
                                    date={date}
                                    onInsightClick={(id) => console.log(id)}
                                />
                            </Col>
                        );
                    })}
                </Row>

                <Row className={classes.readMore}>
                    <ThemedButton>Read More</ThemedButton>
                </Row>
            </div>

            <div className={classes.footer}>
                <Row className={classes.footerRow}>
                    <Col xs={12} sm={12} md={6}>
                        <Space direction="vertical" className={classes.logo}>
                            <CcLogo />
                            <Text> Follow us</Text>
                            <div className={classes.socialIcon}>
                                <FacebookFilled />
                                <TwitterOutlined />
                                <InstagramOutlined />
                                <YoutubeFilled />
                            </div>
                        </Space>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <Space
                            direction="vertical"
                            className={classes.footerServices}
                        >
                            <Text className={classes.title}>
                                {" "}
                                Our Services{" "}
                            </Text>
                            <Text> Decentralized Finance </Text>
                            <Text> Non Fungible Tokens </Text>
                            <Text> Binance Smart Chain </Text>
                            <Text> App Development </Text>
                            <Text> Web Development </Text>
                        </Space>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <Space
                            direction="vertical"
                            className={classes.footerServices}
                        >
                            <Text className={classes.title}>
                                {" "}
                                Our Services{" "}
                            </Text>
                            <Text> Decentralized Finance </Text>
                            <Text> Non Fungible Tokens </Text>
                            <Text> Binance Smart Chain </Text>
                        </Space>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <Space
                            direction="vertical"
                            className={classes.footerServices}
                        >
                            <Text className={classes.title}>
                                {" "}
                                Our Services{" "}
                            </Text>
                            <Text> Decentralized Finance </Text>
                            <Text> Non Fungible Tokens </Text>
                            <Text> Binance Smart Chain </Text>
                            <Text> App Development </Text>
                        </Space>
                    </Col>
                </Row>

                {/* <Row className={classes.floatingForm}>
                    <Col xs={24} sm={24} md={12}>
                        <div className={classes.contactForm}>
                            <HeadTitle title="Ready to Get Started?" />
                            <Text className={classes.description}>
                                Have an idea? Let’s discuss it!
                            </Text>
                            <Form>
                                <Form.Item label="First Name">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input type="email" />
                                </Form.Item>
                                <Form.Item label="Phone">
                                    <Input type="number" />
                                </Form.Item>
                                <Form.Item label="How can we help you">
                                    <Input />
                                </Form.Item>
                                <div className={classes.formFooter}>
                                    <Text className={classes.footerText}>
                                        *As a result of submitting completed
                                        “Contact Us” form, your personal data
                                        will be processed by ChainCode. We are
                                        committed to respecting your privacy.
                                        Read our Privacy Policy.
                                    </Text>
                                    <ThemedButton>Send Request</ThemedButton>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={12} className={classes.image}>
                        <img src="/images/main-info.png" alt="blockchain" />
                    </Col>
                </Row> */}
            </div>
        </MainLayout>
    );
};
