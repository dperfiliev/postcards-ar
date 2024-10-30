import styles from "./button.module.css"
import Image from "next/image"

interface ButtonT {
    text?: string | null,
    isScalable?: boolean
    isRound?: boolean
    imgSrc?: string
}

export default function Button({ isRound, isScalable, text, imgSrc }: ButtonT) {
    return (
        isRound ? (
            <div>
                <button className={styles.button_round}>
                { imgSrc && ( <Image className={styles.icon} src={imgSrc} alt="" fill/> ) }
                </button>
            </div>
        ) : (
            !isScalable ? (
                <button className={styles.button}>
                    <span className="text-button">
                        {text}
                    </span>
                </button>
            ) : (
                <button className={styles.scalable}>
                    { imgSrc && ( <Image className={styles.icon_scalable} src={imgSrc} alt="" fill/> ) }
                    <span className={`text-button ${styles.text}`}>
                        {text}
                    </span>
                </button>
            )
        )
    )
}