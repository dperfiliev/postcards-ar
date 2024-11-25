import styles from "./page.module.css"
import Image from "next/image"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Help() {

    const scans = [
        { id: "1", imgSrc: "/images/help/scan_1.jpg", num: "1", text: "В главном окне нажмите на кнопку сканирования открытки" },
        { id: "2", imgSrc: "/images/help/scan_2.jpg", num: "2", text: "В открывшемся окне дайте доступ к камере устройства" },
        { id: "3", imgSrc: "/images/help/scan_3.jpg", num: "3", text: "Наведите маркер на камеру" },
        { id: "4", imgSrc: "/images/help/scan_4.jpg", num: "4", text: "Воспользуйтесь функцией сделать скришот" },
    ]

    const gets = [
        { id: "1", imgSrc: "/images/help/get_1.jpg", num: "1", text: "В главном окне нажмите на кнопку выбора открытки" },
        { id: "2", imgSrc: "/images/help/get_2.jpg", num: "2", text: "В открывшемся окне выберите подходящий вариант" },
        { id: "3", imgSrc: "/images/help/get_3.jpg", num: "3", text: "Вы можете скачать или сразу распечатать открытку" },
        { id: "4", imgSrc: "/images/help/get_4.jpg", num: "4", text: "Наклейте маркер, например, на открытку" },
    ]

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
                            {scans.map((item) => (
                                <div key={item.id} className={styles.cardWrapper}>
                                    <div className={styles.card}>
                                        <div className={styles.item}>
                                            <Image className={styles.img} src={item.imgSrc} alt="" fill />
                                        </div>
                                        <div className={styles.number}>
                                            <p className="number">
                                                {item.num}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.description}>
                                        <p className="text">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
                            {gets.map((item) => (
                                <div key={item.id} className={styles.cardWrapper}>
                                    <div className={styles.card}>
                                        <div className={styles.item}>
                                            <Image className={styles.img} src={item.imgSrc} alt="" fill />
                                        </div>
                                        <div className={styles.number}>
                                            <p className="number">
                                                {item.num}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.description}>
                                        <p className="text">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}