import React from 'react'
import TopNav from '../components/TopNav'
import MatchCard from '../components/MatchCard'

const matches = ({
    data
}) => {
    console.log(data[0])
    return (
        <>
            <TopNav />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-custom-white mx-10">
                {
                    data.map((item) => {
                        return (
                            <MatchCard item={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default matches


export async function getStaticProps() {
    const res = await fetch("https://iccbackend.up.railway.app/matches/").then((res) => res.json());
    console.log(res)
    return {
        props: {
            data: res,
        },
    };
}