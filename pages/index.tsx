import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { useGetWeather } from '../hooks/useRequest';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { weather, isLoading, error } = useGetWeather();

  const icon = weather?.current?.condition?.icon;
  const iconUrl = `https:${weather?.current?.condition?.icon}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Nice Weather</title>
        <meta name="description" content="Nice and simple weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <section className={styles.top}>
              <h1 className={styles.title}>
                {weather?.current?.condition?.text}.
              </h1>
              <button className={styles.location}>
                {weather?.location.name}
              </button>
            </section>

            <section className={styles.bottom}>
              <div>
                {weather?.current.last_updated}
                {icon ? (
                  <span>
                    <Image
                      src={iconUrl}
                      alt={weather?.current?.condition?.text}
                      width={50}
                      height={50}
                    />
                  </span>
                ) : null}
              </div>

              <p className={styles.temp}>
                <span>{Math.round(weather?.current?.temp_c)}</span>
                <span className={styles.unit}>C</span>
              </p>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
