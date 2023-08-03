import React from 'react'
import styles from './sample.module.css'

// Component to display a sample message

const sample = ({ text }) => {
    return (
        <>
            <div className={styles.sample}>
                <div>
                    <img src="pfp.svg" alt="pfp" className={styles.pfp} />
                </div>
                {/* to show </br> string */}
                <div className={styles.textBox} dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </>
    );
};

export default sample;
