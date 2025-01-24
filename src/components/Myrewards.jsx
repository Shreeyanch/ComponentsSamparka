import { useEffect } from "react";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";

const Myrewards = ({ className = "", onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={`w-full relative flex flex-col items-center justify-center gap-2.5 [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] max-h-[90%] overflow-auto text-center text-3xs text-darkgray-100 font-garet ${className}`}
      data-animate-on-scroll
    >
      <div className="w-[46px] relative rounded bg-white h-[3px]" />
      <div
        className="self-stretch rounded-t-2xl rounded-b-none bg-white h-[527px] flex flex-col items-center justify-start pt-7 px-0 pb-[42px] box-border gap-7 [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] w-full max-h-[90%] overflow-auto"
        data-animate-on-scroll
      >
        <div className="rounded [background:linear-gradient(90.3deg,_#f5f2ed,_#f4f5f0_52.08%,_#edf5f3,_#edf5f4)] flex flex-row items-center justify-center p-[3px]">
          <div className="w-[84px] h-[25px] flex flex-row items-center justify-center">
            <div className="flex-1 relative tracking-[-0.02em]">Rewards</div>
          </div>
          <div className="w-[84px] shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] rounded bg-white border-white border-[1px] border-solid box-border h-6 flex flex-row items-center justify-center text-darkslategray">
            <div className="flex-1 relative">My rewards</div>
          </div>
        </div>
        <FrameComponent3 />
      </div>
    </div>
  );
};

Myrewards.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Myrewards;
