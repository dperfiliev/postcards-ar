import styles from "./page.module.css"
import Image from "next/image"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Help() {

    const scans = [
        { id: "1", imgSrc: "/images/helps/scan_1.png", num: "1", text: "В главном окне нажмите на кнопку сканирования" },
        { id: "2", imgSrc: "/images/helps/scan_2.png", num: "2", text: "Разрешите доступ к камере устройства" },
        { id: "3", imgSrc: "/images/helps/scan_3.png", num: "3", text: "Наведите камеру устройства на маркер" },
        { id: "4", imgSrc: "/images/helps/scan_4.png", num: "4", text: "Касаниями манипулируйте моделью" },
    ]

    const gets = [
        { id: "1", imgSrc: "/images/helps/get_1.png", num: "1", text: "В главном окне нажмите на кнопку выбора" },
        { id: "2", imgSrc: "/images/helps/get_2.png", num: "2", text: "Выберите подходящий вариант 3D-модели" },
        { id: "3", imgSrc: "/images/helps/get_3.png", num: "3", text: "Скачайте маркер дополненной реальности" },
        { id: "4", imgSrc: "/images/helps/get_4.png", num: "4", text: "Распечатайте и разместите на носителе" },
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
                                            <Image className={styles.img} src={item.imgSrc} alt="" fill sizes="(max-width: 1400px) 350px, (max-width: 576px) 250px" priority={true}/>
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
                                Как получить маркер?
                            </p>
                        </div>
                        <div className={styles.cards}>
                            {gets.map((item) => (
                                <div key={item.id} className={styles.cardWrapper}>
                                    <div className={styles.card}>
                                        <div className={styles.item}>
                                            <Image className={styles.img} src={item.imgSrc} alt="" fill sizes="(max-width: 1400px) 350px, (max-width: 576px) 250px" priority={true}/>
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