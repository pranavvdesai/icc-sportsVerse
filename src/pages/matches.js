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
            {
                data.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-custom-white mx-10">
                        {
                            data ? data.map((match) => {
                                return (
                                    <MatchCard
                                        key={match.id}
                                        item={match}
                                        matchId={match.id}
                                    />
                                )
                            })
                                :
                                <div className="flex items-center justify-center">
                                    <div
                                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status">
                                        <span
                                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Loading...</span
                                        >
                                    </div>
                                </div>
                        }
                    </div>
                    :
                    <div className="text-3xl font-bold text-white mx-12 mt-5">No Matches Available</div>
            }
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