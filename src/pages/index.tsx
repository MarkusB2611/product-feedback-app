import { type NextPage } from "next";
import Head from "next/head";
import TitleBoard from "~/components/suggestions/title-board";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Feedback App - Suggestions</title>
        <meta name="description" content="Product feedback app" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <div className="mt-[94px] flex justify-center">
        <div className="w-[255px]">
          <TitleBoard />
          <div></div>
        </div>
        <main className=""></main>
      </div>
    </>
  );
};

export default Home;
