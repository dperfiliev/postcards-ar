import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"

import Button from "../button/button"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className="text-footer">
                По вопросам и предложениям <br /> обращайтесь в Telegram
            </p>
            <div className={styles.socials}>
                {/* <Button isRound={true} imgSrc="/images/icons/ui/vk.svg" href="https://vk.com/"/> */}
                <Link className={styles.wrapper} href="/">
                    <Image className={styles.sibfu} src="/images/icons/ui/sibfu.svg" alt="" fill />
                </Link>
                <Button isRound={true} imgSrc="/images/icons/ui/tg.svg" href="https://web.telegram.org/"/>
            </div>
        </div>
    )
}
