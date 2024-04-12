import styles from './Card.module.css'
import OngoinCard from './OngoinCard'

function Card() {
    return (
        <div className={styles.fulldiv}>
            <div className={styles.card}>
                <img src="Girl.png" alt="" />
                <div className={styles.about_div}>
                    <p>Trip to Grease</p>
                    <div className={styles.about}>
                        <span>14-29</span>
                        <span>by Trp Singh</span>
                    </div>
                    <div className={styles.btn}>
                        <i className="fa-solid fa-leaf"></i>
                        <i className="fa-solid fa-leaf"></i>
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                    <div className={styles.people}>
                        <i className="fa-regular fa-building"></i>
                        <p> 24 People</p>
                    </div>
                </div>
                <div className={styles.decore}>

                </div>
                <div>
                    <OngoinCard />
                </div>
            </div>

        </div>
    )
}

export default Card
