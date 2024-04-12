import styles from './NavLink.module.css'

function NavLink({ children }) {
    return (
        <div className={styles.navlink}>
            {children}
        </div>
    )
}

export default NavLink
