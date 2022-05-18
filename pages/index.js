import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='Ninjas' />
    </Head>
      <div>
        <h1 className={styles.title}>Hello Next!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          nulla accusantium deserunt. Quo veritatis quis ipsum voluptatibus ut
          omnis sapiente tempora rerum! Itaque nam maxime id numquam expedita
          aspernatur cupiditate.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          nulla accusantium deserunt. Quo veritatis quis ipsum voluptatibus ut
          omnis sapiente tempora rerum! Itaque nam maxime id numquam expedita
          aspernatur cupiditate.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
