import React from 'react';
import { Header, Listing, Navigation, Search } from '../components'
const Home = () => {
    return (
        <>
            <Header />
            <Search />
            <Navigation />
            <Listing />
        </>
    )
}

export default Home