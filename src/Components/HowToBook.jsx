import Card from './Card'
import styles from './HowToBook.module.css'
import Steps from './Steps'

function HowToBook() {
    return (
        <section className={styles.bookdiv}>
            <div className={styles.stepcontent}>
                <p>Easy and Fast</p>
                <h2>Book your next trip in 3 easy steps</h2>
                <Steps heading='Choose' para='Lorem ipsum dolor sit amet consectetur.'>
                    <img src="Choose.png" alt="" />

                </Steps>
                <Steps heading='Make Payment' para='Lorem ipsum dolor sit amet consectetur.'>
                    <img src="Payment.png" alt="" />
                </Steps>
                <Steps heading='Reach Airport on Selected Date' para='Lorem ipsum dolor sit amet consectetur.'>
                    <img src="Vehicle.png" alt="" />
                </Steps>
            </div>
            <div>
                <Card />
            </div>
        </section>
    )
}

export default HowToBook
