"use client"

import styles from "./page.module.css"

import ARScene from "./ARScene"

import Button from "../components/button/button"

import { useRouter } from "next/navigation";

export default function Scan() {
  const router = useRouter();

  const goToMainPage = () => {
    router.back();
  };

  return (
    <div className={styles.scan}>

      <meta
        aframe-injected=""
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui, viewport-fit=cover"
      />

      <ARScene />

      <div className={styles.panel}>
        <Button isRound={true} imgSrc="/images/icons/ui/close-black.png" onClick={goToMainPage} />
      </div>

    </div>
  )
}
