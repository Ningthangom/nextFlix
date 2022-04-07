import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner/banner'
import Card from '../components/card/card'
import SectionCards from '../components/card/sectionCard'
import Navbar from '../components/Nav/navbar'
import styles from '../styles/Home.module.css';

import {getVideos} from '../lib/videos';



export async function getServerSideProps () {
const disneyVideos = getVideos(); 

  return { props: { disneyVideos } };
}

interface Props{ 
  disneyVideos: {id: string, imgUrl: string} []
}

const Home: NextPage<Props> = ({disneyVideos}: Props) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="Angelo" />
      <Banner
        title="How to train your dragon"
        subtitle=" very cute dragons"
        imgUrl="/static/bannerImage.webp"
      />

      <SectionCards title="Disney" videos={disneyVideos} size="large" />
      <SectionCards title="Ocean" videos={disneyVideos} size="medium" />
      <SectionCards title="Ocean" videos={disneyVideos} size="small" />
    </div>
  );
}

export default Home
