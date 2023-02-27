import React from 'react'
import TopNav from '../components/TopNav'
import LeagueCard from '../components/LeagueCard'
const leagues = ({
    data
}) => {
    console.log(data[0])
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


export async function getStaticProps() {
    const res = await fetch("https://iccbackend.up.railway.app/matchs/").then((res) => res.json());
    console.log(res)
    return {
        props: {
            data: res,
        },
    };
}