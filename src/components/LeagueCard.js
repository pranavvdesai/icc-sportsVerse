import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";

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
                  <div className="flex-2 w-full py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://prod-assets-s3.faze.app/assets/marketplace/marketplace-bg-web.webp')]">
                    <div className="flex flex-col justify-between flex-grow pl-5">
                      {/* Div to display date and time on the right hand side of the card */}
                      <Link href="/leagues">
                        <div className="flex flex-1 ">
                          <div className="flex flex-1  mx-5">
                            <img
                              src="https://d3kwa22uej3blq.cloudfront.net/original/1677521040029/BAN%20vs%20ENG.png"
                              className="w-full h-full"
                           alt="xd"
                           />
                          </div>
                          <h4 className="text-5xl font-bold mr-5">
                            BAN VS ENG
                            <div className="flex flex-1 text-lg  m-8">
                              STARTING IN
                            </div>
                            <div className="flex flex-1 text-lg  m-8">
                              00 : 16 : 00 hrs
                            </div>
                            <div className="flex flex-1 text-lg  m-8">
                              STATUS : NOT STARTED
                            </div>
                            <div className="m-8 text-lg">
                              <ProgressBar
                                completed="0"
                                bgColor="#206FBF"
                                height="10px"
                                isLabelVisible={false}
                                baseBgColor="#E4E4E4"
                              />
                              0% completed
                            </div>
                            <div className="flex m-8 ">
                          <h5 className="text-white text-xl text-right">
                            Starting Date: 1/3/2023{" "}
                          </h5>
                          
                        </div>
                        <div className="flex m-8">
                          {/* Buttons to edit project and view project */}
                          <div className="   text-gray-500">
                            <h4 className="text-2xl text-white ">
                              Rewards : Rs 10000/-
                            </h4>
                          </div>
                          
                        </div>
                       <div className="m-8">
                       <Link href="/fantasy">
                       <button
                            className="hidden md:inline-flex bg-transparent text-white text-xl px-8 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                          >
                            Play Now
                          </button>
                          </Link>
                       </div>
                          </h4>
                          <h5 className="text-white text-lg">
                            
                            <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              Trending
                            </span>
                          </h5>
                        </div>

                       
                       
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="flex-2 w-full py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://prod-assets-s3.faze.app/assets/marketplace/marketplace-bg-web.webp')]">
                    <div className="flex flex-col justify-between flex-grow pl-5">
                      {/* Div to display date and time on the right hand side of the card */}
                      <Link href="/leagues">
                        <div className="flex flex-1 ">
                          <div className="flex flex-1  mx-5">
                            <img
                              src="https://d3kwa22uej3blq.cloudfront.net/original/1677394903328/LAQ%20vs%20ISU.png"
                              className="w-full h-full"
                           alt="xd"
                           />
                          </div>
                          <h4 className="text-5xl font-bold mr-5">
                            LAQ VS ISU
                            <div className="flex flex-1 text-lg  m-8">
                              STARTING IN
                            </div>
                            <div className="flex flex-1 text-lg  m-8">
                              00 : 16 : 00 hrs
                            </div>
                            <div className="flex flex-1 text-lg  m-8">
                              STATUS : LIVE
                            </div>
                            <div className="text-lg m-8">
                              <ProgressBar
                                completed="50"
                                bgColor="#206FBF"
                                height="10px"
                                isLabelVisible={false}
                                baseBgColor="#E4E4E4"
                              />
                              40% completed
                            </div>
                            <div className="flex m-8 ">
                          <h5 className="text-white text-xl text-right">
                            Started on : 1/1/2023{" "}
                          </h5>
                        </div>
                        <div className="flex  m-8">
                          {/* Buttons to edit project and view project */}
                          <div className="flex  text-gray-500">
                            <h4 className="text-2xl text-white ">
                              Rewards : Rs 10000/-
                            </h4>
                          </div>
                          
                        </div>
                        <div className="m-8">
                       <Link href="/fantasy">
                       <button
                            className="hidden md:inline-flex bg-transparent text-white text-xl px-8 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                          >
                            Play Now
                          </button>
                          </Link>
                       </div>
                          </h4>
                          <h5 className="text-white text-lg">
                            
                            <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              Trending
                            </span>
                          </h5>
                          
                        </div>

                       
                      
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex-2 w-full py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://prod-assets-s3.faze.app/assets/marketplace/marketplace-bg-web.webp')]">
                    <div className="flex flex-col justify-between flex-grow pl-5">
                      {/* Div to display date and time on the right hand side of the card */}
                      <Link href="/leagues">
                        <div className="flex flex-1 ">
                          <div className="flex flex-1  mx-5">
                            <img
                              src="https://d3kwa22uej3blq.cloudfront.net/original/1677306739919/AUS%20vs%20SAF.png"
                              className="w-full h-full"
                           alt="xd"
                           />
                          </div>
                          <h4 className="text-5xl font-bold mr-5">
                            AUS-W VS SAF-W
                            <div className="flex flex-1 text-lg  m-8">
                              STARTING IN
                            </div>
                            <div className="flex flex-1 text-lg  m-8">
                              00 : 16 : 00 hrs
                            </div>
                            <div className="flex flex-1 text-lg  m-8">
                              STATUS : COMPLETED
                            </div>
                            <div className="text-lg m-8">
                              <ProgressBar
                                completed="100"
                                bgColor="#206FBF"
                                height="10px"
                                isLabelVisible={false}
                                baseBgColor="#E4E4E4"
                              />
                              100% completed
                            </div>
                            <div className="flex m-8 ">
                          <h5 className="text-white text-xl text-right">
                            Started on : 1/12/2022{" "}
                          </h5>
                        </div>
                        <div className="m-8">
                        <div className="flex ">
                          {/* Buttons to edit project and view project */}
                          <div className="flex   text-gray-500">
                            <h4 className="text-2xl text-white ">
                              Rewards : Rs 10000/-
                            </h4>
                          </div>
                          
                        </div>
                      
                       </div>
                       <div className="m-8">
                       <Link href="/fantasy">
                       <button
                            className="hidden md:inline-flex bg-transparent text-white text-xl px-8 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                          >
                            Play Now
                          </button>
                          </Link>
                       </div>
                          </h4>
                          <h5 className="text-white text-lg">
                            
                            <span class="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                              Trending
                            </span>
                          </h5>
                         
                        </div>

                       
                      </Link>
                    </div>
                  </div>
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
