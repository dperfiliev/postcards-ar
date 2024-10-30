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
                <Button isRound={true} imgSrc="/images/icons/telegram.svg"/>
                <Button isRound={true} imgSrc="/images/icons/telegram.svg"/>
            </div>
        </div>
    )
}

/*
<ButtonSocials src="/images/icons/telegram.svg" />
                <ButtonSocials src="/images/icons/telegram.svg" />
*/