import styles from './pageStyles.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        {/* Home page */}
        <h1 className={styles.h1}>Hi, I am Aayush and this is my submission for the assignment.</h1>
        <h2 className={styles.h2}>Please find the links for different pages below: </h2>
        <ul className={styles.ul}>

          {/* Routing using next.js */}
          <li className={styles.li}><a href="/splash">Splash</a></li>
          <li className={styles.li}><a href="/onboarding">Onboarding</a></li>
          <li className={styles.li}><a href="/login">Login</a></li>
          <li className={styles.li}><a href="/signup">SignUp</a></li>
          <li className={styles.li}><a href="/message">Message</a></li>
      
        </ul>
      </div>
    </>
  )
}
