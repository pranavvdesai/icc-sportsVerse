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
          <div className="grid grid-cols-4 gap-5">
            <div className="h-full rounded-lg  overflow-hidden shadow-lg bg-black border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-4"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/asifali1/asifali1-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-2 justify-center items-center">
                <div className="font-bold text-xl mb-2">Asif Ali</div>
                <span className="ml-5 text-red-500">
                  new
                </span>
              </div>
             <div className="px-8 pb-4 justify-center items-center">
             <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black">
                  Add to List
                </button>
             </div>
            </div>
            <div className="h-full rounded  overflow-hidden shadow-lg bg-black border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-4"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/irfanpathan1/irfanpathan1-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-2 justify-center items-center">
                <div className="font-bold text-xl mb-2">Irfan Pathan</div>
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
            <div className="h-full rounded  overflow-hidden shadow-lg bg-black border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-4"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/hayleymatthews1/hayleymatthews1-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-2 justify-center items-center">
                <div className="font-bold text-xl mb-2">Hayley Matthews</div>
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
            <div className="h-full rounded  overflow-hidden shadow-lg bg-black border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-4"
                src="https://prod-assets-s3.faze.app/moment/viratkohli1/viratkohli1-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-2 justify-center items-center">
                <div className="font-bold text-xl mb-2">Virat Kohli</div>
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
            <div className="h-full rounded  overflow-hidden shadow-lg bg-black border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-4"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/haiderali1/haiderali1-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-2 justify-center items-center">
                <div className="font-bold text-xl mb-2">Haidar Ali</div>
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
            <div className="h-full rounded  overflow-hidden shadow-lg bg-black border">
              <img
                className="w-2/3 h-2/3 ml-12 mt-4"
                src="https://d3kwa22uej3blq.cloudfront.net/moment/dasunshanaka1/dasunshanaka1-surface-1.png"
                alt="Sunset in the mountains"
              />
              
              <div className="flex px-8 py-2 justify-center items-center">
                <div className="font-bold text-xl mb-2">Dasun Shanaka</div>
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
