import React from 'react'
import styles from './prompt.module.css'

// Component to display a prompt

const prompt = ({ text }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.prompt}>
                    {text}
                </div>
            </div>
        </>
    )
}

export default prompt
