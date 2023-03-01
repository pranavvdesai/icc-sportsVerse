import React from 'react'
import TopNav from '../components/TopNav'
import Image from 'next/image'
import MerchandiseCard from '../components/MerchandiseCard'
import FoodCard from '../components/FoodCard'
// import MatchCard from '../components/MatchCard'

const store = () => {
    return (
        <>
            <TopNav />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-10">
                <MerchandiseCard heading="Merchandise" />
                <FoodCard heading="Food" />
                {/* <StoreCard heading="Food" /> */}
                {/* <StoreCard heading="Claim Schwags" /> */}
            </div>
        </>
    )
}

export default store