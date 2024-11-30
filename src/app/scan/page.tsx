"use client"

import styles from "./page.module.css"

import ARScene from "./ARScene"

import Button from "../components/button/button"

import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Scan() {
  const router = useRouter();

  useEffect(() => {
    // Any code that accesses the window object should go here
  }, []);

  const goToMainPage = () => {
    router.back();
  };

  return (

    <div className={styles.scan}>
      <ARScene />

      <div className={styles.panel}>
        <Button isRound={true} imgSrc="/images/icons/ui/close-black.png" onClick={goToMainPage} />
      </div>

    </div>


  )
}
