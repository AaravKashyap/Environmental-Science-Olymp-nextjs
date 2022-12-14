import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Envrionemntal Science Olympiad</title>
        <meta name="description" content="Generated by AOS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.environmentalscience.org/">the Environmental Science Olympiad!</a>
        </h1>

        <p className={styles.description}>
          Get started by {' '}
          <a href ="">signing up!</a>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Home Page &rarr;</h2>
            <p>Directs you back to the Home Page!</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Learn More &rarr;</h2>
            <p>About us and the Environmental Science Olympiad!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Log in &rarr;</h2>
            <p>Log in to your existing account!</p>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Sign up &rarr;</h2>
            <p>
              Sign up with an account to get started!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
          Created by <h1>   AOS</h1>
          
        
      </footer>
    </div>
  )
}
