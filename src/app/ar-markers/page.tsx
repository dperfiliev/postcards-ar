"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Model from "./model";
import Button from "../components/button/button";
import Link from "next/link";

function Loader() {
    return <div className={styles.loader}></div>;
}

export default function ArMarkers() {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const data = [
        { id: "1", name: "День Рождения", icon: "./images/icons/list/bell.svg", marker: "/images/markers/1.png", model: "./models/cake/scene.glb" },
        { id: "2", name: "Праздник Сердца", icon: "./images/icons/list/heart.svg", marker: "/images/markers/2.png", model: "./models/heart/scene.glb" },
        { id: "3", name: "Цветочный Праздник", icon: "./images/icons/list/flower.svg", marker: "/images/markers/3.png", model: "./models/flower/scene.glb" },
        { id: "4", name: "День защитника отечества", icon: "./images/icons/list/tree.svg", marker: "/images/markers/4.png", model: "./models/flower/scene.glb" },
        { id: "5", name: "День знаний", icon: "./images/icons/list/tree.svg", marker: "/images/markers/0.png", model: "./models/flower/scene.glb" },
        { id: "6", name: "Международный женский день", icon: "./images/icons/list/tree.svg", marker: "/images/markers/1.png", model: "./models/flower/scene.glb" },
        { id: "7", name: "День космонавтики", icon: "./images/icons/list/tree.svg", marker: "/images/markers/2.png", model: "./models/flower/scene.glb" },

    ];

    const [selectedId, setSelectedId] = useState<string>(data[0]?.id || "");
    const [selectedModelUrl, setSelectedModelUrl] = useState<string>(data[0]?.model || "");
    const [selectedMarkerUrl, setSelectedMarkerUrl] = useState<string>(data[0]?.marker || "");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleModelSelect = (id: string, modelUrl: string, markerUrl: string) => {
        setSelectedId(id);
        setSelectedModelUrl(modelUrl);
        setSelectedMarkerUrl(markerUrl);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

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
                    <div className={styles.gift}>
                        <div className={styles.giftModel}>
                            <div className={styles.giftImgWrapper}>

                                {isLoading && <Loader />}
                                <Image
                                    className={styles.giftImg}
                                    src={selectedMarkerUrl ?? "/images/markers/rocket.jpg"}
                                    alt=""
                                    fill
                                    sizes=""
                                    onLoad={handleImageLoad}
                                />

                            </div>
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
                                    onClick={() => setSearchQuery("")}
                                >
                                    <Image className={styles.inputIcon} src={searchQuery.length == 0 ? "/images/icons/ui/search.svg" : "/images/icons/ui/close.svg"} alt="" fill />
                                </button>
                            </div>
                        </div>
                        <div className={styles.listWrapper}>
                            <div className={styles.list}>
                                {filteredData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.item} ${selectedId === item.id ? styles.active : ''}`}
                                        onClick={() => handleModelSelect(item.id, item.model, item.marker)}
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

                {selectedMarkerUrl && (
                    <a href={selectedMarkerUrl} download className={styles.download}>
                        <Button text="Скачать" />
                    </a>
                )}
            </div>
            <Footer />
        </div>
    );
}
