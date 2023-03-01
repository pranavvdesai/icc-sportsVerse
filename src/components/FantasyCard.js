import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";

const FantasyCard = () => {
  //console.log(item);
  // convert the date to a readable format
  //const date = new Date(item.date).toDateString();
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-2">
            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-5"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-4">
                <div className="font-bold text-xl mb-2">Aaron Phangiso</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 items-right">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-5"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-4">
                <div className="font-bold text-xl mb-2">Aaron Phangiso</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 items-right">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-5"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-4">
                <div className="font-bold text-xl mb-2">Aaron Phangiso</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 items-right">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-5"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-4">
                <div className="font-bold text-xl mb-2">Aaron Phangiso</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 items-right">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-5"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-4">
                <div className="font-bold text-xl mb-2">Aaron Phangiso</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 items-right">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
            <div className="h-4/5 rounded  overflow-hidden shadow-lg bg-grey-700 border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-5"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/aaronphangiso1_card_1sa2023/aaronphangiso1_card_1sa2023-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-4">
                <div className="font-bold text-xl mb-2">Aaron Phangiso</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 items-right">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyCard;
