import React from 'react'
import Image from 'next/image'

const FoodCard = ({
    heading
}) => {
    // console.log(img)
    return (
        <div className="my-10 mx-5 border-2 border-gray-600 rounded-2xl shadow-lg custom-gray cursor-pointer hover:shadow-lg hover:bg-gray-700 transition duration-500 ease-in">
            {/* <div className="rounded overflow-hidden h-full"> */}
            <div className="flex justify-center items-center">
                <Image className="rounded-xl" src="https://foodtank.com/wp-content/uploads/2021/09/gemma-stpjHJGqZyw-unsplash.jpg" width={400} height={100} />

            </div>
            <div className="px-6 py-4">
                <div className="text-white mb-2 text-2xl font-bold px-2
                        font-Poppins
                    ">
                    {heading}
                </div>
                <p className="mb-3 px-2 text-gray-400">
                    Purchase your favourite and mouth-watering food from the all in one food court brought to you by the official food partner of the tournament.
                </p>
            </div>

            {/* </div> */}
        </div>
    )
}

export default FoodCard