import React from 'react'
import TopNav from '../components/TopNav'
import LeagueCard from '../components/LeagueCard'
const leagues = () => {
    return (
        <>
            <TopNav />
            <div className='text-4xl bold text-white mx-10 my-8'>LEAGUES</div>
            <div className=" mt-10 text-custom-white mx-10">
                {/* {
                    data.map((item) => {
                        return (
                            <ContestCard item={item} />
                        )
                    })
                } */}
                <LeagueCard />
            </div>
        </>
    )
}

export default leagues
