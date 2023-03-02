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
          <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="flex-2 w-full py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-[url('https://prod-assets-s3.faze.app/assets/marketplace/marketplace-bg-web.webp')]">
                <div className="flex flex-col justify-between flex-grow pl-5">
                  {/* Div to display date and time on the right hand side of the card */}
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
                        <div className="flex justify-between items-end mt-8">
                          {/* Buttons to edit project and view project */}
                          <div className="flex  items-center justify-end text-gray-500">
                            <h4 className="text-2xl text-white mx-5">
                              Rewards : Rs 10000/-
                            </h4>
                          </div>
                          <Link rel="stylesheet" href="/fantasy">
                            <button
                              className="hidden md:inline-flex bg-transparent text-white text-xl px-8 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            "
                            >
                              Play Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </h4>
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
