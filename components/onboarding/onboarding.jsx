import React from 'react'
import styles from './onboarding.module.css'

// Component to display the onboarding page

const onboarding = () => {
  return (
    <div className={styles.container}>
      <a href="/">
        <img src="purpleBack.svg" alt='Back' className={styles.home} />
      </a>
      <div className={styles.appContainer}>
        {/* image */}
        <div className={styles.image}>
          <img src="arya.png" alt="arya" />
          <button className={styles.aryaBtn}>Arya, AI Acharya</button>
        </div>

        {/* text */}
        <div className={styles.text}>
          <div className={styles.headText}>
            Discover the <br /> timeless wisdom of the <br />
            <span>Vedas.</span>
          </div>

          <div className={styles.subText}>
            Sign up and <span>journey through ancient <br /> knowledge with Arya 🌟</span>
          </div>

          <div className={styles.socials}>
            <img src="socials.png" alt="socials" />
          </div>

          <div className={styles.or}>
            <img src="or.png" alt="or" />
          </div>

          <div className={styles.button}>
            <button>Sign Up with mail</button>
          </div>

          <div className={styles.finalText}>
            Existing account? &nbsp; <span>Log in</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default onboarding
