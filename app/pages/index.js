import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gili Loftus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar>
        {/* <LogoContainer> */}
          <Image 
            src="/favicon.ico"
            alt="logo"
            layout="fill"
            objectFit="fill"
          />
        {/* </LogoContainer> */}
          <Langs>
            {/* <Link href>
            </Link>
            <Link /> */}
          </Langs>
      </Topbar>

      <main className={styles.main}>
        <ImgContainer>
          <Image 
            src="/GILI-homepage.jpg"
            alt="background image for landing page"
            layout="fill"
            objectFit="cover"
          />
        </ImgContainer>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}


const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`
const Topbar = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6rem;
`

const LogoContainer = styled.div`
  height: 100%;
  width: 3rem;
  border: 1px solid red;
`

const Langs = styled.ul`

`