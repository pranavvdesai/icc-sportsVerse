import React from 'react'
import TopNav from '../components/TopNav'
import FantasyCard from '../components/FantasyCard'
const fantasy = () => {
    return (
        <>
            <TopNav />
            <div className='text-5xl bold text-white ml-10 my-8'>FANTASY</div>
            <div className='text-xl bold text-white mx-10 '>
            Get used to the game before you enter the pro leagues!

            </div>
            <div className=" mt-10 text-custom-white mx-10">
                {/* {
                    data.map((item) => {
                        return (
                            <ContestCard item={item} />
                        )
                    })
                } */}
                <FantasyCard />
            </div>
        </>
    )
}

export default fantasy;
