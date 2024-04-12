import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.intro}>
                <p>Testimonials</p>
                <h2>What people say about Us.</h2>
                <div className={styles.circle_div}>

                    <div className={styles.dark_circle}></div>
                    <div className={styles.light_circle}></div>
                    <div className={styles.light_circle}></div>
                </div>
            </div>
            <div className={styles.review}>
                <img src="Men.png" alt="" />
                <div>
                    <p className={styles.para1}>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                    </p>
                    <p className={styles.para2}>Mike Taylor</p>
                    <p className={styles.para3}>Lahore, Pakistan</p>
                    <p className={`${styles.para2} ${styles.para4}`}>Chris Thomas</p>
                    <p className={`${styles.para3} ${styles.para4}`}>CEO of Red Button</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
