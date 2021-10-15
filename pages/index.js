import Head from 'next/head';
import { request } from '../lib/datocms';
import { StructuredText } from 'react-datocms';
import Image from 'next/next';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allArticles (first: $limit) {
    id
    title
    _status
    _firstPublishedAt
    content {
      value
    }
    thumbnail {
      url
      alt
    }
  }
  _allArticlesMeta {
    count
  }
}
`;

export default function Home({ data }) {
  return (
    <div className="min-h-screen pt-12 md:pt-24 text-gray-800">
      <Head>
        <title>Front-End Web Developer - Faris Han</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Faris Han or Faris Hanugraha is a Front-End Web Developer and browser-based game development enthusiast."
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-6xl font-bold">
          Faris{' '}
          <span
            className="text-blue-600"
            title="This is an abbreviation, not family name!"
          >
            Han
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          <span
            className="py-0.5 px-2 bg-yellow-500 rounded text-xs text-white relative -top-1"
            title="Indonesian"
          >
            id_ID
          </span>{' '}
          <span className="pt-2">Front-End Web Developer</span>
        </p>

        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mt-6 -mx-3">
          <a
            href="https://www.linkedin.com/in/faris-hanugraha/"
            className="w-full md:w-1/2 px-3"
            target="_blank"
            rel="noopener noreferrer"
            title="Faris Hanugraha - Front-end Developer at Hubton Indonesia"
          >
            <div className="p-6 mt-6 text-left border w-full  rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">LinkedIn &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about my career as a front-end web
                developer.
              </p>
            </div>
          </a>

          <a
            href="https://github.com/farishan"
            className="w-full md:w-1/2 px-3"
            target="_blank"
            rel="noopener noreferrer"
            title="Faris Han - Front-end Developer. Web-based Game Development Enthusiast. Currently learning Digital Project Management."
          >
            <div className="p-6 mt-6 text-left border w-full  rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about me in a jungle of my unfinished side-projects!
              </p>
            </div>
          </a>

          <a
            href="https://id.quora.com/profile/Faris-Hanugraha"
            className="w-full md:w-1/2 px-3"
            target="_blank"
            title="Faris Han - Non-Formal di Pemrograman & Web Development, DOES University Lulus 2018"
            rel="noopener noreferrer"
          >
            <div className="p-6 mt-6 text-left border w-full  rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Quora &rarr;</h3>
              <p className="mt-4 text-xl">
                Mostly answering questions in Bahasa Indonesia about web
                developement.
              </p>
            </div>
          </a>

          <a
            href="https://stackoverflow.com/users/8326275/faris-han"
            className="w-full md:w-1/2 px-3"
            target="_blank"
            rel="noopener noreferrer"
            title="Faris Han on Stackoverflow"
          >
            <div className="p-6 mt-6 text-left border w-full  rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">StackOverflow &rarr;</h3>
              <p className="mt-4 text-xl">
                Watch me getting my next badge:
                <br />
                Curious!
              </p>
            </div>
          </a>
        </div>

        {data && data.allArticles && (
          <>
            <div className="w-full max-w-4xl mt-12">
              <h3 className="text-2xl mx-3 border-t pt-12">Articles</h3>
            </div>
            <div className="w-full max-w-4xl mt-6 mb-8 h-96 overflow-y-auto -mx-3 text-left">
              {data.allArticles.map((article) => (
                <div key={article.id} className="px-3 mb-6">
                  <div className="border rounded-xl p-6" title={article.title}>
                    <h4 className="text-2xl font-bold mb-4">{article.title}</h4>
                    <div className="color-blue-900 opacity-80">
                      <StructuredText data={article.content} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t mt-12 px-5">
        <a
          href="mailto:farishanugraha@gmail.com"
          className="mr-4 border-r pr-4 hover:underline"
        >
          farishanugraha at gmail dot com{' '}
        </a>
        <a
          className="flex flex-wrap items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={70}
            height={16}
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}
