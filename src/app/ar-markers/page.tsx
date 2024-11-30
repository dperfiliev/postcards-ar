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
        { id: "1", name: "День основания СФУ", icon: "/images/icons/list/squirrel.png", marker: "/images/markers/squirrel.jpg", download: "/images/downloads/squirrel.png", model: "./models/squirrel/scene.glb", modelName: "Белочка", description: "Модель белки с пушистым хвостом передаёт атмосферу лесной сказки и приносит чувство восторга." },
        { id: "2", name: "Новый год (Снеговик)", icon: "/images/icons/list/snowman.png", marker: "/images/markers/snowman.jpg", download: "/images/downloads/snowman.png", model: "./models/snowman/scene.glb", modelName: "Снеговик", description: "Модель снеговика с весёлыми глазами и тёплым шарфом приносит ощущение уюта и праздничного настроения." },
        { id: "3", name: "Новый год (Ёлка)", icon: "/images/icons/list/tree.png", marker: "/images/markers/tree.jpg", download: "/images/downloads/tree.png", model: "./models/tree/scene.glb", modelName: "Ёлка", description: "Модель новогодней елки с яркими шарами создаёт атмосферу праздника и волшебства, принося радость и тепло в каждый дом." },
        { id: "4", name: "День рождения (Торт)", icon: "/images/icons/list/cake.png", marker: "/images/markers/cake.jpg", download: "/images/downloads/cake.png", model: "./models/cake/scene.glb", modelName: "Помадковый торт", description: "Праздничный торт с розовым кремом, украшенный свечами и ягодами, создаёт атмосферу праздника и радости."},
        { id: "5", name: "День рождения (Подарок)", icon: "/images/icons/list/gift.png", marker: "/images/markers/gift.jpg", download: "/images/downloads/gift.png", model: "./models/gift/scene.glb", modelName: "Подарок с бантом", description: "Подарок, упакованный в яркую обёрточную бумагу и украшенный большим бантом, создаёт праздничное настроение."},
        { id: "6", name: "День святого Валентина", icon: "/images/icons/list/heart.png", marker: "/images/markers/heart.jpg", download: "/images/downloads/heart.png", model: "./models/heart/scene.glb", modelName: "Сердце", description: "Модель красного сердца с гладкой текстурой и насыщенным цветом, создаёт атмосферу любви и нежности."},
        { id: "7", name: "День Победы", icon: "/images/icons/list/nine.png", marker: "/images/markers/nine.jpg", download: "/images/downloads/nine.png", model: "./models/nine/scene.glb", modelName: "Без названия", description: "Доработать текст" },
        { id: "8", name: "День космонавтики", icon: "/images/icons/list/rocket.png", marker: "/images/markers/rocket.jpg", download: "/images/downloads/rocket.png", model: "./models/rocket/scene.glb", modelName: "Космическая ракета", description: "Стремление к звёздам и открытиям! Модель с футуристичным дизайном вдохновляет на мечты о космических полётах." },
        { id: "9", name: "Международный женский день", icon: "/images/icons/list/rose.png", marker: "/images/markers/rose.jpg", download: "/images/downloads/rose.png", model: "./models/rose/scene.glb", modelName: "Бутон розы", description: "Изящные лепестки, глубокий и насыщенный цвет этой розы, символизируют силу и красоту женщин." },
        { id: "10", name: "День защитника отечества", icon: "/images/icons/list/star.png", marker: "/images/markers/star.jpg", download: "/images/downloads/star.png", model: "./models/star/scene.glb", modelName: "Звезда", description: "Модель красной звезды символизирует мужество и героизм, выражая уважение и благодарность защитникам Отечества." },
        { id: "11", name: "День знаний", icon: "/images/icons/list/bell.png", marker: "/images/markers/bell.jpg", download: "/images/downloads/bell.png", model: "./models/bell/scene.glb", modelName: "Колокольчик", description: "Колокольчик с золотистым корпусом и яркой красной лентой, аккуратно завязанной вокруг ручки, символизирует начало учебного года."},
    ];

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<string>(data[0]?.id || "");
    const [selectedModelUrl, setSelectedModelUrl] = useState<string>(data[0]?.model || "");
    const [selectedMarkerUrl, setSelectedMarkerUrl] = useState<string>(data[0]?.marker || "");
    const [selectedDownload, setSelectedDownload] = useState<string>(data[0]?.download || "");
    const [selectedModelName, setSelectedModelName] = useState<string>(data[0]?.modelName || "");
    const [selectedText, setselectedText] = useState<string>(data[0]?.description || "");

    const handleModelSelect = (id: string, modelUrl: string, markerUrl: string, download: string, modelName: string, description: string) => {
        setSelectedId(id);
        setSelectedModelUrl(modelUrl);
        setSelectedMarkerUrl(markerUrl);
        setSelectedDownload(download);
        setSelectedModelName(modelName);
        setselectedText(description);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: selectedModelName,
                text: selectedText,
                url: selectedDownload,
            }).catch(() => {
            });
        }
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
                                    sizes="(max-width: 1400px) 100px, (max-width: 576px) 80px"
                                    onLoad={handleImageLoad}
                                />

                            </div>
                            <Model key={selectedModelUrl} url={selectedModelUrl ?? './models/snowman/scene.glb'} />
                        </div>
                        <div className={styles.textBlock}>
                        <h2 className="title-2">{selectedModelName}</h2>
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
                                id="holidayName"
                                name="holidayName"
                                autoComplete="off"
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
                                    <Image className={styles.inputIcon} src={searchQuery.length == 0 ? "/images/icons/ui/search.png" : "/images/icons/ui/close.png"} alt="" fill sizes="40px"/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.listWrapper}>
                            <div className={styles.list}>
                                {filteredData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.item} ${selectedId === item.id ? styles.active : ''}`}
                                        onClick={() => handleModelSelect(item.id, item.model, item.marker, item.download, item.modelName, item.description)}
                                    >
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                className={styles.icon}
                                                src={item.icon}
                                                alt=""
                                                fill
                                                sizes="40px"
                                            />
                                        </div>
                                        <h3 className="title-3">{item.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {selectedDownload && (
                   <div className={styles.download}>
                    <Button text="Отправить" onClick={handleShare}/>
                     <a href={selectedDownload} download>
                        <Button text="Скачать" />
                    </a>
                   </div>
                )}

            </div>
            <Footer />
        </div>
    );
}
