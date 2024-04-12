import Main from "../Components/Main"
import NavBar from "../Components/NavBar"
import styles from './LandingPage.module.css'

function LandingPage() {
    return (
        <>
            <header className={styles.header}>
                <NavBar />
                <div className={styles.container}>
                    <img className={styles.decore} src="Decore.png" alt="" />
                </div>
            </header>
            <main className={styles.main}>
                <Main />

            </main>

        </>
    )
}

export default LandingPage
