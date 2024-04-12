import styles from './Category.module.css'

function Category({ children }) {
    return (
        <article className={styles.category} >
            {children}
        </article>
    )
}

export default Category
