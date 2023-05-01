// pages/ssr.js
import Head from "next/head";
import Link from "next/link";
export default function SSR({ formattedDate }) {
    return (
      <>
          <Head>
              <title>SSR Example</title>
          </Head>
          <Script
              src="https://connect.facebook.net/en_US/sdk.js"
              strategy="lazyOnload"
              onLoad={() =>
                  console.log(`script loaded correctly, window.FB has been populated`)
              }
          />
          <h1>Server-side rendered page</h1>
          <p>This page is server-side rendered. It was rendered on {formattedDate}.</p>
          <p><Link href="/">View a static page.</Link></p>
      </>
    );
  }
  
  export async function getServerSideProps() {
    const renderDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "long",
    }).format(renderDate);
    console.log(
      `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
    );
    return { props: { formattedDate } };
  }