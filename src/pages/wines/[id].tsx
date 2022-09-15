import { useState, useEffect } from 'react'
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import api from '../../services/api';
import { MoreAboutWine } from '../../components/MoreAboutWine';

type WineProps = {
  id: number
  items?: [
    {
      price: number;
      id: number;
      name: string;
      image: string;
    }
  ];
}

export default function Wine({ id }: WineProps) {
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/products");

      setAllItems(response.data.items);
    }

    fetchData();
  }, []);


  return (
    <>
      <Head>
        <title>Wine - Detalhes do produto</title>
      </Head>
      <Header />
      <MoreAboutWine id={id} items={allItems} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
    const id = params?.id

  return {
    props: {
      id
    },
  };
};
