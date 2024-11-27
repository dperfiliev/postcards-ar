import styles from "./button-ar.module.css"

import Image from "next/image"
import Link from "next/link"

interface ButtonART {
    src: string,
    href: string
}

export default function ButtonAR({ src, href }: ButtonART) {
    return (
        <Link href={href}>
            <button className={styles.button}>
                <Image className={styles.img} src={src} alt="" fill sizes="40px"/>
            </button>
        </Link>
    )
}