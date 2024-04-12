import NavLink from '../Components/NavLink';
import JadooLogo from './JadooLogo';
import styles from './NavBar.module.css'

function NavBar() {

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <JadooLogo />
                </li>
                <ul>
                    <li>
                        <NavLink to="/pricing">Desitnations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={styles.ctaLink}>
                            Flights
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Booking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={styles.ctaLink}>
                            Sign up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">En</NavLink>
                    </li>
                </ul>
            </ul>

        </nav>
    )
}

export default NavBar
