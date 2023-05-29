import type { NextPage } from "next";
import Head from "next/head";
import { Input } from "./inputComponent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[40%] h-full flex flex-col items-center justify-center">
          <h1 className="bg-neutral-700 text-white text-xl font-bold w-full text-center p-3">
            I hope to be efficient for you
          </h1>
          <div className="w-full my-3">
            <Input id="username" label="Username" />
          </div>
          <div className="w-full">
            <Input id="password" label="Password" type="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
