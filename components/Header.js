import { useState } from 'react';
import HeadStyles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header(props) {
    return (
        <div className={'container ' + HeadStyles.header_wrp}>
            <div className={HeadStyles.header_content}>
                <div className={HeadStyles.logo}>Menu</div>
                <Link href="/" className={HeadStyles.logo}>
                    LOGO
                </Link>
                <Link href="/login" className={HeadStyles.logo}>
                    Login
                </Link>
            </div>
        </div>
    );
}
