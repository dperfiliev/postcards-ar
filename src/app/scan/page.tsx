"use client"

import styles from "./page.module.css"

import Header from "../components/header/header"

import Footer from "../components/footer/footer"

import ARScene from "./ARScene"

import Button from "../components/button/button"

import { useEffect } from "react"

import Head from "next/head"


export default function Scan() {


    return (

        <>


      <div className={styles.scan}>
            <ARScene />
            
            <div className={styles.panel}>
                <Button text="Главная" />
                <Button text="Снимок" />
            </div>
            
        </div>
        </>
        
    )
}
