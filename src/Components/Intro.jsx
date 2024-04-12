import styles from './Intro.module.css'

function Intro() {
    return (
        <section className={styles.landingpage}>
            <p className={styles.para1}>Best Destinations around the world</p>
            <h1>Travel, enjoy and live a new and full life</h1>
            <p className={styles.para2}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className={styles.btns}>
                <button className={styles.findmorebtn}>Find out more</button>
                <button className={styles.playbtn}><i className="fa-solid fa-play"></i></button>
                <p>Play Demo</p>
            </div>
            <div className={styles.container}>

                <img className={styles.traveller} src="Traveller 1.png" alt="" />
                <img className={styles.plane1} src="Group.png" alt="" />
                <img className={styles.plane2} src="Group.png" alt="" />
            </div>
        </section>
    )
}

export default Intro
