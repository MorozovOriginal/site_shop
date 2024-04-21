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
    const [error, setError] = useState(null);

    return (
        <>
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
                        </div>
                        <div className={styles.remember_forgot}>
                            {/* <label><input_type="checkbox">Запомнить меня</label> */}
                        </div>

                        <button
                            onClick={(click) => {
                                click.preventDefault();
                                setError(null);
                                if (email === "" || name === "" || password === "") {
                                    setError("Заполните данные для регистрации!")
                                    return;
                                }
                                store.reg(email, name, password).then(function (result) {

                                    console.log(result.response.data.messagee);
                                    setError(result.response.data.messagee);
                                    // alert(error);
                                });

                                // navigate("/login")

                            }}
                        >
                            Регистрация
                        </button>

                        <div className={styles.register_link}>
                            <p>У вас уже есть аккаунт? <a href="login.html">Войдите</a></p>
                        </div>
                        <div className={styles.error_link}>
                            <p>
                                {
                                    error
                                }
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Registration