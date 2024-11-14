import styles from "./button.module.css"
import Image from "next/image"

import Link from "next/link"

interface ButtonT {
    text?: string | null,
    isScalable?: boolean,
    isRound?: boolean,
    imgSrc?: string,
    href?: string
}

export default function Button({ isRound, isScalable, text, imgSrc, href }: ButtonT) {
    return (
        isRound && href ? (
            <Link href={href}>
                <button className={styles.button_round}>
                    {imgSrc && (<Image className={styles.icon} src={imgSrc} alt="" fill />)}
                </button>
            </Link>
        ) : (
            isScalable && href ? (
                <Link href={href}>
                    <button className={styles.scalable}>
                        {imgSrc && (<Image className={styles.icon_scalable} src={imgSrc} alt="" fill />)}
                        <span className={`text-button ${styles.text}`}>
                            {text}
                        </span>
                    </button>
                </Link>
            ) : (
                <button className={styles.button}>
                    <span className="text-button">
                        {text}
                    </span>
                </button>
            )
        )
    )
}