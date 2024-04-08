"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (expand) {
        window.scrollTo(0, 0);
      }
    };

    if (expand) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expand]);

  return (
    <>
      {/* modal */}
      {expand ? (
        <>
          <div className="w-screen flex flex-col justify-between h-screen px-6 py-4">
            <div>
              <div className="w-full flex justify-between  ">
                <div className="max-w-[50px]">
                  <img
                    src="/Images/Headerlogo.png"
                    className="w-full h-full"
                  ></img>
                </div>

                <div
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  <svg
                    class="w-6 h-6 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-10 w-full flex justify-center items-center flex-col ">
                <div className="font-normal res-sm-text text-base gap-6 flex flex-col">
                  <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                    Home
                  </p>
                  <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                    About
                  </p>
                  <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                    Services
                  </p>
                  <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                    Portfolio
                  </p>
                  <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                    Blog
                  </p>
                  <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                    Contact
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex  justify-between items-center">
              <div>
                <p className="text-white font-normal  res-sm-text  text-base transition-all duration-300 hover:text-[#293CE1]">
                  Quick call +134 (99) 865
                </p>
              </div>

              <div>
                <button className="bg-[#293CE1] text-white res-sm-text rounded-[100px] py-2 px-4">
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* header */}
      <nav className="lg:block hidden">
        <div className=" relative z-50 flex  justify-between items-center lg:px-28 py-8 ">
          <div className="max-w-[104px]">
            <img src="/Images/Headerlogo.png" className="w-full h-full"></img>
          </div>

          <div className="flex gap-6 items-center">
            <div className="font-normal gap-10 items-center res-sm-text flex text-base ">
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                Home
              </p>
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                About
              </p>
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                Services
              </p>
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                Portfolio
              </p>
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                Blog
              </p>
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                Contact
              </p>
            </div>

            <div className="font-normal  res-sm-text ml-16 text-base">
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                Quick call
              </p>
              <p className="text-white transition-all duration-300 hover:text-[#293CE1]">
                +134 (99) 865
              </p>
            </div>

            <div>
              <button className="bg-[#293CE1] text-white rounded-[100px] py-4 px-8">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile header */}
      <nav className="lg:hidden block">
        <div className="flex relative z-50  justify-between items-center px-6 py-4">
          <div className="max-w-[50px]">
            <img src="/Images/Headerlogo.png" className="w-full h-full"></img>
          </div>

          <div
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </nav>

      <div className="w-full">
        {/* hero section */}
        <section className="w-full relative flex lg:flex-row flex-col">
          <div className="lg:w-1/2 relative px-6 py-4 lg:px-28 lg:py-10 w-full">
            <div className="font-bold tracking-wider lg:leading-[96px] leading-[50px] text-5xl lg:text-[80px] text-white headings">
              <p>Digital</p>
              <p>Marketing</p>
              <p className="text-grad pb-5 lg:pb-0">Agency</p>
            </div>
            <div>
              <p className="font-normal text-lg text-[#C6C6C6] mt-4">
                Crafting top-notch digital experiences step by step, paying
                attention to every detail.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-[#293CE1] px-10 py-3 font-medium text-lg text-white rounded-[100px]">
                LET'S TALK
              </button>
            </div>

            <div className="absolute top-[2rem] z-40 left-0 w-full">
              <img src="/Images/hero-left-mask.png" className="w-full"></img>
            </div>
          </div>

          <div className="absolute  lg:block hidden top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/Images/between.png"></img>
          </div>

          <div className="lg:w-1/2  w-full relative">
            <div class="absolute flex justify-center items-center md:right-[15vw] right-[15vw] top-[6vw] lg:right-[11vw] md:top-16 lg:top-24 z-50">
              <img src="/Images/curve text.png" class="rotateAnimation"></img>
              <div class="flex absolute  justify-center items-center">
                <img src="/Images/Vector.png"></img>
              </div>
            </div>

            <div className="absolute top-8 left-36">
              <img src="/Images/star.png"></img>
            </div>
            <div className="absolute z-10 h-full w-full  top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/Images/hero-sec-mask.png"></img>
            </div>
            <div className="relative px-6 py-4 lg:mt-16 lg:px-28 z-20 h-full w-full">
              <img src="/Images/hero-sec-hd.png"></img>
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center items-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="63"
              height="63"
              rx="31.5"
              stroke="white"
            />
            <path
              d="M27.6743 41.9529L31.5194 45.7979C31.6468 45.9254 31.8197 45.997 32 45.997C32.1803 45.997 32.3532 45.9254 32.4806 45.7979L36.3257 41.9529C36.421 41.8579 36.486 41.7367 36.5124 41.6047C36.5388 41.4727 36.5254 41.3358 36.4739 41.2115C36.4225 41.0871 36.3352 40.9808 36.2232 40.9061C36.1113 40.8313 35.9796 40.7915 35.845 40.7917L32.6796 40.7927L32.6806 18.4021L31.3194 18.4021L31.3204 40.7927L28.155 40.7917C28.0204 40.7915 27.8887 40.8313 27.7768 40.9061C27.6648 40.9808 27.5775 41.0871 27.5261 41.2115C27.4746 41.3358 27.4612 41.4727 27.4876 41.6047C27.514 41.7367 27.579 41.8579 27.6743 41.9529Z"
              fill="white"
            />
          </svg>
        </div>

        {/* second section */}
        <div className="w-full mt-10 h-[1px] bg-[#1B2842]"></div>
        <div className="gradient-bg relative pb-[10rem]">
          <div className="w-full  relative flex mt-20 lg:flex-row flex-col">
            <div className="lg:w-1/2 lg:block hidden z-50 lg:pl-28 relative lg:py-8 px-6 py-4 w-full">
              <div className="absolute left-[20%] bottom-0 z-20 ">
                <img src="/Images/sec-left.png"></img>
              </div>
              <div className="bg-white z-10 absolute bottom-0  rounded-[16px] w-[70%] h-full"></div>
            </div>

            <div className="flex justify-center h-full w-full px-6 relative items-center lg:hidden ">
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2  z-20 ">
                <img src="/Images/sec-left.png"></img>
              </div>
              <div className="bg-white mt-1 rounded-[20px] w-full h-[250px] md:h-[500px]"></div>
            </div>

            <div className="lg:w-1/2 w-full lg:pr-28 relative lg:py-8 px-6 py-4 mt-10">
              <p className="text-[#FF5A4A] font-normal text-base">Who we are</p>
              <p className="heading text-[#E1E8F0] leading-[60px] mt-4 font-bold text-[56px]">
                Building Software For World Changers
              </p>
              <p className="font-normal text-base text-[#CBD5E0] mt-4">
                At DigiSense Hub, we take pride in our relentless pursuit of
                perfection in design and development, and our eagerness to
                assist passionate founders achieve their goals. Success, after
                all, is a team play, and we are here to collectively aim for the
                top together.
              </p>

              <div className="flex items-center gap-6 mt-4">
                <div className="bg-[#293CE1] text-white font-medium text-base rounded-[8px] px-10  py-4">
                  MORE ABOUT US
                </div>

                <div className="flex gap-4 font-medium text-base text-[#CBD5E0] items-center">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.668 20.7786V11.2212C12.6682 11.1016 12.7005 10.9843 12.7617 10.8815C12.8228 10.7788 12.9104 10.6943 13.0154 10.6371C13.1204 10.5798 13.2388 10.5518 13.3583 10.5561C13.4778 10.5603 13.594 10.5966 13.6946 10.6612L21.1293 15.4386C21.2234 15.4989 21.3009 15.5819 21.3545 15.68C21.4082 15.7781 21.4363 15.8881 21.4363 15.9999C21.4363 16.1117 21.4082 16.2217 21.3545 16.3198C21.3009 16.4179 21.2234 16.5009 21.1293 16.5612L13.6946 21.3399C13.594 21.4045 13.4778 21.4408 13.3583 21.445C13.2388 21.4493 13.1204 21.4213 13.0154 21.364C12.9104 21.3068 12.8228 21.2223 12.7617 21.1196C12.7005 21.0168 12.6682 20.8995 12.668 20.7799V20.7786Z"
                        fill="white"
                      />
                      <path
                        d="M1.33203 15.9999C1.33203 7.89992 7.8987 1.33325 15.9987 1.33325C24.0987 1.33325 30.6654 7.89992 30.6654 15.9999C30.6654 24.0999 24.0987 30.6666 15.9987 30.6666C7.8987 30.6666 1.33203 24.0999 1.33203 15.9999ZM15.9987 3.33325C12.6393 3.33325 9.41747 4.66777 7.04201 7.04323C4.66655 9.41869 3.33203 12.6405 3.33203 15.9999C3.33203 19.3593 4.66655 22.5811 7.04201 24.9566C9.41747 27.3321 12.6393 28.6666 15.9987 28.6666C19.3581 28.6666 22.5799 27.3321 24.9554 24.9566C27.3308 22.5811 28.6654 19.3593 28.6654 15.9999C28.6654 12.6405 27.3308 9.41869 24.9554 7.04323C22.5799 4.66777 19.3581 3.33325 15.9987 3.33325Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p>MORE ABOUT US</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:px-28  relative  px-6 ">
            <div className="w-full flex justify-end">
              <div className="-mb-3 -mr-3">
                <img src="/Images/star2.png"></img>
              </div>
            </div>
            <div className="border-[#1B2842] border flex justify-between gap-6 lg:gap-0 px-24 py-10 lg:flex-row flex-col rounded-[8px]">
              <div className="text-center">
                <p className="text-[#E1E8F0] font-bold text-4xl">4+</p>
                <p className="text-[#CBD5E0] font-normal text-base">
                  Years of operation
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#E1E8F0] font-bold text-4xl">366+</p>
                <p className="text-[#CBD5E0] font-normal text-base">
                  Projects deliverd
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#E1E8F0] font-bold text-4xl">45+</p>
                <p className="text-[#CBD5E0] font-normal text-base">
                  Specialist
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#E1E8F0] font-bold text-4xl">10+</p>
                <p className="text-[#CBD5E0] font-normal text-base">
                  Country served
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-16 right-0 ">
            <img src="/Images/cut.png"></img>
          </div>
        </div>

        <div className="w-full bg-white py-6 px-10 lg:px-28">
          <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 justify-between mt-10 ">
            <p className="font-normal text-base text-[#FF5A4A]">
              What We Can Do For You
            </p>

            <div className="flex gap-4 font-normal text-xs mb-6 lg:mb-0 lg:text-base">
              <div className="border bg-[#293CE1] transition-all duration-300 ease-in border-[#E4E4E5] rounded-[100px] text-white hover:text-white font-white px-6 py-3">
                <p>Design</p>
              </div>
              <div className="border hover:bg-[#293CE1] transition-all duration-300 ease-in border-[#E4E4E5] rounded-[100px] text-black hover:text-white font-white px-6 py-3">
                <p>Development</p>
              </div>
              <div className="border hover:bg-[#293CE1] transition-all duration-300 ease-in border-[#E4E4E5] rounded-[100px] text-black hover:text-white font-white px-6 py-3">
                <p>Digital Marketing</p>
              </div>
            </div>
          </div>

          <p className=" text-5xl text-[#101729] heading font-bold">
            Services We Offer
          </p>
          <p className="font-normal text-[#1E2A3A] lg:w-1/2 mt-6">
            Our services have been recognized for their excellence and how they
            enable businesses to reach their objectives, excel, and outperform
            in their respective industries.
          </p>

          <div className="flex justify-between flex-wrap w-full gap-3">
            <div className="lg:1/3 mt-10 max-h-[273px]">
              <img src="/Images/ux1.png"></img>
            </div>
            <div className="lg:1/3 mt-10 max-h-[273px]">
              <img src="/Images/ux2.png"></img>
            </div>
            <div className="lg:1/3 mt-10 max-h-[273px]">
              <img src="/Images/ux1.png"></img>
            </div>
          </div>
          <div className="flex justify-between flex-wrap -mt-4 w-full gap-3">
            <div className="lg:1/3 mt-10 max-h-[273px]">
              <img src="/Images/ux1.png"></img>
            </div>
            <div className="lg:1/3 mt-10 max-h-[273px]">
              <img src="/Images/ux2.png"></img>
            </div>
            <div className="lg:1/3 mt-10 max-h-[273px]">
              <img src="/Images/ux1.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
