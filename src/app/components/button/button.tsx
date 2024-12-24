import styles from "./button.module.css"
import Image from "next/image"

import Link from "next/link"

interface ButtonT {
    text?: string | null,
    isScalable?: boolean,
    isRound?: boolean,
    imgSrc?: string,
    href?: string,
    onClick?: () => void
}

export default function Button({ isRound, isScalable, text, imgSrc, href, onClick }: ButtonT) {
    return (
        isScalable ? (
            href ? (
                <Link href={href}>
                    <button className={styles.scalable}>
                        {imgSrc && (<Image className={styles.icon_scalable} src={imgSrc} alt="" fill sizes="40px" priority={true}/>)}
                        <span className={`text-button ${styles.text}`}>
                            {text}
                        </span>
                    </button>
                </Link>
            ) : (
                <button className={styles.scalable}>
                    <span className="text-button">
                        {text}
                    </span>
                </button>
            )
        ) : (
            isRound && imgSrc ? (
                href ? (
                    <Link href={href}>
                        <button className={styles.button_round}>
                            (<Image className={styles.icon} src={imgSrc} alt="" fill sizes="40px" priority={true}/>)
                        </button>
                    </Link>
                ) : (
                    <button className={styles.button_round} onClick={onClick}>
                        <Image className={styles.icon} src={imgSrc} alt="" fill sizes="40px" priority={true}/>
                    </button>
                )
            ) : (
                <button className={styles.button} onClick={onClick}>
                    <span className="text-button">
                        {text}
                    </span>
                </button>
            )
        )

    )
}