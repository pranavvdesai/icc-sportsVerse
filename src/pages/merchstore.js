import Image from 'next/image'
import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import MerchStoreCard from '../components/MerchStoreCard'
import axios from 'axios'

const merchstore = () => {
    const [walletBalance, setWalletBalance] = React.useState(0);
    const [merchandise, setMerchandise] = React.useState([]);
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
        async function getStoreDetails() {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/store/merchandise`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((res) => {
                    console.log(res.data);
                    setMerchandise(res.data);
                });
        }
        getStoreDetails();
    }, []);
    // console.log(balance);
    return (
        <>
            <TopNav />
            <h3 className="text-3xl font-bold text-white mx-10 mt-5">Merchandise Store</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-3">
                {
                    merchandise.map((item) => {
                        return (
                            <MerchStoreCard
                                walletBalance={walletBalance}
                                item={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default merchstore