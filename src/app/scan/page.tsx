"use client"

import styles from "./page.module.css"

import Header from "../components/header/header"

import Footer from "../components/footer/footer"

import ARScene from "./ARScene"

import Button from "../components/button/button"

import { useEffect } from "react"

import Head from "next/head"
import { div } from "three/webgpu"

export default function Scan() {

    useEffect(() => {
        console.log("RES:", document.querySelector('meta[name="viewport"]'));
      }, []);

    return (

        <>
          {/*
          <Head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui, viewport-fit=cover" 
        />
      </Head>
          */}

      <div className={styles.scan}>
            <ARScene />
            {/*
            <div className={styles.panel}>
                <Button text="Главная" />
                <Button text="Снимок" />
            </div>
            */}
        </div>
        </>
        
    )
}
//style={{ width: '100vw', height: '100vh', margin: 0 }}