import styles from "./button.module.css"

interface ButtonT {
    text: string,
}

export default function Button({ text }: ButtonT) {
    return (
        <button className={styles.button}>
            <span className="text-button">
                {text}
            </span>
        </button>
    )
}