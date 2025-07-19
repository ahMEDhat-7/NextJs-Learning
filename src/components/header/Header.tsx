import { Brush } from 'lucide-react'
import styles from './header.module.css'
import Link from 'next/link'
import React from 'react'
import NavBar from '../navbar/NavBar'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link href={"/"} className={styles.logo}>
                    Lumora
                    <Brush />
                    dev
                </Link>
            </div>
            <NavBar />
            <div className={styles.right}>
                <Link href={"/login"} className={styles.btn}>Login</Link>
                <Link href={"/register"} className={styles.btn}>Register</Link>
            </div>
        </header>
    )
}

export default Header