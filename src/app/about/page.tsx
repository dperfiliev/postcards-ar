import styles from "./page.module.css"
import Link from "next/link"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function About() {
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
                <div className={styles.info}>
                    <div className={styles.section}>
                        <h2 className="title-2">
                            О сервисе
                        </h2>
                        <p className="text">
                            Сервис предоставляет маркеры дополненной реальности (AR–маркеры), которые можно размещать на различных носителях, например, открытках или упаковках подарков.
                            Наведением камеры устройства на AR–маркер, отображается 3D–модель, стилизованная под праздник.
                            Такой формат поздравления превращает подарок в настоящее чудо!

                            Все что нужно сделать — это <Link className={styles.link} href="/ar-markers"> выбрать AR–маркер</Link>, распечатать его на бумаге, разместить на носителе, а затем подарить.
                            После получения подарка, его обладатель сможет <Link className={styles.link} href="/scan">отсканировать</Link> AR–маркер.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className="title-2">
                            Что такое дополненная реальность?
                        </h2>
                        <p className="text">
                            Дополненная реальность (AR, Augmented Reality) — это технология, добавляющая в реальный, физический мир цифровые объекты.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className="title-2">
                            Что такое маркер дополненной реальности?
                        </h2>
                        <p className="text">
                            Маркер дополненной реальности (AR-маркер) — это визуальный код, который служит триггером для запуска цифрового контента, “дополняющего” реальную среду.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className="title-2">
                            Что такое виртуальные открытки?
                        </h2>
                        <p className="text">
                            Виртуальные открытки — это креативная подача поздравлений, которая объединяет традиции и технологии дополненной реальности.
                            С ними каждое поздравление наполняется волшебством!
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className="title-2">
                            Реализация проекта
                        </h2>
                        <p className="text">
                            Сервис разработан при поддержки <Link className={styles.link} href="https://www.sfu-kras.ru/">Сибирского федерального университета</Link>.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className="title-2">
                            Разработчики
                        </h2>
                        <p className="text">
                            Веб-дизайнер / Веб-разработчик: <Link className={styles.link} href="https://t.me/perfilev_danil">Перфильев Данил Владимирович</Link>.
                        </p>
                        <p className="text">
                            3D-художник: <Link className={styles.link} href="https://t.me/eto_aivan">Спиридонов Иван Владимирович</Link>.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className="title-2">
                            Beta
                        </h2>
                        <p className="text">
                            Рекомендуем использовать Google Chrome / Яндекс Браузер.
                        </p>
                        <p className="text">
                            Не поддерживается Samsung Internet Browser.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
