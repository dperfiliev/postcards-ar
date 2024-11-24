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
        { id: "1", name: "День знаний", icon: "./images/icons/list/bell.svg", marker: "/images/markers/bell.jpg", model: "./models/bell/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочиинтерфейс жете создать гармоничный и удобочиинтерфе жете создать гармоничный и удобочиинтерфе жете создать гармоничный и удобочиинтерфе"},
        { id: "2", name: "День рождения (Торт)", icon: "./images/icons/list/cake.svg", marker: "/images/markers/cake.jpg", model: "./models/cake/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интерфейдать гармоничный и удобочиемый интерфейс"},
        { id: "3", name: "День рождения (Подарок)", icon: "./images/icons/list/gift.svg", marker: "/images/markers/gift.jpg", model: "./models/gift/scene.glb", description: "Следуя этим рекациям, вы сможете создать гармоничныйерфейс  создать гарный и удобочитаемый интерфейс"},
        { id: "4", name: "День святого Валентина", icon: "./images/icons/list/heart.svg", marker: "/images/markers/heart.jpg", model: "./models/heart/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интерфейс  создать гармоничный и удобочитаемый интерфейс"},
        { id: "5", name: "День Победы", icon: "./images/icons/list/nine.svg", marker: "/images/markers/nine.jpg", model: "./models/nine/scene.glb", description: "Следуя этим рекомендациям сможете создать гармоничный и удобочитаемый интерфейс  создать гармоничный и удобочитаемый интерфейс" },
        { id: "6", name: "День космонавтики", icon: "./images/icons/list/rocket.svg", marker: "/images/markers/rocket.jpg", model: "./models/rocket/scene.glb", description: "Следуя этим рекомендациям, вы сможете создат гармоничный и удобочитаемый интерфейс" },
        { id: "7", name: "Международный женский день", icon: "./images/icons/list/rose.svg", marker: "/images/markers/rose.jpg", model: "./models/rose/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интес  создать гармоничный и удобочитаемый инфейс" },
        { id: "8", name: "Новый год (Снеговик)", icon: "./images/icons/list/snowman.svg", marker: "/images/markers/snowman.jpg", model: "./models/snowman/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интес  создать гармоничный и удобочитаемый инфейс" },
        { id: "9", name: "СФУ", icon: "./images/icons/list/squirrel.svg", marker: "/images/markers/squirrel.jpg", model: "./models/squirrel/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интес  создать гармоничный и удобочитаемый инфейс" },
        { id: "10", name: "День защитника отечества", icon: "./images/icons/list/star.svg", marker: "/images/markers/star.jpg", model: "./models/star/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интес  создать гармоничный и удобочитаемый инфейс" },
        { id: "11", name: "Новый год (Ёлка)", icon: "./images/icons/list/tree.svg", marker: "/images/markers/tree.jpg", model: "./models/tree/scene.glb", description: "Следуя этим рекомендациям, вы сможете создать гармоничный и удобочитаемый интес  создать гармоничный и удобочитаемый инфейс" },
    ];

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<string>(data[0]?.id || "");
    const [selectedModelUrl, setSelectedModelUrl] = useState<string>(data[0]?.model || "");
    const [selectedMarkerUrl, setSelectedMarkerUrl] = useState<string>(data[0]?.marker || "");
    const [selectedText, setselectedText] = useState<string>(data[0]?.description || "");

    const handleModelSelect = (id: string, modelUrl: string, markerUrl: string, description: string) => {
        setSelectedId(id);
        setSelectedModelUrl(modelUrl);
        setSelectedMarkerUrl(markerUrl);
        setselectedText(description)
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
            <div className={styles.contentMarkers}>
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
                            <Model key={selectedModelUrl} url={selectedModelUrl ?? './models/snowman/scene.glb'} />
                        </div>
                        <div className={styles.textBlock}>
                        <h2 className="title-2">Название модели</h2>
                        <div className={styles.textScroll}>
                            <p className="text">
                                {selectedText}
                            </p>
                        </div>
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
                                        onClick={() => handleModelSelect(item.id, item.model, item.marker, item.description)}
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
