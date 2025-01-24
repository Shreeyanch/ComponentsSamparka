import { useState, useCallback, useEffect } from "react";
import ViewReward from "../components/ViewReward";
import Reward from "../components/Reward";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";

const Loyaltycard1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [greeting, setGreeting] = useState("Namaste!"); // Default greeting
  const navigate = useNavigate();

  const greetings = ["Namaste!", "Jwojwolapa!", "Sewaro!", "Tashi Delek!"]; // Add the desired greetings
  let greetingIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      greetingIndex = (greetingIndex + 1) % greetings.length; // Cycle through greetings
      setGreeting(greetings[greetingIndex]);
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white flex flex-col items-center justify-start pt-6 px-0 pb-[70px] box-border gap-[34px] text-left text-5xl text-black font-poppins ">
        <div className="w-80 flex flex-col items-start justify-start pt-[11px] pb-1.5 pl-[29px] pr-14 box-border text-center font-garet">
          <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
            <span>{greeting}</span> {/* Display the dynamic greeting */}
            <span className="font-medium font-rubik">👋🏼</span>
          </div>
          <div className="relative text-xl tracking-[0.01em] font-semibold font-poppins mt-[-5px] mq350small:font-poppins mq350small:text-mini">
            Shreeyanch
          </div>
        </div>
        <ViewReward
          group1410103762="/group-1410103762.svg"
          vector="/send.svg"
        />
        <div className="w-60 shadow-[0px_25px_58px_rgba(1,_110,_73,_0.5)] rounded-3xs bg-seagreen-100 h-[340px] flex flex-col items-center justify-center py-1 px-2.5 box-border gap-1.5 text-3xs text-white md:flex-col md:flex-wrap">
          <div className="self-stretch rounded-[21px] h-[301px] overflow-hidden shrink-0 flex flex-row items-center justify-center flex-wrap content-center py-[33px] px-[11px] box-border gap-x-[27px] gap-y-[62px]">
            <div className="w-[42px] relative rounded-[50%] bg-white border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
            <div className="w-[42px] relative rounded-[50%] border-white border-[1px] border-solid box-border h-[42px]" />
          </div>
          <div className="relative tracking-[0.01em] font-medium">
            Points: 55
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 text-mini">
          <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
            <img className="w-4 relative h-[15px]" alt="" src="/vector.svg" />
          </div>
          <div
            className="relative tracking-[0.01em] font-medium cursor-pointer mq350small:text-smi"
            onClick={openFrame}
          >
            View Rewards
          </div>
          <img
            className="w-5 relative h-5"
            alt=""
            src="/frame-1410103878.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 lg:gap-1">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div
              className="w-[70px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-seagreen-100 border-whitesmoke-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5"
              onClick={onFrameContainerClick}
            >
              <img
                className="w-6 relative h-[22px]"
                alt=""
                src="/joysticksvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-center">
            <div
              className="w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-seagreen-100 border-whitesmoke-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5"
              onClick={onFrameContainerClick1}
            >
              <img className="w-6 relative h-[22px]" alt="" src="/icon1.svg" />
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeFrame}
        >
          <Reward onClose={closeFrame} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Loyaltycard1;
