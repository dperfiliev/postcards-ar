import styles from "./button-scan.module.css"

import Image from "next/image"

interface ButtonScanT {
    src: string
}

export default function ButtonScan({ src } : ButtonScanT){
    return(
        <button className={styles.button}>
            <Image className={styles.img} src={src} alt="" fill />
        </button>
    )
}