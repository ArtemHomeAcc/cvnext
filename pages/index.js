import MainPage from '@/components/MainPage/MainPage';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CV Artem Zakharchuk</title>
        <meta name="description" content="New version of CV based on Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
