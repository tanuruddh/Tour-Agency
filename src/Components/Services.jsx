import styles from './Services.module.css'
import Category from './Category'

function Services() {
    return (
        <section className={styles.services}>
            <p className={styles.para1}>CATEGORY</p>
            <h2 className={styles.head2}>We Offer Best</h2>
            <div>

                <Category >
                    <img src="satellite.png" alt="" />
                    <img className={styles.rectangle} src="Rectangle.png" alt="" />
                    <h3>Calculated Weather</h3>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </Category>
                <Category >
                    <img src="aeroplane.png" alt="" />
                    <img className={`${styles.rectangle} ${styles.aeroplane}`} src="Rectangle.png" alt="" />
                    <img className={styles.decore_rectangle} src="decoreRectangle.png" alt="" />

                    <h3>Best Flights</h3>
                    <p className={styles.aeroplane_para}>Engrossed listening. Park gate sell they west hard for the.</p>
                </Category>
                <Category >
                    <img src="mic.png" alt="" />
                    <img className={styles.rectangle} src="Rectangle.png" alt="" />

                    <h3>Local Events</h3>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </Category>
                <Category >
                    <img src="customization.png" alt="" />
                    <img className={styles.rectangle} src="Rectangle.png" alt="" />

                    <h3>Customization</h3>
                    <p>We deliver outsourced aviation services for military customers.</p>
                </Category>
            </div>
        </section>
    )
}

export default Services
