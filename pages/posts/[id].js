//import Layout from "../components/layout";
import Layout from "../../pages/components/layout";
//import Date from "../../pages/components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXL}>{postData.title}</h1>

      <br />
      {postData.id}
      <br />
      {postData.date}
      {/* <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div> */}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
