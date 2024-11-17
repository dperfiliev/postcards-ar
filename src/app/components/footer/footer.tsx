import styles from "./footer.module.css"
import Image from "next/image"

import Button from "../button/button"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className="text-footer">
                По вопросам и предложениям <br /> обращайтесь в социальных сетях
            </p>
            <div className={styles.socials}>
                <Button isRound={true} imgSrc="/images/icons/ui/vk.svg" href="https://vk.com/"/>
                <Button isRound={true} imgSrc="/images/icons/ui/tg.svg" href="https://web.telegram.org/"/>
            </div>
        </div>
    )
}
