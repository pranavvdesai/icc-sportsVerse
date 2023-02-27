import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContestCard = () => {
  //console.log(item);
  // convert the date to a readable format
  //const date = new Date(item.date).toDateString();
  return (
    <div className="flex flex-wrap">
     
        <div className="flex-auto w-1/3 py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://thumbs.dreamstime.com/b/man-s-hand-fire-holding-up-gold-medal-winner-competition-dark-background-101561914.jpg')]">
          {/* Just for image div-LHS */}
          {/* Content div-RHS */}
          <div className="flex flex-col justify-between flex-grow pl-5">
            {/* Div to display date and time on the right hand side of the card */}
            <Link href="/leagues">
            <div className="flex justify-between">
              <h4 className="text-2xl font-bold">SETS</h4>
              <h5 className="text-white text-lg">
                <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                  New
                </span>
                <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                  Free to Play
                </span>
              </h5>
            </div>
            <div className="flex justify-between">
              <h5 className="text-white text-md">Date published : 1/1/2023 </h5>
            </div>
            <div className="border-b w-full pt-2" />
            {/* Team div */}
            {/* <div className="flex items-center mt-6">
            <Image src={item.home_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.home_team}
            </h1>
          </div>
          <div className="flex items-center mt-6">
            <Image src={item.away_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.away_team}
            </h1>
          </div> */}
            {/* Price div */}
            <div className="flex justify-between items-end mt-8">
              {/* Buttons to edit project and view project */}
              <div className="flex space-x-4 items-center justify-end text-gray-500">
                {/* <Link href="/wallet">
                <button
                  className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                >
                  Buy Tickets
                </button>
              </Link> */}
                <h4 className="text-xl text-gray-400 mr-5">
                  Rewards : Rs 10000/-
                </h4>
              </div>
            </div>
            </Link>
          </div>
        </div>

      <div className="flex-auto w-1/3 py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://thumbs.dreamstime.com/b/man-s-hand-fire-holding-up-gold-medal-winner-competition-dark-background-101561914.jpg')]">
        {/* Just for image div-LHS */}
        {/* Content div-RHS */}
        <div className="flex flex-col justify-between flex-grow pl-5">
        <Link href="/league">
          {/* Div to display date and time on the right hand side of the card */}
          <div className="flex justify-between">
            <h4 className="text-2xl font-bold">QUIZES</h4>
            <h5 className="text-white text-lg">
              <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                New
              </span>
              <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                Free to Play
              </span>
            </h5>
          </div>
          <div className="flex justify-between">
            <h5 className="text-white text-md">Date published : 1/1/2023 </h5>
          </div>
          <div className="border-b w-full pt-2" />
          {/* Team div */}
          {/* <div className="flex items-center mt-6">
            <Image src={item.home_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.home_team}
            </h1>
          </div>
          <div className="flex items-center mt-6">
            <Image src={item.away_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.away_team}
            </h1>
          </div> */}
          {/* Price div */}
          <div className="flex justify-between items-end mt-8">
            {/* Buttons to edit project and view project */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
              {/* <Link href="/wallet">
                <button
                  className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                >
                  Buy Tickets
                </button>
              </Link> */}
              <h4 className="text-lg text-gray-400 mr-5">
                Rewards : Rs 10000 /-
              </h4>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div className="flex-auto w-1/2 py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://c4.wallpaperflare.com/wallpaper/690/934/426/marvel-contest-of-champions-games-hd-marvel-wallpaper-preview.jpg')]">
        {/* Just for image div-LHS */}
        {/* Content div-RHS */}
        <div className="flex flex-col justify-between flex-grow pl-5">
          {/* Div to display date and time on the right hand side of the card */}
          <Link href="/leagues">
          <div className="flex justify-between">
            <h4 className="text-2xl font-bold">Leagues</h4>
            <h5 className="text-white text-lg">
              <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                New
              </span>
              <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                Free to Play
              </span>
            </h5>
          </div>
          <div className="flex justify-between">
            <h5 className="text-white text-md">Date published : 1/1/2023 </h5>
          </div>
          <div className="border-b w-full pt-2" />
          {/* Team div */}
          {/* <div className="flex items-center mt-6">
            <Image src={item.home_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.home_team}
            </h1>
          </div>
          <div className="flex items-center mt-6">
            <Image src={item.away_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.away_team}
            </h1>
          </div> */}
          {/* Price div */}
          <div className="flex justify-between items-end mt-8">
            {/* Buttons to edit project and view project */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
              {/* <Link href="/wallet">
                <button
                  className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                >
                  Buy Tickets
                </button>
              </Link> */}
              <h4 className="text-lg text-gray-400 mr-5">
                Rewards : Rs 10000 /-
              </h4>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div className="flex-auto py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://media.istockphoto.com/id/1030851308/photo/diamond-silver-crown-miss-pageant-beauty-contest.jpg?s=612x612&w=0&k=20&c=lTZPhVhu51TBDZhBq_CqIQEbz21JJjq-RB6Hdxa8aao=')]">
        {/* Just for image div-LHS */}
        {/* Content div-RHS */}
        <div className="flex flex-col justify-between flex-grow pl-5">
          {/* Div to display date and time on the right hand side of the card */}
          
          <div className="flex justify-between">
            <h4 className="text-2xl font-bold">TOP REWARD WINNERS</h4>
          </div>

          <div className="border-b w-full pt-2" />
          {/* Team div */}
          {/* <div className="flex items-center mt-6">
            <Image src={item.home_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.home_team}
            </h1>
          </div>
          <div className="flex items-center mt-6">
            <Image src={item.away_team_logo} width={70} height={70} />
            <h1 className="text-2xl text-white font-bold mx-3">
              {item.away_team}
            </h1>
          </div> */}
          {/* Price div */}
          <div className="flex justify-between items-end mt-8">
            {/* Buttons to edit project and view project */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
              <Link href="/wallet">
                <button
                  className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                >
                  See Leaderboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
