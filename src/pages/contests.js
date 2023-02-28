import React from 'react'
import TopNav from '../components/TopNav'
import ContestCard from '../components/ContestCard'
const contests = () => {
    return (
        <>
            <TopNav />
            <div className='text-6xl extra-bold text-white mx-10 my-5 '>PLAY</div>
            <div className='text-xl bold text-white mx-10 '>
            Own moments and player cards to experience cricket like never before. Submit your sets to win cash rewards and other goodies in the world’s best cricket strategy game!
            </div>
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