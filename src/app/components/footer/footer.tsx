import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className="text-footer">
                По вопросам и предложениям <br /> обращайтесь в социальных сетях
            </p>
            <div className={styles.socials}>
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

/*
<ButtonSocials src="/images/icons/telegram.svg" />
                <ButtonSocials src="/images/icons/telegram.svg" />
*/