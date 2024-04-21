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

  const [error, setError] = useState(null);

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
              <div className={styles.remember_forgot}>
                {/* <label><input type="checkbox">Запомнить меня</label>*/}
                <a href="#">Забыли пароль?</a>
              </div>


              <button
                onClick={(click) => {
                  click.preventDefault();
                  store.login(email, password).then(function (result) {
                    console.log(result.response.data.messagee);
                    setError(result.response.data.messagee);
                  });
                  if (error !== "Пользователь не найден!" || error !== "Неверный пароль!")
                    navigate("/home")

                }}
              >
                Вход
              </button>

              <div className={styles.register_link}>
                <p>У вас еще нет аккаунта? <a href="reg.html">Зарегистрируйтесь</a></p>
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
        </div>
      </section>

    </>
  );
}

export default Login;
