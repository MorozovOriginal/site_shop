import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { Context } from "../index"
import { useContext } from 'react';
import styles from "../css/Registration.module.css"

const Registration = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const { store } = useContext(Context);
    useEffect(() => { }, []);

    return (
        <>
            <body>
                <section>
                    <div className={styles.login_box}>
                        <form action="">
                            <h2>Sign up</h2>
                            <div className={styles.input_box}>
                                <span className={styles.icon}>
                                </span>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    placeholder="Email"
                                />

                                {/* <input_type="email" required>
                                <label>Email</label> */}
                            </div>
                            <div className={styles.input_box}>
                                <span className={styles.icon}>
                                </span>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="name"
                                    placeholder="Name"
                                />
                                {/* <input_type="name" required>
                                <label>Name</label> */}
                            </div>
                            <div className={styles.input_box}>
                                <span className={styles.icon}>
                                </span>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    placeholder="Password"
                                />
                                {/* <input_type="password" required>
                                <label>Password</label> */}
                            </div>
                            <div className={styles.input_box}>
                                <span className={styles.icon}>
                                </span>

                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    placeholder="Repeat Password"
                                />
                                {/* <input_type="password" required>
                                <label>Repeat password</label> */}
                            </div>
                            <div className={styles.remember_forgot}>
                                {/* <label><input_type="checkbox">Запомнить меня</label> */}
                            </div>
                            <button
                                onClick={() => {
                                    store.reg(email, name ,password);
                                    // navigate("/")
                                }}
                            >
                                Вход
                            </button>
                            {/* <button type="submit">Sign up</button> */}
                            <div className={styles.register_link}>
                                <p>У вас уже есть аккаунт? <a href="login.html">Войдите</a></p>
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </>
    )
}

export default Registration