import styles from './Destination.module.css'


function Destination({ city, country, price, days, children }) {
    return (
        <article className={styles.destination}>
            {children}
            <div className={styles.maindiv}>
                <div className={styles.div1}><span>{city}, {country}</span> <span>{price}</span></div>
                <div className={styles.div2}><i className="fa-solid fa-arrow-right"></i> <span>{days}</span></div>
            </div>
        </article>
    )
}

export default Destination
