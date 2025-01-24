// import { useCallback } from "react";
// import ViewReward from "../components/ViewReward";
// import { useNavigate } from "react-router-dom";

// const Loyaltycard = () => {
//   const navigate = useNavigate();

//   const onFrameContainerClick = useCallback(() => {
//     navigate("/game");
//   }, [navigate]);

//   const onFrameContainerClick1 = useCallback(() => {
//     navigate("/c4");
//   }, [navigate]);

//   return (
//     <div className="w-full relative bg-white flex flex-col items-center justify-start pt-6 px-0 pb-[70px] box-border gap-[34px] text-center text-5xl text-black font-garet lg:pt-10 lg:px-20 lg:pb-[60px] lg:box-border md:pl-10 md:pr-10 md:box-border sm:pl-6 sm:pr-6 sm:box-border">
//       <div className="flex flex-col items-start justify-start">
//         <div className="w-80 flex flex-col items-start justify-start">
//           <div className="self-stretch flex flex-col items-start justify-start pt-[11px] pb-1.5 pl-[29px] pr-14">
//             <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
//               <span>Hello!</span>
//               <span className="font-medium font-rubik">👋🏼</span>
//             </div>
//             <div className="relative text-xl tracking-[0.01em] font-semibold font-poppins mt-[-5px] mq350small:font-poppins mq350small:text-mini">
//               Shreeyanch
//             </div>
//           </div>
//         </div>
//       </div>
//       <ViewReward
//         group1410103762="/group-1410103762.svg"
//         vector="/vector1.svg"
//       />
//       <div className="w-60 shadow-[0px_25px_58px_rgba(1,_110,_73,_0.5)] rounded-3xs bg-seagreen-100 h-[340px] flex flex-col items-center justify-center py-1 px-2.5 box-border gap-1.5 text-left text-base text-white md:flex-col md:flex-wrap">
//         <img
//           className="w-[217px] relative h-[209.7px]"
//           alt=""
//           src="/group-20.svg"
//         />
//         <div className="w-[200px] flex flex-col items-center justify-start lg:w-full sm:flex-col">
//           <div className="self-stretch flex flex-col items-center justify-center">
//             <div className="relative">Points</div>
//             <div className="self-stretch flex flex-row items-center justify-center text-11xl font-h1">
//               <div className="flex flex-row items-center justify-center">
//                 <div className="w-[39px] relative h-9" id="point" point="55">
//                   <b className="absolute top-[0px] left-[0px]">55</b>
//                 </div>
//                 <img
//                   className="w-6 relative h-6 overflow-hidden shrink-0"
//                   alt=""
//                   src="/interface--star.svg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1">
//         <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
//           <img className="w-4 relative h-[15px]" alt="" src="/vector.svg" />
//         </div>
//         <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.01em] font-medium font-poppins text-black text-left inline-block mq350small:text-smi">
//           View Rewards
//         </button>
//         <img className="w-5 relative h-5" alt="" src="/frame-1410103878.svg" />
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 lg:gap-1">
//         <div className="flex-1 flex flex-col items-start justify-start">
//           <div
//             className="w-[70px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-seagreen-100 border-whitesmoke-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5"
//             onClick={onFrameContainerClick}
//           >
//             <img
//               className="w-[29px] relative h-7 overflow-hidden shrink-0"
//               alt=""
//               src="/joysticksvgrepocom-1.svg"
//             />
//           </div>
//         </div>
//         <div className="flex-1 flex flex-col items-end justify-center">
//           <div
//             className="w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-seagreen-100 border-whitesmoke-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5"
//             onClick={onFrameContainerClick1}
//           >
//             <img className="w-6 relative h-[22px]" alt="" src="/icon1.svg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loyaltycard;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewReward from "../components/ViewReward";

// Circular Progress Bar Component
const CircularProgressBar = ({ progress, iconSrc }) => {
  const progressAngle = (progress / 100) * 360;

  return (
    <div className="relative flex justify-center items-center w-[200px] h-[200px]">
      <svg
        className="rotate-90"
        width="200"
        height="200"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#FFFCEC"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#E6D62D"
          strokeWidth="8"
          strokeDasharray="314.159"
          strokeDashoffset={314.159 - (progressAngle / 360) * 314.159}
          strokeLinecap="round"
        />
      </svg>
      <img
        className="absolute w-16 h-16"
        alt="Cup Icon"
        src={iconSrc}
      />
    </div>
  );
};

const LoyaltyCard = () => {
  const [points, setPoints] = useState(55);
  const progress = (points / 100) * 100;
  const [greeting, setGreeting] = useState(["Namaste", "Jwojwolapa", "Sewaro", "Tashi Delek"]);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greeting.length);
    }, 2000);

    return () => clearInterval(greetingInterval);
  }, [greeting]);

  const onFrameContainerClick = () => {
    navigate("/game");
  };

  const onFrameContainerClick1 = () => {
    navigate("/reservation");
  };

  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start pt-6 px-0 pb-[70px] box-border gap-[34px] text-center text-5xl text-black font-garet">
      <div className="flex flex-col items-start justify-start">
        <div className="w-90 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start pt-[11px] pb-1.5 pr-[80px]">
            <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
              <span>{greeting[currentGreeting]}</span>
              <span className="font-medium font-rubik">👋🏼</span>
            </div>
            <div className="relative text-xl tracking-[0.01em] font-semibold font-poppins mt-[-5px] mq350small:font-poppins mq350small:text-mini">
              Shreeyanch
            </div>
          </div>
        </div>
      </div>

      <ViewReward
        group1410103762="/group-1410103762.svg"
        vector="/vector1.svg"
      />
      <div className="w-60 shadow-[0px_25px_58px_rgba(1,_110,_73,_0.5)] rounded-3xs bg-seagreen-100 h-[340px] flex flex-col items-center justify-center py-1 px-2.5 box-border gap-1.5 text-left text-base text-white md:flex-col md:flex-wrap">
        <CircularProgressBar progress={progress} iconSrc="/cup-icon.svg" />
        <div className="w-[200px] flex flex-col items-center justify-start lg:w-full">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="relative">Points</div>
            <div className="self-stretch flex flex-row items-center justify-center text-11xl font-h1">
              <div className="flex flex-row items-center justify-center">
                <div className="w-[39px] relative h-9" id="point" point={points}>
                  <b className="absolute top-[0px] left-[0px]">{points}</b>
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/interface--star.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1">
        <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
          <img className="w-4 relative h-[15px]" alt="" src="/vector.svg" />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.01em] font-medium font-poppins text-black text-left inline-block mq350small:text-smi">
          View Rewards
        </button>
        <img className="w-5 relative h-5" alt="" src="/frame-1410103878.svg" />
      </div>

      <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 lg:gap-1">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div
            className="w-[70px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-seagreen-100 border-whitesmoke-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5"
            onClick={onFrameContainerClick}
          >
            <img
              className="w-[29px] relative h-7 overflow-hidden shrink-0"
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
  );
};

export default LoyaltyCard;
