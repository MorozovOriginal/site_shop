import "./Contacts.css";


function Contacts(){
    return(
        // <div className={Contacts}>
            <div className={style.main_maps}>
                <header>
                    <ul className={style.nav_menu}>
                        <li><div className={style.border}><a href="main.html" className={style.nav_item}>главная</a></div></li>
                        <li><div className={style.border}><a href="@" className={style.nav_item}>услуги</a></div></li>
                        <li><div className={style.border}><a href="@" className={style.nav_item_line}>контакты</a></div></li>
                        <li><div className={style.border}><a href="@" className={style.nav_item}>о нас</a></div></li>
                    </ul>
                </header>
                <div className={style.main}>
                    <div className={style.maps}>
                        <div className={style.maps_text}>
                            <p>Где нас найти</p>
                        </div>
                        <div className={style.google_maps}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.2298291214772!2d23.691770551421836!3d52.09371860486388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bf009856513%3A0xe121d385fcdb6231!2z0JzQvdC-0LPQvtGE0YPQvdC60YbQuNC-0L3QsNC70YzQvdGL0Lkg0LrQvtC80L_Qu9C10LrRgSAi0JTQuNC00LDRgSDQn9C10YDRgdC40Y8iLCDRg9C7LiDQodC-0LLQtdGC0YHQutCw0Y8gMzQsINCR0YDQtdGB0YIsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1712840527724!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className={style.contacts}>
                        <div className={style.reception}>
                            <p className={style.text_box}>Контактные телефоны</p>
                        </div>
                        <div className={style.text_main}>
                            <p align="center">+375297154572</p>
                            <p align="center">45-95-52</p>
                        </div>

                        <div className={style.reception}>
                            <p className={style.text_box}>Почтовый адресс</p>
                        </div>
                        <div className={style.text_main}>
                            <p align="center">sereniksclothes@mail.ru</p>
                        </div>

                        <div className={style.reception}>
                            <p className={style.text_box}>Социальные сети</p>
                        </div>
                        <div className={style.text_main}>
                            <div className={style.main_social_media}>
                                {/* <img src="img/inst-black.png" className="pics"> */}
                                <p align="center">serencloth.by</p>
                            </div>
                            <div className={style.main_social_media}>
                                {/* <img src="img/tg-black.png" className="pics"> */}
                                <p align="center">serenclothby</p>
                            </div>
                            </div>
                    </div>
                </div>
                <footer>
                    <div className={style.style.social_media1}>
                        <div className={style.favourites}>
                            {/* <img src="img/fav.png" href="@" height="27px"> */}
                        </div>
                        <div className={style.border_social}></div>
                        <div className={style.shopping_cart}>
                            {/* <img src="img/cart.png" href="@" height="27px"> */}
                        </div>
                        <div className={style.border_social}></div>
                    </div>
                    <div className={style.street_width} style="max-width: 480px; min-width: 480px;">
                        <div className={style.street}>
                            <div className={style.pictures}>
                                {/* <img src="img/tg.png" className="pics" alt=""> */}
                            </div>
                            <p>г. Брест ул. Советская, 34</p>
                            <div className={style.pictures}>
                                {/* <img src="img/inst.png" className="pics" alt=""> */}
                            </div>
                        </div>
                    </div>
                    <div className={style.social_media2}>
                        <div className={style.border_social}></div>
                        <div className={style.user}>
                            {/* <img src="img/profile.png" href="@" height="27px"> */}
                        </div>
                        <div className={style.border_social}></div>
                        <div className={style.settings}>
                            {/* <img src="img/set.png" href="@" height="27px"> */}
                        </div>
                    </div>
                </footer>
            </div>    
    );
}
export default Contacts;