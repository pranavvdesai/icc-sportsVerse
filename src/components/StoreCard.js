import React from 'react'
import Image from 'next/image'

const StoreCard = () => {
    return (
        <div className="my-10 mx-5 border-2 border-gray-600 rounded-2xl shadow-lg custom-gray">
            <div className="rounded overflow-hidden h-full">
                <div className="px-6 py-4">
                    <div className="text-white mb-2 text-2xl font-bold px-2
                        font-Poppins
                    ">
                        PACKS
                    </div>
                    <p className="mb-3 px-2 text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus rem praesentium fugiat, maxime consequuntur eius dicta doloremque odit ipsam nisi, iusto enim reiciendis? Quisquam, quod. Quisquam, quod. Quisquam, quod.
                    </p>
                </div>
                <div className="flex justify-center mt-2 mb-6 justify-items-center">
                    <Image src="https://prod-assets-s3.faze.app/assets/marketplace/packs-web.webp" width={200} height={200} />

                </div>
            </div>
        </div>
    )
}

export default StoreCard