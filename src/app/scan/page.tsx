"use client"

import styles from "./page.module.css"

import ARScene from "./ARScene"

import Button from "../components/button/button"

import { useRouter } from "next/navigation";

export default function Scan() {
  

  return (

    <div className={styles.scan}>
      <ARScene />

      <div className={styles.panel}>
        <Button isRound={true} imgSrc="/images/icons/ui/close-black.png" />
      </div>

    </div>
    
  )
}
