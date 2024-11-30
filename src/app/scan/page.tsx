"use client"

import styles from "./page.module.css"

import Button from "../components/button/button"

import { useRouter } from "next/navigation";

import dynamic from 'next/dynamic';

const ARScene = dynamic(() => import('./ARScene'), { ssr: false });

export default function Scan() {
  const router = useRouter();

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
