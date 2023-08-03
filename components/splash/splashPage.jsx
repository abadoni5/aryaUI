import React from 'react'
import styles from 'components/splash/splashStyles.module.css'

// Component to display the splash page

const splashPage = () => {
    return (
        <div className={styles.container}>
            <a href="/">
                <img src="purpleBack.svg" alt='Back' className={styles.home} />
            </a>
            <div className={styles.appContainer}>
                <img src="logo.png" alt="logo" />
                <p className={styles.text}>Back to Vedas 🕉</p>
            </div>
        </div>
    )
}

export default splashPage
