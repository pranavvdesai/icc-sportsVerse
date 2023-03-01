import React from "react";
import { useState } from "react";
// import TopNav from "../../components/TopNav";
import { useRouter } from 'next/router'
import BronzeCard from "../../components/BronzeCard";
import SilverCard from "../../components/SilverCard";
import GoldCard from "../../components/GoldCard";
import DetailMatchCard from "../../components/DetailMatchCard";
import TopNav from "../../components/TopNav";


const Ticket = () => {
    const router = useRouter()
    const { matchId } = router.query
    return (
        <>
            <TopNav />

            <div className="flex justify-center align-center mt-8">
                <div className="w-5/12">
                    <DetailMatchCard
                        matchId={matchId}
                    />
                </div>
                <div className="w-5/12">
                    <BronzeCard />
                    <SilverCard />
                    <GoldCard />
                </div>

            </div>
        </>
    )
}

export default Ticket
