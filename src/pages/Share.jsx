import { useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onFrameButtonClick1 = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);

  const onBackSvgrepoComClick = useCallback(() => {
    navigate("/loyaltycard1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start pt-6 px-0 pb-[70px] box-border gap-[18px] text-center text-base text-black font-garet">
      <div className="w-80 flex flex-col items-center justify-center pt-[11px] px-0 pb-1.5 box-border z-[0]">
        <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
          Share the
        </div>
        <div className="relative text-xl tracking-[0.01em] font-semibold font-poppins mt-[-5px] mq350small:font-poppins mq350small:text-mini">
          Love ❤️
        </div>
      </div>
      <FrameComponent2 />
      <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[2] lg:gap-1">
        <div className="flex-1 flex flex-col items-start justify-start">
          <button
            className="cursor-pointer border-whitesmoke-100 border-[1px] border-solid py-[9px] px-0 bg-seagreen-100 w-[70px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none box-border flex flex-row items-center justify-center lg:gap-2.5"
            onClick={onFrameButtonClick}
          >
            <img
              className="w-6 relative h-[22px]"
              alt=""
              src="/joysticksvgrepocom-1.svg"
            />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center">
          <button
            className="cursor-pointer border-whitesmoke-100 border-[1px] border-solid py-[9px] px-0 bg-seagreen-100 w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs box-border flex flex-row items-center justify-center lg:gap-2.5"
            onClick={onFrameButtonClick1}
          >
            <img className="w-6 relative h-[22px]" alt="" src="/icon1.svg" />
          </button>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[33px] absolute !m-[0] top-[12px] left-[18px] h-[33px] overflow-hidden shrink-0 z-[3]"
        onClick={onBackSvgrepoComClick}
      >
        <img
          className="absolute h-[63.64%] w-[35.76%] top-[20%] right-[30.91%] bottom-[16.36%] left-[33.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/back.svg"
        />
      </button>
    </div>
  );
};

export default Share;
