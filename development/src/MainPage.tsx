/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export const MainPage = () => {
    return (<>
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-xxl">
                    {/* -Не могу выровнять по центру */}
                    <a className="navbar-brand" href="#" style={{ marginLeft: 550 }}> Общая информация </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </header>
        <section>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex justify-content-center">
                            <h2> Образование </h2>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <h5> Место обучения </h5>
                                <h5> Факультет </h5>
                                <h5> Направление </h5>
                                <h5> Курс </h5>
                                <h5> Год зачисления </h5>
                                <h5> Дата рождения </h5>
                                <h5> Знак зодиака </h5>
                            </div>
                            <div className="col-5">
                                <h5> ИГХТУ </h5>
                                <h5> ТУиЦИ </h5>
                                <h5> ИСИТ </h5>
                                <h5> 2 </h5>
                                <h5> 2021 год </h5>
                                <h5> 01.11.2003 </h5>
                                <h5> Скорпион </h5>
                            </div>
                        </div>
                        <h2 style={{ marginLeft: 200, marginTop: 70 }}> Сферы деятельности </h2>
                        <ul style={{ marginLeft: 180 }} >
                            <h5> <li> Ментальная арифметика </li> </h5>
                            <h5> <li> Развитие памяти и мнемотехника </li> </h5>
                            <h5> <li> Изучение основ программирования </li> </h5>
                        </ul>
                    </div>
                    <div className="col-4">
                        <img className="w-100" src="https://sun9-57.userapi.com/impg/IWNzFE0EFGc3Wav0lrV-YGSpNKV_DSvfnclwjw/ikm_WDJKpoQ.jpg?size=808x1080&quality=95&sign=18b843de7329667c5edeb0e87fa3f8f4&type=album" />
                    </div>
                </div>
            </div>
            <h2 style={{ marginTop: 110, textAlign: 'center' }}> Личные достижения </h2>
            <p className="thumb">
                {/* Подвинуть к центру */}
                <img src="img/Митрофанова Е..jpg" width="460" height="680" style={{ marginLeft: 70 }} />
                <img src="img/Митрофанова Е.(УД).jpg" width="460" height="680" />
                <img src="img/Митрофанова Е.С..jpg" width="460" height="680" />
            </p>
            <h2 style={{ marginTop: 30, textAlign: "center" }} > Мои ученики </h2>
            <p className="thumb">
                {/* Подвинуть к центру */}
                <img src="img/Соколова Лера.png" width="650" height="460" style={{ marginLeft: 80 }} />
                <img src="img/Немиров Артём.png" width="650" height="460" />
                <img src="img/Бушмакина Вероника.jfif" width="500" height="680" style={{ marginLeft: 30 }} />
                <img src="img/Власенко Валерия.jfif" width="460" height="680" />
                <img src="img/Бушмакина В.jfif" width="490" height="680" />
            </p>
            <h4 style={{ textAlign: "center" }}> Полезные ссылки </h4>
            <a style={{ textAlign: "center" }} href="https://vk.com/zhenka133" > <h5> Моя страница ВК </h5></a>
            <a style={{ textAlign: "center" }} href="https://kubik-deti.vsite.biz/" > <h5> Моя работа </h5> </a>
            <a style={{ textAlign: "center" }} href="https://vk.com/detskij_club_ivanovo" > <h5> Работа №2 </h5> </a>
            <a style={{ textAlign: "center" }} href="https://www.isuct.ru" > <h5> Мой университет </h5></a>
            <div className="footer">
                <h6 style={{ textAlign: "right" }}> <strong> Copyright © 2022 Все права защищены. </strong> </h6>
            </div>
        </section>
    </>
    )
}