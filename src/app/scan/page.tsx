"use client"

import styles from "./page.module.css"
import dynamic from "next/dynamic";
//import ARScene from "./ARScene"

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
  const ClientOnlyComponent = dynamic(() => import("./ARScene"), { ssr: false });
  return (

    <div className={styles.scan}>
      <ClientOnlyComponent />

      <div className={styles.panel}>
        <Button isRound={true} imgSrc="/images/icons/ui/close-black.png" onClick={goToMainPage} />
      </div>

    </div>


  )
}
