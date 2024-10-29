import styles from "./page.module.css"
import Image from "next/image"

export default function Help() {
    return (
        <div className="content">

            <div className={styles.rows}>
                <div className={styles.row}>
                    <div className={styles.title}>
                        <h2 className="title-2">
                            Сканирование
                        </h2>
                        <p className="text-caption">
                            Как работает маркер?
                        </p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        1
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    В главном окне нажмите на кнопку сканирования открытки
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        2
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    В открывшемся окне дайте доступ к камере устройства
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        3
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    Наведите маркер на камеру
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        4
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    Воспользуйтесь функцией сделать скришот
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.row}>
                    <div className={styles.title}>
                        <h2 className="title-2">
                            Получение маркера
                        </h2>
                        <p className="text-caption">
                            Как работает маркер?
                        </p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        1
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    В главном окне нажмите на кнопку выбора открытки
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        2
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    В открывшемся окне выберите подходящий вариант
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        3
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    Вы можете скачать или сразу распечатать открытку
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.item}>
                                    <Image className={styles.img} src="./images/icons/telegram.svg" alt="" fill />
                                </div>
                                <div className={styles.number}>
                                    <p className="number">
                                        4
                                    </p>
                                </div>
                            </div>
                            <div className={styles.description}>
                                <p className="text">
                                    Наклейте маркер, например, на открытку
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}