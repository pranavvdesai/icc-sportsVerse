import React from 'react'
import TopNav from '../components/TopNav'
import ContestCard from '../components/ContestCard'
const contests = ({
    data
}) => {
    console.log(data[0])
    return (
        <>
            <TopNav />
            <div className='text-4xl bold text-white mx-10 my-8'>PLAY</div>
            <div className=" mt-10 text-custom-white mx-10">
                {/* {
                    data.map((item) => {
                        return (
                            <ContestCard item={item} />
                        )
                    })
                } */}
                <ContestCard />
            </div>
        </>
    )
}

export default contests


export async function getStaticProps() {
    const res = await fetch("https://iccbackend.up.railway.app/matchs/").then((res) => res.json());
    console.log(res)
    return {
        props: {
            data: res,
        },
    };
}