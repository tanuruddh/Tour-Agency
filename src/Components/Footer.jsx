import styles from './Footer.module.css'

function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.main_div}>
                <div>
                    <h2>Jadoo</h2>
                    <p>Book your trip in minute, get full Control for much longer.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <span>About</span>
                    <span>Careers</span>
                    <span>Mobile</span>
                </div>
                <div>
                    <h3>Contact</h3>
                    <span>Help/FAQ</span>
                    <span>Press</span>
                    <span>Afilites</span>
                </div>
                <div>
                    <h3>More</h3>
                    <span>Airlinefees</span>
                    <span>Airline</span>
                    <span>Low fair tips</span>
                </div>
                <div className={styles.btn_div}>
                    <div className={styles.i}>
                        <a href="#" className={styles.twitter_btn}><i className="fa-brands fa-facebook-f"></i></a>

                        <a href="#" className={styles.twitter_btn}><i className="fa-brands fa-twitter"></i></a>


                    </div>
                    <p >Discover our app</p>
                    <div className={styles.download_btn}>
                        <button>
                            Get it
                        </button>
                        <button>
                            Available on ios
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
