import React from "react";
import Image from "next/image";
import Link from "next/link";

const LeagueCard = () => {
  //console.log(item);
  // convert the date to a readable format
  //const date = new Date(item.date).toDateString();
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                UPCOMING
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                ACTIVE
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                COMPLETED
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
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
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex-auto w-1/2 py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://c4.wallpaperflare.com/wallpaper/690/934/426/marvel-contest-of-champions-games-hd-marvel-wallpaper-preview.jpg')]">
                    {/* Just for image div-LHS */}
                    {/* Content div-RHS */}
                    <div className="flex flex-col justify-between flex-grow pl-5">
                      {/* Div to display date and time on the right hand side of the card */}
                      <Link href="/profile">
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
                          <h5 className="text-white text-md">
                            Date published : 1/1/2023{" "}
                          </h5>
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
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
