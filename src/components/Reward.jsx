import { useState, useCallback, useEffect } from "react";
import Description from "./Description";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Reward = ({ className = "", onClose }) => {
  const [isDescriptionPopupOpen, setDescriptionPopupOpen] = useState(false);

  const openDescriptionPopup = useCallback(() => {
    setDescriptionPopupOpen(true);
  }, []);

  const closeDescriptionPopup = useCallback(() => {
    setDescriptionPopupOpen(false);
  }, []);

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
    <>
      <div
        className={`w-full relative flex flex-col items-center justify-center gap-2.5 [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] max-h-[90%] overflow-auto text-center text-3xs text-darkslategray font-garet ${className}`}
        data-animate-on-scroll
      >
        <div className="w-[46px] relative rounded bg-white h-[3px]" />
        <div
          className="self-stretch rounded-t-2xl rounded-b-none bg-white h-[527px] flex flex-col items-center justify-start pt-7 px-0 pb-[42px] box-border gap-7 [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] w-full max-h-[90%] overflow-auto"
          data-animate-on-scroll
        >
          <div className="rounded [background:linear-gradient(90.3deg,_#f5f2ed,_#f4f5f0_52.08%,_#edf5f3,_#edf5f4)] flex flex-row items-center justify-center p-[3px]">
            <div className="w-[84px] shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] rounded bg-white border-white border-[1px] border-solid box-border h-6 flex flex-row items-center justify-center">
              <div className="flex-1 relative">Rewards</div>
            </div>
            <div className="w-[84px] h-[25px] flex flex-row items-center justify-center text-darkgray-100">
              <div className="flex-1 relative tracking-[-0.02em]">
                My rewards
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[53px] text-left text-xs-4 text-black font-poppins">
            <div className="w-[270px] shadow-[0px_4px_12.2px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white h-48 flex flex-col items-center justify-start py-2.5 px-0 box-border relative gap-2.5">
              <img
                className="w-60 relative rounded-sm-4 h-[130px] object-cover z-[0]"
                alt=""
                src="/rectangle-39419@2x.png"
              />
              <img
                className="w-6 absolute !m-[0] top-[17px] left-[225px] h-6 cursor-pointer z-[1]"
                alt=""
                src="/frame-1410103886.svg"
                onClick={openDescriptionPopup}
              />
              <div className="self-stretch flex flex-col items-start justify-center py-0 px-3.5 relative gap-px z-[2]">
                <div className="flex flex-row items-center justify-center gap-px z-[0]">
                  <div className="w-[125.9px] relative font-medium inline-block shrink-0">
                    Grape Flavoued Latte
                  </div>
                  <div className="w-2.5 relative rounded-62xl bg-red border-whitesmoke-200 border-[1px] border-solid box-border h-2.5" />
                </div>
                <div className="relative font-montserrat text-darkgray-200 z-[1]">
                  20 Points
                </div>
                <img
                  className="w-[21.2px] absolute !m-[0] top-[6px] left-[233px] h-[21.2px] object-contain z-[2]"
                  alt=""
                  src="/reedem-button-arrow.svg"
                />
              </div>
            </div>
            <div className="w-[270px] shadow-[0px_4px_12.2px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white h-48 flex flex-col items-center justify-start py-2.5 px-0 box-border relative gap-2.5">
              <img
                className="w-60 relative rounded-sm-4 h-[130px] object-cover z-[0]"
                alt=""
                src="/rectangle-394191@2x.png"
              />
              <img
                className="w-6 absolute !m-[0] top-[17px] left-[225px] h-6 cursor-pointer z-[1]"
                alt=""
                src="/frame-1410103886.svg"
                onClick={openDescriptionPopup}
              />
              <div className="self-stretch flex flex-col items-start justify-center py-0 px-3.5 relative gap-px z-[2]">
                <div className="flex flex-row items-center justify-center gap-px z-[0]">
                  <div className="w-[125.9px] relative font-medium inline-block shrink-0">
                    Grape Flavoued Latte
                  </div>
                  <div className="w-2.5 relative rounded-62xl bg-red border-whitesmoke-200 border-[1px] border-solid box-border h-2.5" />
                </div>
                <div className="relative font-montserrat text-darkgray-200 z-[1]">
                  20 Points
                </div>
                <img
                  className="w-[21.2px] absolute !m-[0] top-[6px] left-[233px] h-[21.2px] object-contain z-[2]"
                  alt=""
                  src="/reedem-button-arrow.svg"
                />
              </div>
            </div>
            <div className="w-[270px] shadow-[0px_4px_12.2px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white h-48 flex flex-col items-center justify-start py-2.5 px-0 box-border relative gap-2.5">
              <img
                className="w-60 relative rounded-sm-4 h-[130px] object-cover z-[0]"
                alt=""
                src="/rectangle-394192@2x.png"
              />
              <img
                className="w-6 absolute !m-[0] top-[17px] left-[225px] h-6 cursor-pointer z-[1]"
                alt=""
                src="/frame-1410103886.svg"
                onClick={openDescriptionPopup}
              />
              <div className="self-stretch flex flex-col items-start justify-center py-0 px-3.5 relative gap-px z-[2]">
                <div className="flex flex-row items-center justify-center gap-px z-[0]">
                  <div className="w-[125.9px] relative font-medium inline-block shrink-0">
                    Grape Flavoued Latte
                  </div>
                  <div className="w-2.5 relative rounded-62xl bg-red border-whitesmoke-200 border-[1px] border-solid box-border h-2.5" />
                </div>
                <div className="relative font-montserrat text-darkgray-200 z-[1]">
                  20 Points
                </div>
                <img
                  className="w-[21.2px] absolute !m-[0] top-[6px] left-[233px] h-[21.2px] object-contain z-[2]"
                  alt=""
                  src="/reedem-button-arrow.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDescriptionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDescriptionPopup}
        >
          <Description onClose={closeDescriptionPopup} />
        </PortalPopup>
      )}
    </>
  );
};

Reward.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Reward;
