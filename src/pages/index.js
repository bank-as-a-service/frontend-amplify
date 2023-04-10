// pages/index.js
import Image from 'next/image';
import Link from "next/link";

export default function Home({ formattedDate }) {
  return (
    <>
        <h1>Static page</h1>
        <Image
            src="/images/profile.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        <p>This page is static. It was built on {formattedDate}.</p>
        <p>
            <Link href="/ssr">View a server-side rendered page.</Link>
        </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}