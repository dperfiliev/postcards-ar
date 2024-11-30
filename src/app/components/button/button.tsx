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
                        {imgSrc && (<Image className={styles.icon_scalable} src={imgSrc} alt="" width={30} height={30}/>)}
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
                            (<Image className={styles.icon} src={imgSrc} alt="" width={30} height={30}/>)
                        </button>
                    </Link>
                ) : (
                    <button className={styles.button_round} onClick={onClick}>
                        <Image className={styles.icon} src={imgSrc} alt="" width={30} height={30}/>
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


       /*
         isRound && href ? (
        <Link href={href}>
            <button className={styles.button_round}>
                {imgSrc && (<Image className={styles.icon} src={imgSrc} alt="" fill />)}
            </button>
        </Link>
    ) :



        (
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
                href ? (
                    <Link href={href}>
                        <button className={styles.button}>
                            <span className="text-button">
                                {text}
                            </span>
                        </button>
                    </Link>
                )
                    :
                    imgSrc && isRound ? (
                        <button className={styles.button_round}>
                            <Image className={styles.icon} src={imgSrc} alt="" fill />
                        </button>
                    ) : (<button className={styles.button} onClick={onClick}>
                        <span className="text-button">
                            {text}
                        </span>
                    </button>)
            )
        )
        */

    )
}