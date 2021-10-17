import Head from 'next/head';
import { request } from '../lib/datocms';
import { StructuredText } from 'react-datocms';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen pt-8 md:pt-16 text-gray-800 dark:bg-brand-dark dark:text-brand-light">
      <Head>
        <title>Front-End Web Developer - Faris Han</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Faris Han or Faris Hanugraha is a Front-End Web Developer and browser-based game development enthusiast."
        />
      </Head>

      <div className="absolute top-0 left-0 w-full">
        <svg
          id="wave"
          className="object-cover object-top"
          style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 211, 105, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,49L120,89.8C240,131,480,212,720,228.7C960,245,1200,196,1440,220.5C1680,245,1920,343,2160,351.2C2400,359,2640,278,2880,236.8C3120,196,3360,196,3600,236.8C3840,278,4080,359,4320,334.8C4560,310,4800,180,5040,122.5C5280,65,5520,82,5760,122.5C6000,163,6240,229,6480,269.5C6720,310,6960,327,7200,310.3C7440,294,7680,245,7920,245C8160,245,8400,294,8640,269.5C8880,245,9120,147,9360,130.7C9600,114,9840,180,10080,171.5C10320,163,10560,82,10800,89.8C11040,98,11280,196,11520,228.7C11760,261,12000,229,12240,253.2C12480,278,12720,359,12960,351.2C13200,343,13440,245,13680,179.7C13920,114,14160,82,14400,98C14640,114,14880,180,15120,245C15360,310,15600,376,15840,359.3C16080,343,16320,245,16560,196C16800,147,17040,147,17160,147L17280,147L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 211, 105, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 50px)', opacity: 0.9 }}
            fill="url(#sw-gradient-1)"
            d="M0,441L120,392C240,343,480,245,720,187.8C960,131,1200,114,1440,130.7C1680,147,1920,196,2160,212.3C2400,229,2640,212,2880,171.5C3120,131,3360,65,3600,98C3840,131,4080,261,4320,326.7C4560,392,4800,392,5040,367.5C5280,343,5520,294,5760,253.2C6000,212,6240,180,6480,179.7C6720,180,6960,212,7200,261.3C7440,310,7680,376,7920,383.8C8160,392,8400,343,8640,277.7C8880,212,9120,131,9360,147C9600,163,9840,278,10080,310.3C10320,343,10560,294,10800,302.2C11040,310,11280,376,11520,408.3C11760,441,12000,441,12240,424.7C12480,408,12720,376,12960,367.5C13200,359,13440,376,13680,334.8C13920,294,14160,196,14400,147C14640,98,14880,98,15120,106.2C15360,114,15600,131,15840,155.2C16080,180,16320,212,16560,236.8C16800,261,17040,278,17160,285.8L17280,294L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
          ></path>
        </svg>
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center relative z-10">
        <div className="w-full max-w-4xl -mx-3">
          <div className="w-full px-3">
            <div className="backdrop-blur-3xl rounded-xl p-6 shadow-xl transition-colors duration-200">
              <h1 className="text-6xl font-bold lg:text-brand-dark text-left sm:text-center">
                Faris{' '}
                <span title="This is an abbreviation, not family name!">
                  Han
                </span>
              </h1>

              <p className="mt-3 text-2xl text-left sm:text-center">
                <span
                  className="hidden sm:inline py-0.5 px-2 bg-blue-600 rounded text-xs text-white relative -top-1"
                  title="Indonesian"
                >
                  id_ID
                </span>{' '}
                <span className="pt-2 lg:text-brand-dark">
                  Front-End Web Developer
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mt-6 -mx-3">
          <a
            href="https://www.linkedin.com/in/faris-hanugraha/"
            className="w-full md:w-1/2 px-3"
            target="_blank"
            rel="noopener noreferrer"
            title="Faris Hanugraha - Front-end Developer at Hubton Indonesia"
          >
            <div className="p-6 mt-6 text-left shadow-md w-full rounded-xl hover:shadow-xl duration-100 dark:hover:text-brand-primary transition-all focus:text-blue-600 bg-brand-dark">
              <h2 className="text-2xl font-bold">LinkedIn &rarr;</h2>
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
            <div className="p-6 mt-6 text-left shadow-md w-full rounded-xl hover:shadow-xl duration-100 dark:hover:text-brand-primary transition-all focus:text-blue-600 bg-brand-dark">
              <h2 className="text-2xl font-bold">GitHub &rarr;</h2>
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
            <div className="p-6 mt-6 text-left shadow-md w-full rounded-xl hover:shadow-xl duration-100 dark:hover:text-brand-primary transition-all focus:text-blue-600 bg-brand-dark">
              <h2 className="text-2xl font-bold">Quora &rarr;</h2>
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
            <div className="p-6 mt-6 text-left shadow-md w-full rounded-xl hover:shadow-xl duration-200 dark:hover:text-brand-primary transition-all focus:text-blue-600 bg-brand-dark">
              <h2 className="text-2xl font-bold">StackOverflow &rarr;</h2>
              <p className="mt-4 text-xl">
                Watch me getting my next badge:
                <br />
                Curious!
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mt-6 -mx-3">
          <div className="px-3 w-full">
            <div className="flex flex-wrap justify-center p-6 mt-6 text-left shadow-md w-full rounded-xl hover:shadow-xl duration-100 transition-all focus:text-blue-600 bg-brand-dark">
              <nav className="space-x-4 space-y-4">
                <Link href="/gamedev">
                  <a className="underline dark:hover:text-brand-primary">
                    Game Dev
                  </a>
                </Link>
                <Link href="/game-mechanic">
                  <a className="underline dark:hover:text-brand-primary">
                    Game Mechanic
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {data && data.allArticles && (
          <>
            <div className="w-full max-w-4xl mt-12">
              <h3 className="text-2xl mx-3 border-t dark:border-brand-medium-dark pt-12">
                Articles
              </h3>
            </div>
            <div className="w-full max-w-4xl mt-6 mb-8 -mx-3 text-left">
              <div className="px-3">
                <div className="border-b border-t pt-6 sm:pt-0 sm:border-none h-96 overflow-y-auto">
                  {data.allArticles.map((article) => (
                    <div key={article.id} className="mb-6">
                      <div
                        className="border border-transparent dark:hover:border-brand-medium-dark rounded-xl p-6 backdrop-blur-xl transition-colors duration-200"
                        title={article.title}
                      >
                        <h4 className="text-2xl font-bold mb-4 cursor-default">
                          {article.title}
                        </h4>
                        <div className="text-blue-900 dark:text-brand-light opacity-80">
                          <StructuredText data={article.content} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <div className="fixed w-full bottom-0 left-0">
        <svg
          style={{ transform: 'rotate(0deg)', opacity: 0.3 }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(37, 99, 235, 1)" offset="0%"></stop>
              <stop
                stopColor="rgba(122.995, 156.621, 230.382, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,392L60,351.2C120,310,240,229,360,220.5C480,212,600,278,720,261.3C840,245,960,147,1080,122.5C1200,98,1320,147,1440,212.3C1560,278,1680,359,1800,400.2C1920,441,2040,441,2160,383.8C2280,327,2400,212,2520,155.2C2640,98,2760,98,2880,106.2C3000,114,3120,131,3240,147C3360,163,3480,180,3600,187.8C3720,196,3840,196,3960,187.8C4080,180,4200,163,4320,130.7C4440,98,4560,49,4680,81.7C4800,114,4920,229,5040,269.5C5160,310,5280,278,5400,294C5520,310,5640,376,5760,383.8C5880,392,6000,343,6120,302.2C6240,261,6360,229,6480,196C6600,163,6720,131,6840,171.5C6960,212,7080,327,7200,343C7320,359,7440,278,7560,269.5C7680,261,7800,327,7920,294C8040,261,8160,131,8280,89.8C8400,49,8520,98,8580,122.5L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
          ></path>
        </svg>
      </div>

      <footer className="flex flex-wrap items-center sm:justify-center w-full sm:h-24 shadow-xl dark:border-brand-medium-dark mt-12 px-5 relative z-10 backdrop-blur-xl pl-9">
        <a
          href="mailto:farishanugraha@gmail.com"
          className="w-full sm:w-auto block sm:inline py-5 sm:py-0 sm:mr-4 sm:border-r dark:border-brand-medium-dark sm:pr-4 hover:underline"
          title="Get in touch with Faris Han Hanugraha"
        >
          Faris Han - 2021
        </a>
        <a
          className="flex flex-wrap items-center justify-center  py-5 sm:py-0 mb-5 sm:mb-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2 hover:underline">Powered by</span>{' '}
          <span className="bg-white py-0.5 pl-1 pr-2 rounded">
            <span className="relative -bottom-0.5">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={70}
                height={16}
              />
            </span>
          </span>
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
