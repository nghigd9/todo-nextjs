import { useState } from 'react';
import HeadStyles from '../styles/Header.module.css';
import Link from 'next/link';
import Head from 'next/head';

const cur_url = 'https://https://todo-nextjs-pi.vercel.app/';
let seoDescription = 'The best page to note your tasks.';

export default function Header(props) {
    return (
        <>
            <Head>
                <title>todo app nextjs</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="robots" content="index, follow"></meta>
                <meta name="googlebot-news" content="snippet"></meta>
                <meta name="googlebot" content="index"></meta>
                <meta name="description" content={seoDescription}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:site_name" content="TodoNextJs"></meta>
                <meta property="og:url" content={cur_url}></meta>
                <meta property="og:title" content="todo app"></meta>
                <meta property="og:description" content=""></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta
                    name="twitter:title"
                    content="Download Mod APK Premium Apps and Mod APK Games – APKCIMA"
                ></meta>
                <meta
                    name="twitter:description"
                    content={seoDescription}
                ></meta>
                <link rel="canonical" href={cur_url}></link>
                <meta property="og:locale" content="en"></meta>
                <meta property="og:locale:alternate" content="vn"></meta>
                <link rel="alternate" hreflang="en" href={cur_url}></link>
                <link
                    rel="alternate"
                    hreflang="x-default"
                    href={cur_url}
                ></link>
                <link
                    rel="alternate"
                    hreflang="vn"
                    href={cur_url + 'vn/'}
                ></link>
            </Head>

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
        </>
    );
}
