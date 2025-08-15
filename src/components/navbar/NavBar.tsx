import styles from './navbar.module.css'
import Link from 'next/link'
type NavBarProps = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setToggle }: NavBarProps) => {
    return (
        <nav className={styles.navBar} role="navigation">
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" className={styles.navLink} onClick={() => setToggle(prev => !prev)}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.navLink} onClick={() => setToggle(prev => !prev)}>About</Link>
                </li>
                <li>
                    <Link href="/articles" className={styles.navLink} onClick={() => setToggle(prev => !prev)}>Articles</Link>
                </li>
                <li>
                    <Link href="/admin" className={styles.navLink} onClick={() => setToggle(prev => !prev)}>Admin Panel</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar