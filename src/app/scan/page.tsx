"use client"

import styles from "./page.module.css"

import ARScene from "./ARScene"

import Button from "../components/button/button"

export default function Scan() {


    const goToMainPage = () => {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    };

    
  
  
    return (

      <div className={styles.scan}>
            <ARScene />
            
            <div className={styles.panel}>
                <Button isRound={true} imgSrc="/images/icons/ui/close-black.png" onClick={goToMainPage}/>
            </div>
            
        </div>
      
        
    )
}
