import Destination from './Destination'
import styles from './Destinations.module.css'

function Destinations() {
    return (
        <section className={styles.destinations}>
            <p className={styles.para1}>Top Selling</p>
            <h2 className={styles.head2}>Top Destinations</h2>
            <div>
                <Destination city='Rome' country='Italy' price='$5.42k' days='10 Days Trip'>
                    <img src="Rome.png" alt="" />
                </Destination>
                <Destination city='Rome' country='Italy' price='$5.42k' days='10 Days Trip'>
                    <img src="London.png" alt="" />
                </Destination>
                <Destination city='Rome' country='Italy' price='$5.42k' days='10 Days Trip'>
                    <img src="Europe.png" alt="" />
                </Destination>
            </div>

        </section>
    )
}

export default Destinations
