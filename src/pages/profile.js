/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Accordion from "../components/Accordion";
import TopNav from "../components/TopNav";
import Avatar, { genConfig } from "react-nice-avatar";
import axios from "axios";
import { useAuth } from "@arcana/auth-react";
import { rpcURLnetwork, authArcana } from "../../src/utils/authArcana";

const acc = `
                    <p class="text-[#9a9999] text-base">
                      Your avatar acts as a entry point to these exclusive events. A few lucky winners among these can get a chance to:
                    </p>
                    <div class="grid grid-cols-3 gap-4 mt-4">
                      <div class="relative custom-gray shadow-lg rounded-lg  overflow-hidden">
                        <div class=" h-full w-full absolute bottom-0 opacity-40">
                          <Image
                            src="/england.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            alt="profile"
                          />
                        </div>
                        <div class="relative py-8 px-5">
                          <h3 class="text-md font-extrabold text-indigo-50 leading-snug mb-2">
                            Meet cricketers
                          </h3>
                        </div>
                        <div class="text-xs text-custom-gray p-2">
                          Required avatar lvl: 97
                        </div>
                      </div>

                      <div class="relative custom-gray shadow-lg rounded-lg  overflow-hidden">
                        <div class=" h-full w-full absolute bottom-0 opacity-40">
                          <Image
                            src="/england.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            alt="profile"
                          />
                        </div>
                        <div class="relative py-8 px-5">
                          <h3 class="text-md font-extrabold text-indigo-50 leading-snug mb-2">
                            Get a signed ball
                          </h3>
                        </div>
                        <div class="text-xs text-custom-gray p-2">
                          Required avatar lvl: 97
                        </div>
                      </div>

                      <div class="relative custom-gray shadow-lg rounded-lg  overflow-hidden">
                        <div class=" h-full w-full absolute bottom-0 opacity-40">
                          <Image
                            src="/england.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            alt="profile"
                          />
                        </div>
                        <div class="relative py-5 px-5">
                          <h3 class="text-md font-extrabold text-indigo-50 leading-snug mb-2">
                            Participate in crictos with your avatar
                          </h3>
                        </div>
                        <div class="text-xs text-custom-gray p-2">
                          Required avatar lvl: 97
                        </div>
                      </div>

                      <div class="relative custom-gray shadow-lg rounded-lg  overflow-hidden">
                        <div class=" h-full w-full absolute bottom-0 opacity-40">
                          <Image
                            src="/england.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            alt="profile"
                          />
                        </div>
                        <div class="relative py-8 px-5">
                          <h3 class="text-md font-extrabold text-indigo-50 leading-snug mb-2">
                            On Ground access
                          </h3>
                        </div>
                        <div class="text-xs text-custom-gray p-2">
                          Required avatar lvl: 97
                        </div>
                      </div>

                      <div class="relative custom-gray shadow-lg rounded-lg  overflow-hidden">
                        <div class=" h-full w-full absolute bottom-0 opacity-40">
                          <Image
                            src="/england.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            alt="profile"
                          />
                        </div>
                        <div class="relative py-8 px-5">
                          <h3 class="text-md font-extrabold text-indigo-50 leading-snug mb-2">
                            Personalised merchandise
                          </h3>
                        </div>
                        <div class="text-xs text-custom-gray p-2">
                          Required avatar lvl: 97
                        </div>
                      </div>

                      <div class="relative custom-gray shadow-lg rounded-lg  overflow-hidden">
                        <div class=" h-full w-full absolute bottom-0 opacity-40">
                          <Image
                            src="/england.jpg"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            alt="profile"
                          />
                        </div>
                        <div class="relative py-8 px-5">
                          <h3 class="text-md font-extrabold text-indigo-50 leading-snug mb-2">
                            VIP and fan box access
                          </h3>
                        </div>
                        <div class="text-xs text-custom-gray p-2">
                          Required avatar lvl: 97
                        </div>
                      </div>
                    </div>`;

const acc2 = `
  <p><span class="text-lg mr-2">o</span>Win contests</p>
  <p><span class="text-lg mr-2">o</span>Interacting with icc products such as ICC TV, criio, crictos </p>
  <p><span class="text-lg mr-2">o</span>Shopping on icc store</p>
  <p><span class="text-lg mr-2">o</span>View time on icc TV</p>
  <p><span class="text-lg mr-2">o</span>Buying tickets</p>
`;

export default function Profile() {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useAuth();

  const [config, setConfig] = useState({});
  const [profile, setProfile] = useState({});
  const [userInfo, setUserInfo] = useState({});
  // const config = genConfig();
  // console.log(config);
  // async function getConfig() {
  //   return await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/get-avatar`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  // }
 
  console.log(profile);
  console.log(userInfo);
  useEffect(() => {
    const token = localStorage.getItem("token");
    authArcana.getUser().then((res) => {
      console.log("inside res");
      console.log(res);
      setUserInfo(res);
    });
    try {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/get-avatar`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("inside res");
          console.log(res);

          console.log(res.data);
          let updatedConfig = res.data;
          updatedConfig.shape = "rounded";
          setConfig(updatedConfig);
        })
        .catch((err) => {
          console.log("inside axios error");
          console.log(err);
          if (err.response.status === 500) {
            axios
              .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/me/create-avatar`,
                { ...genConfig() },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
                let updatedConfig = res.data;
                updatedConfig.shape = "rounded";
                setConfig(updatedConfig);
              });
          }
        });
    } catch (error) {
      console.log("error catch");
      if (error.response.status === 500) {
        console.log("inside error status");
      }
    }
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      });
  }, []);

  return (
    <>
      <TopNav />
      <div className="mt-20 text-custom-white">
        <div className="flex w-full mb-10">
          <div className=" w-[50%] relative mx-10">
            {/* <Image
            src="https://picsum.photos/600"
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
            alt="profile"
          /> */}
            <div className="w-full h-full rounded overflow-hidden ">
              {/* <img
              className="w-full"
              src="https://picsum.photos/200"
              alt="Sunset in the mountains"
            /> */}
              <div className={`flex bg-[${config.bgColor}]`}>
                <div className="relative h-96 w-[100%] ">
                  {/* <Image
                  src="https://media.giphy.com/media/10fS0TJxfFRDLW/giphy.gif"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                  alt="profile"
                /> */}
                  <Avatar className=" h-full w-[60%] mx-auto" {...config} />
                </div>
                {/* <div className={`w-[50%] h-96 bg-[${config.bgColor}]`}></div> */}
              </div>

              <div className="px-2 py-4 mt-4 custom-gray">
                <div className="font-bold text-xl mb-2">Avatar lvl.</div>
                <p className="text-[#9a9999] text-base pb-2">
                  As you progress through levels with your avatar, you will
                  receive a distinctive accessory that becomes increasingly rare
                  as you advance. The more rare your avatar's attributes are,
                  the more rare your avatar becomes, increasing the value of its
                  associated NFT.
                </p>
                <div className="flex align-middle items-center">
                  <div className="w-[90%]">
                    <ProgressBar
                      completed={profile.level}
                      bgColor="#206FBF"
                      height="10px"
                      isLabelVisible={false}
                      baseBgColor="#E4E4E4"
                    />
                  </div>

                  <p className=" w-[10%] px-2">{profile.level}/100</p>
                </div>
              </div>
              <div className="custom-gray rounded-md p-4 mt-6">
                <h1 className="font-Poppins text-custom-white text-2xl mb-2">
                  Attributes
                </h1>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col bg-[#253239] border border-[#206fbf] p-2 items-center rounded-md">
                    <p className="text-custom-blue1 pb-1">Hair Style</p>
                    <p className="pb-3 text-xl">{config.hairStyle}</p>
                    <p className="text-xs">45% have this trait</p>
                  </div>
                  <div className="flex flex-col bg-[#253239] border border-[#206fbf] p-2 items-center rounded-md">
                    <p className="text-custom-blue1 pb-1">Facewear</p>
                    <p className="pb-3 text-xl">{config.glassesStyle}</p>
                    <p className="text-xs">31% have this trait</p>
                  </div>
                  <div className="flex flex-col bg-[#253239] border border-[#206fbf] p-2 items-center rounded-md">
                    <p className="text-custom-blue1 pb-1">Skin tone</p>
                    <p className="pb-3 text-xl">{config.faceColor}</p>
                    <p className="text-xs">50% have this trait</p>
                  </div>
                  <div className="flex flex-col bg-[#253239] border border-[#206fbf] p-2 items-center rounded-md">
                    <p className="text-custom-blue1 pb-1">Body wear</p>
                    <p className="pb-3 text-xl">{config.shirtStyle}</p>
                    <p className="text-xs">35% have this trait</p>
                  </div>
                  <div className="flex flex-col bg-[#253239] border border-[#206fbf] p-2 items-center rounded-md">
                    <p className="text-custom-blue1 pb-1">Head wear</p>
                    <p className="pb-3 text-xl">{config.hatStyle}</p>
                    <p className="text-xs">22% have this trait</p>
                  </div>
                  <div className="flex flex-col bg-[#253239] border border-[#206fbf] p-2 items-center rounded-md">
                    <p className="text-custom-blue1 pb-1">Mouth</p>
                    <p className="pb-3 text-xl">{config.mouthStyle}</p>
                    <p className="text-xs">58% have this trait</p>
                  </div>
                </div>
                <h1 className="font-Poppins text-custom-white text-2xl mt-5">
                  Avatar Rarity
                </h1>
                <div className="flex align-middle items-center">
                  <div className="w-[90%]">
                    <ProgressBar
                      completed={profile.rarity}
                      bgColor="#206FBF"
                      height="10px"
                      isLabelVisible={false}
                      baseBgColor="#E4E4E4"
                    />
                  </div>

                  <p className=" w-[10%] px-2">{profile.rarity}%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] mr-10">
            <p className="text-custom-blue1 text-xl py-2">
              {userInfo?.address}
            </p>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-Poppins py-2">{userInfo?.name}</h1>
              <div className="flex">
                <BsTwitter className="text-white text-2xl mr-3" />
                <AiFillLinkedin className="text-white text-2xl mr-3" />
                <BsInstagram className="text-white text-2xl" />
              </div>
            </div>
            <h1 className="text-xl">Wallet balance: {profile.balance} ICCTX</h1>
            <div className="my-4 mt-6">
              <Accordion title="What can i do with my avatar?" desc={acc} />
              <Accordion title="How do i level up my avatar?" desc={acc2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
