"use client"

import styles from "./page.module.css"

import React, { useState, useEffect } from "react";

import Button from "../components/button/button"
import Image from "next/image"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import Model from "./model"

export default function ArMarkers() {

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [items] = useState([
        { title: "День рождения", icon: "./images/icons/telegram.svg" },
        { title: "Новый год", icon: "./images/icons/telegram.svg" },
        { title: "8 марта", icon: "./images/icons/telegram.svg" },
        { title: "День учителя", icon: "./images/icons/telegram.svg" },
        // Добавьте сюда остальные элементы
    ]);
    const [filteredItems, setFilteredItems] = useState(items); // Изначально все элементы

    useEffect(() => {
        // Фильтруем элементы при изменении searchTerm
        if (searchTerm.trim() === "") {
            setFilteredItems(items); // Если поле ввода пустое, показываем все элементы
        } else {
            setLoading(true);
            const results = items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(results);
            setLoading(false);
        }
    }, [searchTerm, items]);

    const clearSearch = () => {
        setSearchTerm(""); // Очищаем поле ввода
    };

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
                                <div className={styles.giftImg}>

                                </div>
                                <Model modelPath="/models/flower/scene.gltf" />


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

                            <div className={styles.inputField}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Поиск..."
                                />

                                <div className={styles.inputState}>
                                    {loading ? (
                                        <Image className={styles.inputIcon} src="/images/icons/loading.svg" alt="" fill />
                                    ) : searchTerm.length > 0 ? (
                                        <button className={styles.cancel} onClick={clearSearch}>
                                            <Image className={styles.inputIcon} src="/images/icons/close.svg" alt="" fill />
                                        </button>
                                    ) : (<Image className={styles.inputIcon} src="/images/icons/search.svg" alt="" fill />)}
                                </div>

                            </div>


                            <div className={styles.listWrapper}>
                                <div className={styles.list}>

                                    {filteredItems.map((item, index) => (
                                        <div className={styles.item} key={index}>
                                            <div className={styles.iconWrapper}>
                                                <Image className={styles.icon} src={item.icon} alt="" fill />
                                            </div>
                                            <h3 className="title-3">{item.title}</h3>
                                        </div>
                                    ))}

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