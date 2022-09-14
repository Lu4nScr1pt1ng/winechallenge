import type { NextPage } from "next";
import Head from "next/head";

//Components
import { Header } from "../components/Header";
import { Store } from "../components/Store";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wine - Catálogo de vinhos</title>
      </Head>
      <Header /> 
      <main className="bg-background">
        <Store />
      </main>
    </>
  );
};

export default Home;
