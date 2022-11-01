export default function Tools() {
    return (
        <>
            <div className="tools">
                <ul className="tools__items">
                    <li className="tools__item once">
                        <img src="img/arrow-menu.svg" />
                    </li>
                    <li className="tools__item">
                        <div className="dropdown">
                            <div className="dropdown__hover"><img src="img/T.svg" /></div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/T.svg" alt="Text" />
                                        </div>
                                        <p className="dropdown__text">Текст</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/T-underline.svg" alt="Link" />
                                        </div>
                                        <p className="dropdown__text">Ссылка</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/T-underline.svg" alt="Header" />
                                        </div>
                                        <p className="dropdown__text">Заголовок</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/S-double.svg" alt="Paragraph" />
                                        </div>
                                        <p className="dropdown__text">Параграф</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="tools__item">
                        <div className="dropdown">
                            <div className="dropdown__hover"><img src="img/box.svg" /></div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/box.svg" alt="Text" />
                                        </div>
                                        <p className="dropdown__text">Секция</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/article.svg" alt="Link" />
                                        </div>
                                        <p className="dropdown__text">Статья</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="dropdown__img">
                                            <img src="img/iframe.svg" alt="Header" />
                                        </div>
                                        <p className="dropdown__text">IFrame</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="tools__item once">
                        <img src="img/hand.svg" />
                    </li>
                    <li className="tools__item">
                        <div className="dropdown">
                            <div>
                                <div className="tools__more" />
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/img.svg" alt="Text" />
                                            </div>
                                            <p className="dropdown__text">Изображение</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/audio.svg" alt="Link" />
                                            </div>
                                            <p className="dropdown__text">Аудио</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/video.svg" alt="Header" />
                                            </div>
                                            <p className="dropdown__text">Видео</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="dropdown__img">
                                                <img src="img/canvas.svg" alt="Paragraph" />
                                            </div>
                                            <p className="dropdown__text">Холст</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div></li>
                </ul>
            </div>
        </>
    );
};
