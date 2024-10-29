import styles from "./button-ar.module.css"

import Image from "next/image"

interface ButtonART {
    src: string
}

export default function ButtonAR({ src } : ButtonART){
    return(
        <button className={styles.button}>
            <Image className={styles.img} src={src} alt="" fill />
        </button>
    )
}