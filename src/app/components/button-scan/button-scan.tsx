import styles from "./button-scan.module.css"

import Image from "next/image"
import Link from "next/link"

interface ButtonScanT {
    src: string,
    href: string
}

export default function ButtonScan({ src, href }: ButtonScanT) {
    return (
        <Link href = {href}>
            <button className={styles.button}>
                <div className={styles.light}></div>
                <Image className={styles.img} src={src} alt="" fill />
            </button>
        </Link>
    )
}