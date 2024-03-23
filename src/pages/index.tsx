import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Project',
  description: 'carousel using swiper library',
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
      </Head>
      <div className="heading">Hello Ali!</div>
    </div>
  );
}
