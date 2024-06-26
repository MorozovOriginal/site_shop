import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from "../index"
import styles from "../css/Edit.module.css"
const PUBLIC_URL = "http://localhost:4000/image"

function Edit() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => { }, []);

    const { store } = useContext(Context);
    const navigate = useNavigate()

    const [error, setError] = useState(null);

    return (
        <>
            <section>

                <div className={styles.user}>
                    <div className={styles.user_box}>
                        <header>
                            <ul className={styles.nav_menu}>
                                <li><div className={styles.border1}><a href="/home" className={styles.nav_item}>главная</a></div></li>
                                <li><div className={styles.border}><a href="product" className={styles.nav_item}>услуги</a></div></li>
                                <li><div className={styles.border}><a href="/contact" className={styles.nav_item}>контакты</a></div></li>
                                <li><div className={styles.border}><a href="/about" className={styles.nav_item}>о нас</a></div></li>
                            </ul>
                        </header>
                        <div className={styles.main}>
                            <div className={styles.maps}>
                                <div className={styles.maps_text}>
                                    <p>Мои данные</p>
                                </div>
                                <div className={styles.user_main}>
                                    <div className={styles.user_left}>
                                        {/* <div className={styles.user_pict}>
                                            <img src={PUBLIC_URL + "/userprofile.png"} className={styles.pict} />
                                            <button href="@">Изменить фото</button>
                                        </div> */}
                                        <div className={styles.user_text}>
                                            <div className={styles.input_box}>
                                                <span className={styles.icon}>
                                                </span>
                                                <input
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={name}
                                                    type="text"
                                                    placeholder="Name Surname" />
                                            </div>
                                            <div className={styles.input_box}>
                                                <span className={styles.icon}>
                                                </span>
                                                <input
                                                    onChange={(e) => setDate(e.target.value)}
                                                    value={date}
                                                    type="text"
                                                    placeholder="Date"
                                                />
                                            </div>
                                            <div className={styles.input_box}>
                                                <span className={styles.icon}>
                                                </span>
                                                <input
                                                    onChange={(e) => setCity(e.target.value)}
                                                    value={city}
                                                    type="text"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div className={styles.input_box}>
                                                <span className={styles.icon}>
                                                </span>
                                                <input
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    value={password}
                                                    type="password"
                                                    placeholder="New password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.user_info}>
                                        <div className={styles.user_ren}>
                                            <button
                                                onClick={(click) => {
                                                    // click.preventDefault();
                                                    store.setUserInfo(localStorage.getItem("email"), name, date, city, password).then(function (result) {
                                                        try {
                                                            // console.log(result.response.data.messagee);
                                                            // setError(result.response.data.messagee);
                                                        }
                                                        catch {
                                                            if (result.statusText === "OK") {
                                                                // console.log(result.statusText);
                                                                // setError("Успешно !");
                                                                navigate("/personal")
                                                            }
                                                        }
                                                    });
                                                }
                                                }
                                            >
                                                изменить данные
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div >

                        </div>

                    </div>


                </div>
                <footer >
                    <div className={styles.social_media1}>
                        {/* <div className={styles.favourites}>
                            <img src={PUBLIC_URL + "/fav.png"} href="@" height="27px" />
                        </div> */}
                        <div className={styles.border_social}></div>
                        <div className={styles.shopping_cart}>
                            <img src={PUBLIC_URL + "/cart.png"} href="@" height="27px" />
                        </div>
                        <div className={styles.border_social}></div>
                    </div>
                    <div className={styles.street_width}>
                        <div className={styles.street}>
                            <div className={styles.pictures}>
                                <img src={PUBLIC_URL + "/tg.png"} className={styles.pics} alt="" />
                            </div>
                            <a href="/contact">г. Брест ул. Советская, 34</a>
                            <div className={styles.pictures}>
                                <img src={PUBLIC_URL + "/inst.png"} className={styles.pics} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.social_media2}>
                        <div className={styles.border_social}></div>
                        <div className={styles.userp}>
                            <img src={PUBLIC_URL + "/profile.png"} href="@" height="27px" />
                        </div>
                        <div className={styles.border_social}></div>
                        {/* <div className={styles.settings}>
                            <img src={PUBLIC_URL + "/set.png"} href="@" height="27px" />
                        </div> */}
                    </div>
                </footer>
            </section >

        </>
    );
}

export default Edit;