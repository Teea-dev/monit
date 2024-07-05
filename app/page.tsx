import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MONIT - Digital Banking</title>
        <meta name="description" content="Experience the future with MONIT. Sign up for early access now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logo}>
        {/* <Image src="/logo.png" alt="MONIT Logo" width={110} height={110} /> */}
      </div>

      <main className={styles.main}>
        <div className={styles.content}>
        <div className={styles.imageContainer}>
            <Image src="/imageee.jpg" alt="Phone Image" width={200} height={400} />
          </div>
         
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Experience the future with <span className={styles.highlight}>MONIT</span></h1>
            <p>Get ready for a new era in digital banking. Enjoy cutting-edge technology and convenience like never before.</p>
            <p>Be the first to know - sign up for early access to <span className={styles.highlight}>MONIT</span></p>
            <div className={styles.storeButtons}>
              <Image src="/googleplay.png" alt="Google Play" width={128} height={38} />
              <Image src="/app-store1.png" alt="App Store" width={128} height={48} />
            </div>
          </div>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://monit-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
          www.monitapp.ng
        </a>
      </footer>
    </div>
  );
}
