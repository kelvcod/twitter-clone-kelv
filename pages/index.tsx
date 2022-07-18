import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

function Home() {
  return (
    <div className="">
      <Head>
        <title> Twitter</title>
        <link rel="icon" href="/favicon.ico" />

        <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <Feed />
          <Widgets />

          {/*Modal*/}
        </main>
      </Head>
    </div>
  );
}

export default Home;
