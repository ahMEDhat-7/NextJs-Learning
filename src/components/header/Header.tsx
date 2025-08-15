"use client";
import { Brush, Menu, X } from 'lucide-react'
import styles from './header.module.css'
import Link from 'next/link'
import { useState } from 'react'
import NavBar from '../navbar/NavBar'

const Header = () => {
    const [toggle,setToggle] = useState<boolean>(false);
    return (
        <header className={styles.header}>
            <div>
                <Link href={"/"} className={styles.logo}>
                    Lumora
                    <Brush />
                    dev
                </Link>
            </div>
            <div className={styles.menu} >
                {toggle ?  <X onClick={()=> setToggle(prev =>!prev)}/> : <Menu onClick={()=> setToggle(prev =>!prev)}/>}
            </div>
            <div className={styles.navBarWrapper} 
                style={{ clipPath: toggle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "" }}>
                <NavBar setToggle={setToggle}/>
            </div>
            <div className={styles.right}>
                <Link href={"/login"} className={styles.btn}>Login</Link>
            </div>
             <div className={styles.right}>
                <Link href={"/register"} className={styles.btn}>Register</Link>
            </div>
        </header>
    )
}

export default Header