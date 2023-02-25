import { type NextPage } from "next";
import Head from "next/head";

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
          <div className="h-[137px] w-full rounded-[10px] bg-gradient-desktop pl-6 pt-[62px]">
            <h1 className="text-h2 text-white">Frontend Mentor</h1>
            <div className="text-body2 text-white opacity-75">
              Feedback Board
            </div>
          </div>
          <div></div>
        </div>
        <main className=""></main>
      </div>
    </>
  );
};

export default Home;
