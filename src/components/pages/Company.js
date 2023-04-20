import savings from '../../img/savings.svg';
import Button from './layout/Button';
import styles from './service/Company.module.css'
import logo from './../../img/gestaofinanceira.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Company() {
    return (
        <section className={styles.company_container}>
            <h1><span>Costs Management</span>
            </h1>
            <p>A empresa que melhor cuida da sua gestão financeira!</p>
            <Button to="/" text="Comece agora" />
            <img src={logo} alt="Costs" />
        </section>
    )
}

export default Company
