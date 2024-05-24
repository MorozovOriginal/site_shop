import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../index"
import styles from "../css/Home.module.css"
const PUBLIC_URL = "http://localhost:4000/image"

function Home() {

    const { store } = useContext(Context);
    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    useEffect(() => { }, []);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.main}>
                    <ul className={styles.nav_menu}>
                        <li><div className={styles.border0}><div className={styles.border1}><a className={styles.nav_item_line} href="@">главная</a></div></div></li>
                        <li><div className={styles.border2}><a className={styles.nav_item} href="">товары</a></div></li>
                        <li><div className={styles.border3}><a className={styles.nav_item} href="/contact">контакты</a></div></li>
                        <li><div className={styles.border4}><a className={styles.nav_item} href="/about">о нас</a></div></li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    <img src={PUBLIC_URL + "/name.svg"} alt="" />
                </div>
                <footer >
                    <div className={styles.social_media1}>
                        <div className={styles.favourites}>
                            <img src={PUBLIC_URL + "/fav.png"} href="@" height="27px" />
                        </div>
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
                        <div className={styles.user}>
                            <img src={PUBLIC_URL + "/profile.png"} href="/personal" height="27px" />
                        </div>
                        <div className={styles.border_social}></div>
                        <div className={styles.settings}>
                            <img src={PUBLIC_URL + "/set.png"} href="@" height="27px" />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Home;


