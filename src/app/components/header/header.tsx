import styles from "./header.module.css"
import Image from "next/image"
import Button from "../button/button"
import Link from "next/link"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <Link className={styles.wrapper} href="/">
                    <Image className={styles.sibfu} src="/images/icons/ui/sibfu.svg" alt="" fill />
                </Link>
                <Link href="/">
                    <span className="text-logotype">ar-postcards</span>
                </Link>


            </div>
            <div className={styles.nav}>
                <Button isScalable={true} text="Помощь" imgSrc="/images/icons/ui/question.svg" href="/help" />
                <Button isScalable={true} text="О Сервисе" imgSrc="/images/icons/ui/exclamation.svg" href="/about" />
            </div>
        </div>
    )
}