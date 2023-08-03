import React from 'react'
import styles from './signUpStyles.module.css'

// Component to display the sign up page

const signUp = () => {
    return (
        <>
            <div className={styles.container}>
                <a href="/">
                    <img src="purpleBack.svg" alt='Back' className={styles.home} />
                </a>
                <div className={styles.appContainer}>
                    <img src="back.svg" className={styles.back} alt="back" />
                    <div className={styles.content}>

                        <div className={styles.logo}>
                            <img src="logo.png" alt="logo" />
                        </div>

                        <div className={styles.mainText}>
                            Sign up with &nbsp; <span>Email</span>
                            <div></div>
                        </div>
                        <div className={styles.subText}>
                            Enter your  details and dive into a realm <br /> of ancient wisdom! 💫
                        </div>

                        <div className={styles.email}>
                            <div className={styles.emailTxt}>
                                Your name
                            </div>

                            <div>
                                <input type="text" />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <div className={styles.emailTxt}>
                                Your email
                            </div>

                            <div>
                                <input type="email" />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <div className={styles.emailTxt}>
                                Password
                            </div>

                            <div>
                                <input type="password" id={styles.pass} />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <div className={styles.emailTxt}>
                                Confirm Password
                            </div>

                            <div>
                                <input type="password" id={styles.pass} />
                            </div>
                        </div>

                    </div>

                    <div className={styles.loginBtns}>
                        <div className={styles.button}>
                            <button>Create an account</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default signUp
