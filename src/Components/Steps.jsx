import styles from './Steps.module.css'

function Steps({ children, heading, para }) {
    return (
        <article className={styles.step}>
            {children}
            <div>
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
        </article>
    )
}

export default Steps
