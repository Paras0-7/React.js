import { Nav } from "./Navigation"
import { Link } from "react-router-dom"
import styles from './css/Header.module.css'
export const Header = function(){
    return(
        <header className={styles.header}>
            <Link to = '/' className={styles.link}><h2>eCommerce Site</h2></Link>
            <Nav/>
        </header>
    )
}