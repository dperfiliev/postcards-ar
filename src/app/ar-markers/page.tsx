"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Model from "./model";

export default function ArMarkers() {
    // Состояние для хранения выбранного элемента и ссылки на модель
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedModelUrl, setSelectedModelUrl] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>(""); // состояние для строки поиска

    // Данные списка
    const data = [
        { id: "1", name: "День Рождения", icon: "./images/icons/list/bell.svg", marker: "./images/markers/rocket.jpg", model: "./models/cake/scene.glb" },
        { id: "2", name: "Праздник Сердца", icon: "./images/icons/list/heart.svg", marker: "./images/markers/heart.jpg", model: "./models/heart/scene.glb" },
        { id: "3", name: "Цветочный Праздник", icon: "./images/icons/list/flower.svg", marker: "./images/markers/flower.jpg", model: "./models/flower/scene.glb" },
        { id: "4", name: "Сладкий Праздник", icon: "./images/icons/list/tree.svg", marker: "./images/markers/sweet.jpg", model: "./models/flower/scene.glb" },
    ];

    // Обработчик для выбора модели
    const handleModelSelect = (id: string, modelUrl: string) => {
        setSelectedId(id); // Устанавливаем выбранный id
        setSelectedModelUrl(modelUrl); // Устанавливаем URL выбранной модели
        console.log("model selected")
    };

    // Обработчик для изменения поиска
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Фильтрация данных на основе searchQuery
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            <div className={styles.giftModel}>
                                <div className={styles.giftImg}></div>
                                <Model key={selectedModelUrl} url={selectedModelUrl ?? './models/cake/scene.glb'} />
                            </div>
                            <h2 className="title-2">Название модели</h2>
                            <div className={styles.textScroll}>
                                <p className="text">
                                    Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интерфейс,
                                    который будет привлекать пользователей и облегчать им взаимодействие с вашим продуктом.
                                </p>
                            </div>
                        </div>

                        <div className={styles.choose}>
                            <div className={styles.inputField}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Поиск..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <div className={styles.inputState}>
                                    <button
                                        className={styles.cancel}
                                        onClick={() => setSearchQuery("")} // кнопка очистки поиска
                                    >
                                        <Image className={styles.inputIcon} src="/images/icons/ui/close.svg" alt="" fill />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.listWrapper}>
                                {filteredData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.item} ${selectedId === item.id ? styles.active : ''}`}
                                        onClick={() => handleModelSelect(item.id, item.model)}
                                    >
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                className={styles.icon}
                                                src={item.icon}
                                                alt=""
                                                fill
                                            />
                                        </div>
                                        <h3 className="title-3">{item.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
