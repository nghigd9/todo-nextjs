import { useState } from 'react';
import Header from '../../components/Header';
import LoginStyles from '../../styles/Login.module.css';
import Button from '@atlaskit/button';

export default function Login(props) {
    return (
        <div className="main">
            <Header></Header>
            <form action="/login" className={LoginStyles.login_wrp}>
                <div className={LoginStyles.form_group}>
                    <label className={LoginStyles.label_text} for="username">
                        Username
                    </label>
                    <input
                        className={LoginStyles.input_text}
                        name="username"
                        type="text"
                    />
                </div>
                <div className={LoginStyles.form_group}>
                    <label className={LoginStyles.label_text} for="password">
                        Password
                    </label>
                    <input
                        className={LoginStyles.input_text}
                        name="password"
                        type="text"
                    />
                </div>
                <div className={LoginStyles.form_group}>
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
}
