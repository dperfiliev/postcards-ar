import styles from "./header.module.css"
import Image from "next/image"
import Button from "../button/button"

export default function Header(){
    return(
        <div className={styles.header}>
            <span className="text-logotype">AR-postcards</span>
            <div className={styles.nav}>
                <Button text="Помощь"/>
                <Button text="О Сервисе"/>
            </div>
            <div className={styles.mobile}> 
            <button className={styles.button}>
                    <Image className={styles.img} src="/images/icons/telegram.svg" alt="" fill />
                </button>
                <button className={styles.button}>
                    <Image className={styles.img} src="/images/icons/telegram.svg" alt="" fill />
                </button>
            </div>
        </div>
    )
}