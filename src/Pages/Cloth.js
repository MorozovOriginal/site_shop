import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Context } from "../index"
import styles from "../css/Cloth.module.css"
const PUBLIC_URL = "http://localhost:4000/image"

function Cloth() {
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
                        <li><div className={styles.border}><a href="@" className={styles.nav_item_line}>товары</a></div></li>
                        <li><div className={styles.border}><a href="/contact" className={styles.nav_item}>контакты</a></div></li>
                        <li><div className={styles.border}><a href="/about" className={styles.nav_item}>о нас</a></div></li>
                    </ul>
                    </header>
                    <div className={styles.main}>
                        <div className={styles.details}>
                            <div className={styles.details_text}>
                                <p>Информация о товаре</p>
                            </div>

                            <div className={styles.cards}>
                                <div className={styles.card}>
                                    <div className={styles.card_top}>
                                        <div href="/cloth" className={styles.card_image}>
                                        <img src={PUBLIC_URL + "/sweater.jpg"} className={styles.photo} />
                                        </div>
                                    </div>
                                
                                    <div className={styles.card_bottom}>
                                        
                                        <div className={styles.card_prices}>
                                        <div className={styles.card_price_discounted}>135 000</div>
                                        </div>
                                        
                                        <p className={styles.card_title}>Кофта женская</p>
                                        <p className={styles.card_title}>Размер: S</p>
                                        
                                        
                                        <button className={styles.card_add} onClick={(click) => navigate('/car')}>В корзину</button>
                                    </div>
                                </div>
                                
                            </div>






                        </div>
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

                    </div>
                </div>
            </div>
      </div>

    </>
  );
}

export default Cloth;