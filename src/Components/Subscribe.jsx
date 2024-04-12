import styles from './Subscribe.module.css'

function Subscribe() {
    return (
        <section className={styles.subscribe}>
            <div className={styles.form_div}>
                <p>Subscribe to get information, latest news and other interesting offers about Cobham
                </p>
                <form>
                    <input type="text" name="" id="" placeholder='' />
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe
