import styles from "./button-screen.module.css"

import Image from "next/image"

interface ButtonT {
    src: string
}

export default function ButtonScreen({ src } : ButtonT){
    return(
        <button className={styles.button}>
            <Image className={styles.img} src={src} alt="" fill />
        </button>
    )
}