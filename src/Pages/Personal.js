import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from "../index"
import styles from "../css/Personal.module.css"
const PUBLIC_URL = "http://localhost:4000/image"

function Personal() {
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [name, setName] = useState("None");
    const [date, setDate] = useState("None");
    const [city, setCity] = useState("None");
    const { store } = useContext(Context);
    const navigate = useNavigate()

    // const [error, setError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("email") === null) {
            navigate("/login");
            setEmail("None")
        }

        const userInfoF = async () => {
            const userInfo = await store.getUserInfo(email);
            console.log(userInfo);
            if (userInfo.data !== null) {
                if (userInfo.data.name !== null)
                    setName(userInfo.data.name)
                if (userInfo.data.data !== null)
                    setDate(userInfo.data.date)
                if (userInfo.data.city !== null)
                    setCity(userInfo.data.city)
            }
        }
        userInfoF();
    }, []);

    return (
        <>
            <section>
                <div className={styles.user}>
                    <div className={styles.user_box}>
                        <header>
                            <ul className={styles.nav_menu}>
                                <li><div className={styles.border1}><a href="/home" className={styles.nav_item}>главная</a></div></li>
                                <li><div className={styles.border}><a href="/product" className={styles.nav_item}>услуги</a></div></li>
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
                                        <div className={styles.user_pict}>
                                            <img src={PUBLIC_URL + "/userprofile.png"} className={styles.pict} alt="" />
                                        </div>
                                        <div className={styles.user_text}>
                                            <p>
                                                {
                                                    email
                                                }
                                            </p>
                                            <p>
                                                {
                                                    name
                                                }
                                            </p>
                                            <p>
                                                {
                                                    date
                                                }
                                            </p>
                                            <p>
                                                {
                                                    city
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.user_info}>
                                        <div className={styles.user_ren}>
                                            <a href='/edit' className='link_a'><u>изменить данные</u></a>
                                            <img src={PUBLIC_URL + "/pen.png"} className={styles.pict_a} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.options}>
                                    <button className={styles.box_buy}>
                                        <div className={styles.buy_text}>
                                            <p>Мои покупки</p>
                                        </div>
                                        <div className={styles.buy_img}>
                                            <img src={PUBLIC_URL + "/cart.png"} className={styles.pict_op} alt="" />
                                        </div>
                                    </button>
                                    <div className={styles.box_deliv}>
                                        <div className={styles.buy_text}>
                                            <p>Доставки</p>
                                        </div>
                                        <div className={styles.buy_img}>
                                            <img src={PUBLIC_URL + "/delivery.png"} className={styles.pict_op} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.box_card}>
                                        <div className={styles.buy_text}>
                                            <p>Мои карты</p>
                                        </div>

                                        <div className={styles.buy_img} onClick={(click) => { store.getUserInfo(email) }}>
                                            <img src={PUBLIC_URL + "/credit-card.png"} className={styles.pict_op} alt="" />

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
                            <img src={PUBLIC_URL + "/fav.png"} href="@" height="27px" alt="" />
                        </div> */}
                        <div className={styles.border_social}></div>
                        <div className={styles.shopping_cart}>
                            <img src={PUBLIC_URL + "/cart.png"} href="@" height="27px" alt="" />
                        </div>
                        <div className={styles.border_social}></div>
                    </div>
                    <div className={styles.street_width}>
                        <div className={styles.street}>
                            <div className={styles.pictures}>
                                <img src={PUBLIC_URL + "/tg.png"} className={styles.pics} alt="" />
                            </div>
                            <a href="@">г. Брест ул. Советская, 34</a>
                            <div className={styles.pictures}>
                                <img src={PUBLIC_URL + "/inst.png"} className={styles.pics} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.social_media2}>
                        <div className={styles.border_social}></div>
                        <div className={styles.userp}>
                            <img src={PUBLIC_URL + "/profile.png"} href="@" height="27px" alt="" />
                        </div>
                        <div className={styles.border_social}></div>
                        {/* <div className={styles.settings}>
                            <img src={PUBLIC_URL + "/set.png"} href="@" height="27px" alt="" />
                        </div> */}
                    </div>
                </footer>
            </section>

        </>
    );
}

export default Personal;