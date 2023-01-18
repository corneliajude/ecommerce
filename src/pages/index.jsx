import { Layout } from '@/layouts'
import { css } from '@emotion/css'
import Head from 'next/head'
import { FaApple } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Layout>
        <main>  
         this is main
        </main>
       </Layout>
    </>
  )
}
