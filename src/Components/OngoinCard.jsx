import styles from './OngoinCard.module.css'

function OngoinCard() {
    return (
        <div className={styles.ongoin_card}>
            <img src="palace.png" alt="" />
            <div className={styles.about}>
                <p>Ongoin</p>
                <h3>Trip to</h3>
                <p className={styles.progress_no}>40%</p>
                <div className={styles.progress}>
                    <div className={styles.progress_bar}></div>
                </div>
            </div>
        </div>
    )
}

export default OngoinCard
