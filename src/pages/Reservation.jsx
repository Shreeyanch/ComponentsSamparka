import { useState, useCallback } from "react";
import FrameTell from "../components/FrameTell";
import PortalPopup from "../components/PortalPopup";
import FrameComponent from "../components/FrameComponent";
import Myreservation from "../components/Myreservation";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [isFrameTellPopupOpen, setFrameTellPopupOpen] = useState(false);
  const [isReservationModalOpen, setReservationModalOpen] = useState(false);
  const navigate = useNavigate();

  const openFrameTellPopup = useCallback(() => {
    setFrameTellPopupOpen(true);
  }, []);

  const closeFrameTellPopup = useCallback(() => {
    setFrameTellPopupOpen(false);
  }, []);

  const openReservationModal = useCallback(() => {
    setReservationModalOpen(true);
  }, []);

  const closeReservationModal = useCallback(() => {
    setReservationModalOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onBackSvgrepoComClick = useCallback(() => {
    navigate("/loyaltycard1");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white flex flex-col items-center justify-start pt-6 px-0 pb-[70px] box-border gap-[18px] text-center text-base text-black font-garet ">
        <div className="w-80 flex flex-col items-center justify-center pt-[11px] px-0 pb-1.5 box-border z-[0]">
          <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
            Make your
          </div>
          <div className="relative text-xl tracking-[0.01em] font-semibold font-poppins mt-[-5px] mq350small:font-poppins mq350small:text-mini">
            Reservation 📆
          </div>
        </div>
        <img
          className="w-[270px] relative h-[195px] object-cover cursor-pointer z-[1]"
          alt=""
          src="/frame-image-for-reservation@2x.png"
          onClick={openFrameTellPopup}
        />
        <FrameComponent />
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[3]">
          <div className="w-[22px] h-[22px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
            <img className="w-6 relative h-[22px]" alt="" src="/icon.svg" />
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.01em] font-medium font-poppins text-black text-left inline-block mq350small:text-smi"
            onClick={openReservationModal}
          >{`View Reservations `}</button>
          <img
            className="w-5 relative h-5"
            alt=""
            src="/frame-14101038781.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 z-[4] lg:gap-1">
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
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[33px] absolute !m-[0] top-[12px] left-[18px] h-[33px] overflow-hidden shrink-0 z-[5]"
          onClick={onBackSvgrepoComClick}
        >
          <img
            className="absolute h-[63.64%] w-[35.76%] top-[20%] right-[30.91%] bottom-[16.36%] left-[33.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/back.svg"
          />
        </button>
      </div>
      {isFrameTellPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrameTellPopup}
        >
          <FrameTell onClose={closeFrameTellPopup} />
        </PortalPopup>
      )}
      {isReservationModalOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeReservationModal}
        >
          <Myreservation onClose={closeReservationModal} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Reservation;
