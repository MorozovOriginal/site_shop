import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../index"
import styles from "../css/Contact.module.css"
const PUBLIC_URL = "http://localhost:4000/image"

function Contact() {

    return (
        <>
        <section>
            <div className={styles.main_maps}>
                <div className={styles.head}>
                    <ul className={styles.nav_menu}>
                        <li><div className={styles.border}><div className={styles.border1}><a href="/home" className={styles.nav_item}>главная</a></div></div></li>
                        <li><div className={styles.border}><a href="/product" className={styles.nav_item}>товары</a></div></li>
                        <li><div className={styles.border}><a href="@" className={styles.nav_item_line}>контакты</a></div></li>
                        <li><div className={styles.border}><a href="/about" className={styles.nav_item}>о нас</a></div></li>
                    </ul>
                </div>
                <div className={styles.main}>
                    <div className={styles.maps}>
                        <div className={styles.maps_text}>
                            <p>Где нас найти</p>
                        </div>
                        <div className={styles.google_maps}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.2298291214772!2d23.691770551421836!3d52.09371860486388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bf009856513%3A0xe121d385fcdb6231!2z0JzQvdC-0LPQvtGE0YPQvdC60YbQuNC-0L3QsNC70YzQvdGL0Lkg0LrQvtC80L_Qu9C10LrRgSAi0JTQuNC00LDRgSDQn9C10YDRgdC40Y8iLCDRg9C7LiDQodC-0LLQtdGC0YHQutCw0Y8gMzQsINCR0YDQtdGB0YIsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1712840527724!5m2!1sru!2sby" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div >
                    </div >
                    <div className={styles.contacts}>
                        < div className={styles.reception}>
                            <p className={styles.text_box}>Контактные телефоны</p>
                        </div >
                        <div className={styles.text_main}>
                            < p align="center" > +375297154572</p >
                            <p align="center">45-95-52</p>
                        </div >
                        <div className={styles.reception}>
                            < p className={styles.text_box}>Почтовый адресс</p>
                        </div >
                        <div className={styles.text_main}>
                            < p align="center" > sereniksclothes@mail.ru</p >
                        </div >
                        <div className={styles.reception}>
                            < p className={styles.text_box}>Социальные сети</p>
                        </div >
                        <div className={styles.text_main}>
                            < div className={styles.main_social_media}>
                                <img src={PUBLIC_URL + "/inst.png"} className={styles.pics} />
                                <p align="center">serencloth.by</p>
                            </div >
                            <div className={styles.main_social_media}>
                                < img src={PUBLIC_URL + "/tg.png"} className={styles.pics} />
                                <p align="center">serenclothby</p>
                            </div >
                        </div >
                    </div >
                </div >
                <footer>
                    <div className={styles.social_media1}>
                        {/* <div className={styles.favourites}>
                            <img src={PUBLIC_URL + "/fav.png"} href="@" height="27px" />
                        </div> */}
                        <div className={styles.border_social}></div>
                        <div className={styles.shopping_cart}>
                            < img src={PUBLIC_URL + "/cart.png"} href="@" height="27px" />
                        </div >
                        <div className={styles.border_social}></div>
                    </div >
                    <div className={styles.street_width}>
                        < div className={styles.street}>
                            <div className={styles.pictures}>
                                <img src={PUBLIC_URL + "/tg.png"} className={styles.pics} alt="" />
                            </div>
                            <p>г. Брест ул. Советская, 34</p>
                            <div className={styles.pictures}>
                                < img src={PUBLIC_URL + "/inst.png"} className={styles.pics} alt="" />
                            </div>
                        </div >
                    </div >
                    <div className={styles.social_media2}>
                        < div className={styles.border_social}></div>
                        < div className={styles.user}>
                            <img src={PUBLIC_URL + "/profile.png"} href="/personal" height="27px" />
                        </div>
                        <div className={styles.border_social}></div>
                        {/* < div className={styles.settings}>
                            < img src={PUBLIC_URL + "/set.png"} href="@" height="27px" />
                        </div > */}
                    </div >
                </footer >
            </div >
            </section>
        </>
    );
}

export default Contact;