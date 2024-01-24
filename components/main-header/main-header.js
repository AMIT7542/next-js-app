import React from 'react'
import logoImg from '@/assets/logo.png'
import Link from 'next/link'
import classes from './main-header.module.css'
import Image from 'next/image'
import NavLink from './nav-link'
import MainHeaderBackground from './main-header-background'
const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    {/* <img src={logoImg.src}></img>
                NextLevel Food */}
                    <Image src={logoImg} priority alt="meal logo"></Image>
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>

                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>

                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader