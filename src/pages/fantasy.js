import React from 'react'
import TopNav from '../components/TopNav'
import axios from 'axios'
import ProgressBar from "@ramonak/react-progress-bar";

// import FantasyCard from '../components/FantasyCard'
const fantasy = () => {
    const data = [
        {
            id: 1,
            name: 'Irfan Pathan',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/irfanpathan1/irfanpathan1-surface-1.png',
        },
        {
            id: 2,
            name: 'Virat Kohli',
            image: 'https://prod-assets-s3.faze.app/moment/viratkohli1/viratkohli1-surface-1.png',
        },
        {
            id: 3,
            name: 'Haley Matthews',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/hayleymatthews1/hayleymatthews1-surface-1.png',
        },
        {
            id: 4,
            name: 'Dasun Shanaka',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/dasunshanaka1/dasunshanaka1-surface-1.png',
        },
    ]
    const [cartItems, setCartItems] = React.useState([])
    function addToCart(item) {
        setCartItems([...cartItems, item]);

    }
    const submitChanges = () => {
        if (cartItems.length > 0) {
            axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/participate-contest`, {
                reduce_amount: 10,
            },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                .then((res) => {
                    console.log(res)
                    alert('You have won 20 ICCTXN in this contest')
                })
        }
    }
    console.log(cartItems.length)
    return (
        <>
            <TopNav />
            <div className='text-5xl bold text-white ml-10 my-8'>FANTASY</div>
            <div className='text-xl bold text-white mx-10 '>
                Get used to the game before you enter the pro leagues!

            </div>
           

            <div className="grid grid-cols-4 gap-5 mt-10 text-custom-white mx-10">
                {
                    data.map((item,i) => {
                        return (
                            <div key={i} className="h-full rounded  overflow-hidden shadow-lg custom-gray border">
                                <img
                                    className="w-2/3 h-2/3 ml-12 mt-4"
                                    src={
                                        item.image
                                    }
                                    alt="Sunset in the mountains"
                                />

                                <div className="flex px-8 py-2 justify-center items-center">
                                    <div className="font-bold text-xl mb-2">{
                                        item.name
                                    }</div>

                                </div>
                              
                                <div className="flex ml-2 mb-4 justify-center items-center">
                                <div className="font-bold text-xl mb-2">Points:</div>
                                        <div className="font-bold text-xl mb-2 mx-2">10</div>
                                    <button
                                        onClick={() => { addToCart(item) }}
                                        className="hidden md:inline-flex bg-transparent text-black bg-white text-lg px-4 py-1 border border-grey-500 rounded-lg
                            hover:bg-black hover:text-white">
                                        Add to List
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex my-8 pt-8  justify-center items-center bottom-0 '>
            <ProgressBar
                                completed={cartItems.length * 25}
                                bgColor="#206FBF"
                                height="15px"
                                width="300px"
                                isLabelVisible={true}
                                baseBgColor="#E4E4E4"
                              />
            <div className="mx-10">
                <h1 className="text-xl text-white">
                    Cart Items:
                </h1>
                {
                    cartItems.length > 0 ?
                        <span className="text-white"> {cartItems.length} </span>
                        :
                        <span className="text-white">No items in cart</span>

                }
            </div>
            <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl"
                onClick={() => { submitChanges() }}
            >
                Submit
            </button>
            </div>
        </>
    )
}

export default fantasy;
