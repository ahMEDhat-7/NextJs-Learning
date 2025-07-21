import styles from './navbar.module.css'
import Link from 'next/link'
type NavBarProps = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setToggle }: NavBarProps) => {
    return (
        <nav className={styles.navBar} role='navigation'>
            <ul className={styles.navLinks}>
                <li>
                    <Link onClick={()=> setToggle(prev =>!prev)} href="/" className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link onClick={()=> setToggle(prev =>!prev)} href="/about" className={styles.navLink}>About</Link>
                </li>
                <li>
                    <Link onClick={()=> setToggle(prev =>!prev)} href="/articles" className={styles.navLink}>Articles</Link>
                </li>
                <li>
                    <Link onClick={()=> setToggle(prev =>!prev)} href="/admin" className={styles.navLink}>Admin-Panel</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar