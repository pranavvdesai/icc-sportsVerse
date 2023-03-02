import Image from 'next/image'
import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import MerchStoreCard from '../components/MerchStoreCard'
import axios from 'axios'

const merchstore = () => {
    const [walletBalance, setWalletBalance] = React.useState(0);
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setWalletBalance(res.data.balance);
            });
    }, []);
    // console.log(balance);
    return (
        <>
            <TopNav />
            <h3 className="text-3xl font-bold text-white mx-10 mt-5">Merchandise Store</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-3">
                <MerchStoreCard
                    walletBalance={walletBalance}
                />
            </div>
        </>
    )
}

export default merchstore