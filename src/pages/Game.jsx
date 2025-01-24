// import { useState, useCallback } from "react";
// import FrameComponent1 from "../components/FrameComponent1";
// import Reward from "../components/Reward";
// import PortalDrawer from "../components/PortalDrawer";
// import { useNavigate } from "react-router-dom";

// const Game = () => {
//   const [isRewardOpen, setRewardOpen] = useState(false);
//   const navigate = useNavigate();

//   const openReward = useCallback(() => {
//     setRewardOpen(true);
//   }, []);

//   const closeReward = useCallback(() => {
//     setRewardOpen(false);
//   }, []);

//   const onFrameButtonClick = useCallback(() => {
//     navigate("/c4");
//   }, [navigate]);

//   const onBackSvgrepoComClick = useCallback(() => {
//     navigate("/loyaltycard1");
//   }, [navigate]);

//   return (
//     <>
//       <div className="w-full relative bg-white flex flex-col items-center justify-center pt-6 px-0 pb-[70px] box-border gap-12 text-center text-base text-black font-garet lg:pt-10 lg:px-20 lg:pb-[60px] lg:box-border sm:pl-6 sm:pr-6 sm:box-border">
//         <div className="w-80 flex flex-col items-center justify-center pt-[11px] px-0 pb-1.5 box-border z-[0]">
//           <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
//             Test Your
//           </div>
//           <div className="w-[94px] relative text-5xl tracking-[0.01em] font-semibold font-poppins inline-block mt-[-5px] mq350small:font-poppins mq350small:text-mini">
//             Luck🍀
//           </div>
//         </div>
//         <FrameComponent1 />
//         <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[2]">
//           <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
//             <img className="w-4 relative h-[15px]" alt="" src="/vector.svg" />
//           </div>
//           <button
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.01em] font-medium font-poppins text-black text-left inline-block mq350small:text-smi"
//             onClick={openReward}
//           >
//             View Reward
//           </button>
//           <img
//             className="w-5 relative h-5"
//             alt=""
//             src="/frame-1410103878.svg"
//           />
//         </div>
//         <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[3] lg:gap-1">
//           <div className="flex-1 h-[46px]" />
//           <button
//             className="cursor-pointer border-whitesmoke-100 border-[1px] border-solid py-[9px] px-0 bg-seagreen-100 w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs box-border flex flex-row items-center justify-center lg:gap-2.5"
//             onClick={onFrameButtonClick}
//           >
//             <img className="w-6 relative h-[22px]" alt="" src="/icon1.svg" />
//           </button>
//         </div>
//         <button
//           className="cursor-pointer [border:none] p-0 bg-[transparent] w-[33px] absolute !m-[0] top-[12px] left-[18px] h-[33px] overflow-hidden shrink-0 z-[4]"
//           onClick={onBackSvgrepoComClick}
//         >
//           <img
//             className="absolute h-[63.64%] w-[35.76%] top-[20%] right-[30.91%] bottom-[16.36%] left-[33.33%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="/vector.svg"
//           />
//         </button>
//       </div>
//       {isRewardOpen && (
//         <PortalDrawer
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Bottom"
//           onOutsideClick={closeReward}
//         >
//           <Reward onClose={closeReward} />
//         </PortalDrawer>
//       )}
//     </>
//   );
// };

// export default Game;



// import React from "react";
// import { useState, useCallback } from "react";
// import FrameComponent1 from "../components/FrameComponent1";
// import Reward from "../components/Reward";
// import PortalDrawer from "../components/PortalDrawer";
// import { useNavigate } from "react-router-dom";

// const Game = () => {
//   const icons = ["/vector1.svg", "/vector2.svg", "/vector3.svg"];
//   const [isRewardOpen, setRewardOpen] = useState(false);
//   const [slots, setSlots] = useState([icons[0], icons[1], icons[2]]);
//   const [spinning, setSpinning] = useState(false);
//   const navigate = useNavigate();

//   const openReward = useCallback(() => {
//     setRewardOpen(true);
//   }, []);

//   const closeReward = useCallback(() => {
//     setRewardOpen(false);
//   }, []);

//   const spinSlots = () => {
//     setSpinning(true);
//     const interval = setInterval(() => {
//       setSlots([
//         icons[Math.floor(Math.random() * icons.length)],
//         icons[Math.floor(Math.random() * icons.length)],
//         icons[Math.floor(Math.random() * icons.length)],
//       ]);
//     }, 100);

//     setTimeout(() => {
//       clearInterval(interval);
//       setSpinning(false);
//       checkWin();
//     }, 3000);
//   };

//   const checkWin = () => {
//     if (slots[0] === slots[1] && slots[1] === slots[2]) {
//       alert("Winner! 🎉");
//     } else {
//       alert("Try again!");
//     }
//   };

//   const onFrameButtonClick = useCallback(() => {
//     navigate("/c4");
//   }, [navigate]);

//   const onBackSvgrepoComClick = useCallback(() => {
//     navigate("/loyaltycard1");
//   }, [navigate]);

//   return (
//     <>
//       <div className="w-full relative bg-white flex flex-col items-center justify-center pt-6 px-0 pb-[70px] box-border gap-12 text-center text-base text-black font-garet lg:pt-10 lg:px-20 lg:pb-[60px] lg:box-border sm:pl-6 sm:pr-6 sm:box-border">
//         <div className="w-80 flex flex-col items-center justify-center pt-[11px] px-0 pb-1.5 box-border z-[0]">
//           <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
//             Test Your
//           </div>
//           <div className="w-[94px] relative text-5xl tracking-[0.01em] font-semibold font-poppins inline-block mt-[-5px] mq350small:font-poppins mq350small:text-mini">
//             Luck🍀
//           </div>
//         </div>
//         <FrameComponent1 />
//         <div className="flex space-x-4 border p-4">
//           {slots.map((slot, index) => (
//             <img key={index} src={slot} alt={`slot-${index}`} className="w-20 h-20" />
//           ))}
//         </div>
//         <button
//           className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg"
//           onClick={spinSlots}
//           disabled={spinning}
//         >
//           {spinning ? "Spinning..." : "Start"}
//         </button>
//         <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[2]">
//           <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
//             <img className="w-4 relative h-[15px]" alt="" src="/vector.svg" />
//           </div>
//           <button
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.01em] font-medium font-poppins text-black text-left inline-block mq350small:text-smi"
//             onClick={openReward}
//           >
//             View Reward
//           </button>
//           <img className="w-5 relative h-5" alt="" src="/frame-1410103878.svg" />
//         </div>
//         <button
//           className="cursor-pointer [border:none] p-0 bg-[transparent] w-[33px] absolute !m-[0] top-[12px] left-[18px] h-[33px] overflow-hidden shrink-0 z-[4]"
//           onClick={onBackSvgrepoComClick}
//         >
//           <img className="absolute h-[63.64%] w-[35.76%] top-[20%] right-[30.91%] bottom-[16.36%] left-[33.33%] max-w-full overflow-hidden max-h-full" alt="" src="/vector.svg" />
//         </button>
//       </div>
//       {isRewardOpen && (
//         <PortalDrawer overlayColor="rgba(113, 113, 113, 0.3)" placement="Bottom" onOutsideClick={closeReward}>
//           <Reward onClose={closeReward} />
//         </PortalDrawer>
//       )}
//     </>
//   );
// };

// export default Game;


import { useState, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Reward from "../components/Reward";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [isRewardOpen, setRewardOpen] = useState(false);
  const navigate = useNavigate();

  const openReward = useCallback(() => {
    setRewardOpen(true);
  }, []);

  const closeReward = useCallback(() => {
    setRewardOpen(false);
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);

  const onBackSvgrepoComClick = useCallback(() => {
    navigate("/loyaltycard1");
  }, [navigate]);

  // Define the props you want to pass to FrameComponent1
  const icons = ["vector1.svg", "vector2.svg", "vector3.svg"];  // Array of icon URLs
  const winProbability = 50;  // Win probability percentage
  const cookieName = "game-cookie";  // Cookie name to track the timer

  return (
    <>
      <div className="w-full relative bg-white flex flex-col items-center justify-center pt-6 px-0 pb-[70px] box-border gap-12 text-center text-base text-black font-garet ">
        <div className="w-80 flex flex-col items-center justify-center pt-[11px] px-0 pb-1.5 box-border z-[0]">
          <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
            Test Your
          </div>
          <div className="w-[94px] relative text-5xl tracking-[0.01em] font-semibold font-poppins inline-block mt-[-5px] mq350small:font-poppins mq350small:text-mini">
            Luck🍀
          </div>
        </div>
        {/* Pass props to FrameComponent1 */}
        <FrameComponent1
          icons={icons}
          winProbability={winProbability}
          cookieName={cookieName}
        />
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[2]">
          <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
            <img className="w-4 relative h-[15px]" alt="" src="/vector.svg" />
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.01em] font-medium font-poppins text-black text-left inline-block mq350small:text-smi"
            onClick={openReward}
          >
            View Reward
          </button>
          <img
            className="w-5 relative h-5"
            alt=""
            src="/frame-1410103878.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[3] lg:gap-1">
          <div className="flex-1 h-[46px]" />
          <button
            className="cursor-pointer border-whitesmoke-100 border-[1px] border-solid py-[9px] px-0 bg-seagreen-100 w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs box-border flex flex-row items-center justify-center lg:gap-2.5"
            onClick={onFrameButtonClick}
          >
            <img className="w-6 relative h-[22px]" alt="" src="/icon1.svg" />
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[33px] absolute !m-[0] top-[12px] left-[18px] h-[33px] overflow-hidden shrink-0 z-[4]"
          onClick={onBackSvgrepoComClick}
        >
          <img
            className="absolute h-[63.64%] w-[35.76%] top-[20%] right-[30.91%] bottom-[16.36%] left-[33.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/back.svg"
          />
        </button>
      </div>
      {isRewardOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeReward}
        >
          <Reward onClose={closeReward} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Game;
