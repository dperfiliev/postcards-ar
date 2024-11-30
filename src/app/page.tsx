import React from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import ARScene from './scan/ARScene';

import styles from "./page.module.css"

import Header from './components/header/header';
import ButtonScan from './components/button-scan/button-scan';
import ButtonAR from './components/button-ar/button-ar';
import Footer from './components/footer/footer';


export default async function Home() {

  
  return (
    <div className="pagedesign">

      <div className="gradients">
        <div className='pink_1'> </div>
        <div className='pink_2'></div>
        <div className='purple_1'></div>
        <div className='purple_2'></div>
        <div className='cyan_1'></div>
        <div className='cyan_2'></div>
      </div>

      <Header />
      <div className="content">
        <div className={styles.open}>
          <h1 className='title-0'>
            Виртуальные <br /> открытки
          </h1>
          <h2 className='title-1'>
            Сервис маркеров <br /> дополненной <br /> реальности
          </h2>
        </div>
        <div className={styles.scan}>
          <ButtonScan src="/images/icons/ui/scan.png" href='/scan'/>


          <p className='text-caption'>
            Нажмите, <br /> чтобы отсканировать
          </p>
          <h3 className='title-2'>
            Открытки, <br /> которые оживают
          </h3>
        </div>
        <div className={styles.ar}>
          <ButtonAR src="/images/icons/ui/gift.png" href='/ar-markers'/>
          <p className='text-caption'>
            Нажмите, чтобы <br /> выбрать открытку
          </p>
          <h4 className='title-3'>
            Подарите особое <br /> воспоминание
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}


