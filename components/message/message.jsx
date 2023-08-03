import React from "react";
import styles from "./messageStyles.module.css";
import Sample from "./sample.jsx";
import Prompt from "./prompt.jsx";

// main chat ui

const message = () => {
    return (
        <>
            <div className={styles.container}>
                <a href="/">
                    <img src="purpleBack.svg" alt="Back" className={styles.home} />
                </a>
                <div className={styles.appContainer}>
                    {/* upper half */}
                    <div className={styles.top}>
                        <img src="purpleBack.svg" alt="Back" className={styles.back} />

                        <div className={styles.topBox}>
                            <div>
                                <img src="pfp.svg" alt="Profile" className={styles.profile} />
                                <img src="green.svg" alt="Online" className={styles.online} />
                            </div>

                            <div className={styles.topBoxFlex}>
                                <div className={styles.subFlex}>
                                    <div className={styles.mainText}>Arya</div>

                                    <div className={styles.subText}>Vedic AI Bot</div>
                                </div>

                                <div>
                                    <img src="ak.svg" alt="lang" className={styles.lang} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* lower half */}
                    <div className={styles.low}>
                        {/* Sample Text using a different component called Sample */}
                        <Sample
                            text="🙏 Namaste!  I’m Arya, your AI Vedic help. 
                         I'm here to provide insights from Vedas for daily life concerns.
                         </br> </br> Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you."
                        />

                        <div className={styles.promptLabel}>
                            <img
                                src="lightning.svg"
                                alt="lightning"
                                className={styles.lightning}
                            />
                            <p className={styles.para}>You can ask queries like:</p>
                        </div>

                        {/* Adds prompts using a separate component */}
                        <Prompt text="What is the mantra in Rigveda 10.2.3?" />
                        <Prompt text="What are the prescribed Vedic remedies for snake bites?" />
                        <Prompt text="Can you tell me the significance of the Gayatri Mantra?" />

                        <div className={styles.promptLabel1}>
                            <img
                                src="caution.svg"
                                alt="lightning"
                                className={styles.lightning}
                            />
                            <p className={styles.para1}>
                                Limitation: May struggle with complex queries.
                            </p>
                        </div>
                        <Sample text="Let your curiosity guide you; wishing you blessings and enlightenment 🕉️" />

                        <div className={styles.typeBox}>
                            <input type="text" placeholder="Write your message"></input>
                            <img src="send.svg" alt="send" className={styles.send} />
                            <img src="mic.svg" alt="mic" className={styles.mic} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default message;
