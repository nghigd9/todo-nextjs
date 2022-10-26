import { useState } from 'react';
import HeadStyles from '../styles/Header.module.css';

export default function Header(props) {
    return (
        <div className={'container ' + HeadStyles.header_wrp}>
            <div className={HeadStyles.header_content}>
                <div className={HeadStyles.logo}>Menu</div>
                <a href="/" className={HeadStyles.logo}>
                    LOGO
                </a>
                <a href="/login" className={HeadStyles.logo}>
                    Login
                </a>
            </div>
        </div>
    );
}
