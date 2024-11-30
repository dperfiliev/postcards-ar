import styles from "./header.module.css"
import Image from "next/image"
import Button from "../button/button"
import Link from "next/link"

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <span className="text-logotype">ar-postcards</span>
            </Link>
            <div className={styles.nav}>
                <Button isScalable={true} text="Помощь" imgSrc="/images/icons/ui/question.png" href="/help" />
                <Button isScalable={true} text="О Сервисе" imgSrc="/images/icons/ui/exclamation.png" href="/about" />
            </div>
        </div>
    )
}