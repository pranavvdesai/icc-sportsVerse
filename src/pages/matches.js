import React from 'react'
import TopNav from '../components/TopNav'
import MatchCard from '../components/MatchCard'
import axios from 'axios'

const matches = ({
    data
}) => {
    console.log(data)
    return (
        <>
            <TopNav />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-custom-white mx-10">
                {
                    data.map((match) => {
                        return (
                            <MatchCard
                                key={match.id}
                                item={match}
                                matchId={match.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default matches


export async function getStaticProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/matches/`)
    console.log(res.data)
    return {
        props: {
            data: res.data,
        },
    };
}