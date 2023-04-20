import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <a href="https://www.facebook.com/flexprosistemas/?locale=pt_BR" rel="noreferrer noopener" target='_blank'>
            <li>
                <FaFacebook />
            </li>
            </a>
            <a href="https://www.instagram.com/flexprosistemas/" rel="noreferrer noopener" target='_blank'>
            <li>
                <FaInstagram />
            </li>
            </a>
            <a href="https://www.linkedin.com/company/flexprosistemas/mycompany/" rel="noreferrer noopener" target='_blank'>
            <li>
                <FaLinkedin />
            </li>
            </a>
        </ul>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2023 <br></br>
            <span>Desenvolvido por Paulo Ramos</span>
        </p>
    </footer>)
}

export default Footer