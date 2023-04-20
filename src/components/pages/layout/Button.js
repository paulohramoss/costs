import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Button.module.css'

function Button ({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default Button