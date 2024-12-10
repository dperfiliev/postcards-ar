import styles from "./footer.module.css"


import Button from "../button/button"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className="text-footer">
                По вопросам и предложениям <br /> обращайтесь в Telegram
            </p>
            <div className={styles.socials}>
                <Button isRound={true} imgSrc="/images/icons/ui/tg.png" href="https://t.me/perfilev_danil"/>
            </div>
        </div>
    )
}
