import React from 'react'
import TopNav from '../components/TopNav'
import axios from 'axios'
// import FantasyCard from '../components/FantasyCard'
const fantasy = () => {
    const data = [
        {
            id: 1,
            name: 'Aaron Phangiso',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png',
        },
        {
            id: 2,
            name: 'Virat Kohli',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/viratkohli1_card_1sa2023/viratkohli1_card_1sa2023-surface-1.png',
        },
        {
            id: 3,
            name: 'Rohit Sharma',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/rohitsharma1_card_1sa2023/rohitsharma1_card_1sa2023-surface-1.png',
        },
        {
            id: 4,
            name: 'MS Dhoni',
            image: 'https://d3kwa22uej3blq.cloudfront.net/moment/msdhoni1_card_1sa2023/msdhoni1_card_1sa2023-surface-1.png',
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

            <div className="grid grid-cols-4 gap-5 mt-10 text-custom-white mx-10">
                {
                    data.map((item) => {
                        return (
                            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
                                <img
                                    className="w-2/3 h-2/3 ml-12 mt-5"
                                    src={
                                        item.image
                                    }
                                    alt="Sunset in the mountains"
                                />

                                <div className="flex px-8 py-4">
                                    <div className="font-bold text-xl mb-2">{
                                        item.name
                                    }</div>

                                </div>
                                <div className="px-8 items-right">
                                    <button
                                        onClick={() => { addToCart(item) }}
                                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                                        Add to List
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl"
                onClick={() => { submitChanges() }}
            >
                Submit
            </button>
        </>
    )
}

export default fantasy;
