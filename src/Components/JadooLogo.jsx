import styles from './JadooLogo.module.css'

function Logo() {
    return (
        <div className={styles.logo}>
            <span className={styles.span}>J</span>
            <span className={styles.span}>a</span>
            <span className={styles.span}>d</span>

            <span className={`${styles.o}`}>o<i className={styles.i1}></i></span>
            <span className={`${styles.o}`}>o<i className={styles.i2}></i></span>

        </div>
    )
}

export default Logo
