import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from "../index"
import styles from "../css/About.module.css"
const PUBLIC_URL = "http://localhost:4000/image"

function About() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => { }, []);

  const { store } = useContext(Context);
  const navigate = useNavigate()

  const [error, setError] = useState(null);

  return (
    <>
      <div className={styles.sec}>
            <div className={styles.about}>
                <div className={styles.about_box}>
                    <header>
                    <ul className={styles.nav_menu}>
                        <li><div className={styles.border}><div className={styles.border1}><a href="/home" className={styles.nav_item}>главная</a></div></div></li>
                        <li><div className={styles.border}><a href="@" className={styles.nav_item}>товары</a></div></li>
                        <li><div className={styles.border}><a href="/contact" className={styles.nav_item}>контакты</a></div></li>
                        <li><div className={styles.border}><a href="@" className={styles.nav_item_line}>о нас</a></div></li>
                    </ul>
                    </header>
                    <div className={styles.main}>
                        <div className={styles.details}>
                            <div className={styles.details_text}>
                                <p>О нас</p>
                            </div>
                            <div className={styles.block_1}>
                                <div className={styles.block_1_photo}>
                                    <img src={PUBLIC_URL + "/skirt.jpg"} className={styles.photo} />
                                </div>
                                <div className={styles.block_1_text}>
                                    <p>    Наш магазин направлен на изменение привычных вам вещей. Приобретая вещь в нашем магазине вы разнообразите свой гардероб  
                                            уникальными вещами.
                                            Вы можете выбрать вещи из наличия, 
                                            либо, если же вы обладаете какой-либо
                                            идеей, мы с удовольствием воплотим её в реальность.</p>
                                </div>
                            </div>
                            <div className={styles.block_1}>
                                <div className={styles.block_1_text}>
                                    <p>    Мы занимаемся не только кастомизацией
                                            одежды, но и любых других вещей. Вы можете связаться с нами и предлжить
                                            предмет, который хотите кастомизировать.</p>
                                        <button className={styles.button_block} href="@">Связаться с нами</button>
                                </div>
                                <div className={styles.block_1_photo}>
                                    <img src={PUBLIC_URL + "/skirt2.jpg"} className={styles.photo} />
                                </div>
                            </div>
                            <div className={styles.block_1}>
                                <div className={styles.block_1_photo}>
                                    <img src={PUBLIC_URL + "/pants.jpg"} className={styles.photo} />
                                </div>
                                <div className={styles.block_1_text}>
                                    <p>У вас есть возможность принести свою вещь
                                для кастомизасции по нашему адресу, либо мы выполняем 
                                    заказ по вашим критериям. Также у вас есть возможность 
                                    отправить свою вещь по почте</p>
                                    <button className={styles.button_block} href="/contact">Где мы находимся</button>
                                </div>
                            </div>
                            <div className={styles.block_1}>
                                <div className={styles.block_1_text}>
                                    <p>    Ежедневно мы осуществляем доставку по городам Беларуси и России. 
                                            Если же Вы живете в другой стране, но хотите преобрести у нас товар,
                                            напишите нам и мы договоримся!</p>
                                        <button className={styles.button_block} href="@">Связаться с нами</button>
                                </div>
                                <div className={styles.block_1_photo}>
                                    <img src={PUBLIC_URL + "/candles.jpg"} className={styles.photo} />
                                </div>
                            </div>
                            <div className={styles.block_1}>
                                <div className={styles.block_1_photo}>
                                    <img src={PUBLIC_URL + "/bag.jpg"} className={styles.photo} />
                                </div>
                                <div className={styles.block_1_text}>
                                    <p>Вы выбираете удобное для вас место получения своего заказа. 
                                        Вы можете рассчитать сумму доставки и проследить статус вашего заказа.
                                        Просим ответсвенно относится к заказам, ведь если Вы не забираете посылку в течение 7 дней, она возвращается назад.
                                        Услуги доставки в этом случае оплачивает клиент.</p>
                                </div>
                            </div>
                            <div className={styles.footer_text}>
                                <div className={styles.border_bottom}></div>
                                <p className={styles.block_text}> В нашем магазине действуют скидки для постоянных клиентов, а также 
                                происходят распродажи, на которых можно преобрести вещи по сниженной 
                                стоимости. Желаем Вам приятных покупок!
                                    Чтобы быть в курсе всех распродаж и акций, Вы можете подписаться на нас в instagram, telegram или оформить рассылку по почте.</p>
                           </div>
                        </div>
                        <footer>
                    <div className={styles.social_media1}>
                        <div className={styles.favourites}>
                            <img src={PUBLIC_URL + "/fav.png"} href="@" height="27px" />
                        </div>
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
                        < div className={styles.settings}>
                            < img src={PUBLIC_URL + "/set.png"} href="@" height="27px" />
                        </div >
                    </div >
                </footer >

                    </div>
                </div>
            </div>
      </div>

    </>
  );
}

export default About;