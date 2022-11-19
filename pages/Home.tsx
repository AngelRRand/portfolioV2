import Link from 'next/link'
import React from 'react'
import PageLayoud from '../component/PageLayoud'
import styles from '../styles/Home.module.css'
const Home = () => {
    return (
        <PageLayoud
            title='Explore to Galaxy!'
            content='Home portfolio'
            styleContainer='container_Space'

        >
            <Link href={'/'}><h1>/</h1></Link>
        </PageLayoud>
    )
}

export default Home