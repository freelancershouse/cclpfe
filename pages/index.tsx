import React from "react";
import Head from "next/head";

import { Main } from "@components";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Head>
                <title>Chaincode consultancy LLP</title>
            </Head>
            <Main />
        </div>
    );
};

export default Home;
