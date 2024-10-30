import styles from "./header.module.css"
import Image from "next/image"
import Button from "../button/button"

export default function Header(){
    return(
        <div className={styles.header}>
            <span className="text-logotype">AR-postcards</span>
            <div className={styles.nav}>
                <Button isScalable={true} text="Помощь" imgSrc="/images/icons/telegram.svg"/>
                <Button isScalable={true} text="О Сервисе" imgSrc="/images/icons/telegram.svg"/>
            </div>
        </div>
    )
}