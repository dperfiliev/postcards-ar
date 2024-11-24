"use client"

import styles from "./page.module.css"

import ARScene from "./ARScene"

import Button from "../components/button/button"


import html2canvas from "html2canvas"


export default function Scan() {


    const goToMainPage = () => {
      window.location.href = "/";  // Принудительное обновление страницы
    };

    
  
  
    return (

      <div className={styles.scan}>
            <ARScene />
            
            <div className={styles.panel}>
                <Button isRound={true} imgSrc="./images/icons/ui/close-black.svg" onClick={goToMainPage}/>
                {/**/}
            </div>
            
        </div>
      
        
    )
}
