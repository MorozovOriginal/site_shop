import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from "../index"
import styles from "../css/Login.module.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => { }, []);

  const { store } = useContext(Context);
  const navigate = useNavigate()

  return (
    <>
      <section>
        <header>
          <ul className={styles.nav_menu}>
            <li><div className={styles.border}><a href="main.html" className={styles.nav_item}>главная</a></div></li>
            <li><div className={styles.border}><a href="@" className={styles.nav_item}>услуги</a></div></li>
            <li><div className={styles.border}><a href="@" className={styles.nav_item}>контакты</a></div></li>
            <li><div className={styles.border}><a href="@" className={styles.nav_item}>о нас</a></div></li>
          </ul>
        </header>
        <div className={styles.login}>
          <div className={styles.login_box}>
            <form action="">
              <h2>Login</h2>
              <div className={styles.input_box}>
                <span className={styles.icon}>
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                />


                {/* <input type="email" required>
                    <label>Email</label> */}
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

                {/* <input type="password" required>
                    <label>Password</label> */}
              </div>
              <div className={styles.remember_forgot}>
                {/* <label><input type="checkbox">Запомнить меня</label>*/}
                <a href="#">Забыли пароль?</a>
              </div>
              {/* <button type="submit">Login</button> */}
              <div className={styles.register_link}>
                <p>У вас еще нет аккаунта? <a href="reg.html">Зарегистрируйтесь</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;

{/* <div classNameN{me={styles.login}>
            <div classNameN{me={styles.login_box}>
              <form action="">
                <h2>Login</h2>
                <div classNameN{me={styles.input_box}>
                  <span classNameN{me={styles.icon}>
                    <i classNameN{me="fi fi_sr_envelope"></i>
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div classNameN{me={styles.input_box}>
                  <span classNameN{me={styles.icon}>
                  </span>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div classNameN{me={styles.remember_forgot}>
                  <a href="#">Забыли пароль?</a>
                </div>
                <button
                  onClick={() => {
                    store.login(email, password);
                    navigate("/login")
                  }}
                >
                  Войти
                </button>



                <div classNameN{me={styles.register_link}>
                  <p>У вас еще нет аккаунта? <a href="reg.html">Зарегистрируйтесь</a></p>
                </div>
              </form>
            </div>
          </div> */}