// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MONIT - Digital Banking</title>
        <meta name="description" content="Experience the future with MONIT. Sign up for early access now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image src="/public/logo.png" alt="MONIT Logo" width={100} height={100} />
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image src="/imageee.jpg" alt="Phone Image" width={200} height={400} />
          </div>
          <div className={styles.textContainer}>
            <h1 
            className={styles.heading}>Experience the future with <span className={styles.highlight}>MONIT</span></h1>
            <p>Get ready for a new era in digital banking. Enjoy cutting-edge technology and convenience like never before.</p>
            <p>Be the first to know - sign up for early access to <span className={styles.highlight}>MONIT</span></p>
            <div className={styles.storeButtons}>
              <Image src="/googleplay.jpg" alt="Google Play" width={150} height={150} />
              <Image src="/app-store1.jpg" alt="App Store" width={150} height={150} />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.monitapp.ng" target="_blank" rel="noopener noreferrer">
          www.monitapp.ng
        </a>
      </footer>
    </div>
  );
}
