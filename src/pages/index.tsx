import Head from "next/head";
import { type NextPage } from "next";

import Assets from "~/components/Assets";
import Indices from "~/components/Indices";
import UpdateArea from "~/components/UpdateArea";

import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Next Dapp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <UpdateArea />
        <Indices />
        <Assets />

        <Footer />
      </>
    </>
  );
};

export default Home;
