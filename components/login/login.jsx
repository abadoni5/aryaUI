import React from "react";
import styles from "./loginStyles.module.css";

// login page with email and password

const login = () => {
    return (
        <>
            <div className={styles.container}>
                <a href="/">
                    <img src="purpleBack.svg" alt="Back" className={styles.home} />
                </a>
                <div className={styles.appContainer}>
                    <img src="back.svg" className={styles.back} alt="back" />
                    <div className={styles.content}>
                        <div className={styles.mainText}>
                            <span>Login</span> &nbsp;to Mokx
                            <div></div>
                        </div>
                        <div className={styles.subText}>
                            Welcome back! Sign in using your social <br /> account or email to
                            continue us
                        </div>

                        <div className={styles.socials}>
                            <img src="socialsTransparent.png" alt="Socials" />
                        </div>

                        <div className={styles.or}>
                            <img src="or2.png" alt="" />
                        </div>

                        <div className={styles.email}>
                            <div className={styles.emailTxt}>Your Email</div>

                            <div>
                                <input type="email" />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <div className={styles.emailTxt}>Password</div>

                            <div>
                                <input type="password" id={styles.pass} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.loginBtns}>
                        <div className={styles.button}>
                            <button>Login</button>
                        </div>

                        <div className={styles.finalText}>Forgot Password?</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default login;
