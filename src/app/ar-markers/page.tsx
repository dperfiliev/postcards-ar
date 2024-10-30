import styles from "./page.module.css"

import Button from "../components/button/button"
import Image from "next/image"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function ArMarkers() {
    return (
        <div className="pagedesign">
            <div className="gradients">
                <div className='pink_1'> </div>
                <div className='pink_2'></div>
                <div className='purple_1'></div>
                <div className='purple_2'></div>
                <div className='cyan_1'></div>
                <div className='cyan_2'></div>
            </div>
            <Header />
            <div className="content">
                <div className={styles.blocks}>
                    <div className={styles.wrappers}>
                        <div className={styles.gift}>
                            <div className={styles.giftImg}>

                            </div>
                            <h2 className="title-2">
                                Название модели
                            </h2>
                            <div className={styles.textScroll}>
                                <p className="text">
                                    Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интерфейс,
                                    который будет привлекать пользователей и облегчать им взаимодействие с вашим продуктом.
                                </p>
                            </div>
                        </div>
                        <div className={styles.choose}>
                            <div className={styles.panel}>
                                <input className={styles.input} type="text" />
                                <Button text="Поиск" />
                            </div>
                            <div className={styles.listWrapper}>
                                <div className={styles.list}>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            День рождения
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.iconWrapper}>
                                            <Image className={styles.icon} src="./images/icons/telegram.svg" alt="" fill />
                                        </div>
                                        <h3 className="title-3">
                                            Новый год
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.download}>
                        <Button text="Скачать" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}