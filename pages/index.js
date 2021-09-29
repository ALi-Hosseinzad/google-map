import PageLayout from "../src/components/pageLayout/PageLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
const Home = dynamic(() => import("../src/features/home/Home"));

export default function Index() {
  return (
    <PageLayout fullWidth>
      <Head>
        <title>{"Add location"}</title>
      </Head>
      <Home />
    </PageLayout>
  );
}
