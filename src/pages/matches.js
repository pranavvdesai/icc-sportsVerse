import React from 'react'
import TopNav from '../components/TopNav'
import MatchCard from '../components/MatchCard'

const matches = () => {
    return (
        <>
            <TopNav />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-custom-white">
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
            </div>
        </>
    )
}

export default matches