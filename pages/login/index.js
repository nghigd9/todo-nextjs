import { useState } from 'react';
import Header from '../../components/Header';
export default function Login(props) {
    return (
        <div className="main">
            <Header></Header>
            <form action="/login" className="loginWrp">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
}
