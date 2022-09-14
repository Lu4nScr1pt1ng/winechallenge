import type { NextPage } from "next";
import Head from "next/head";

//Components
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine - Catálogo de vinhos</title>
      </Head>
      <Header />
      
      <div className="overflow-hidden max-w-[1600px] mx-auto bg-background">
        olá
      </div>
    </>
  );
};

export default Home;
