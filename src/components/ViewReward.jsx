import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ViewReward = ({ className = "", group1410103762, vector }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/share");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 text-left text-2xs text-black font-poppins lg:pl-0 lg:pr-0 lg:box-border ${className}`}
    >
      <div className="flex-1 h-[46px]" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="h-[74px] flex flex-col items-center justify-center">
          <img
            className="w-[145px] relative h-[44.4px]"
            alt=""
            src={group1410103762}
          />
        </div>
        <div className="relative tracking-[0.01em] font-medium">
          Thamel, Kathmandu
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end justify-center">
        <div
          className="w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-seagreen-100 border-whitesmoke-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5"
          onClick={onFrameContainerClick}
        >
          <img className="w-5 relative h-5" alt="" src={vector} />
        </div>
      </div>
    </div>
  );
};

ViewReward.propTypes = {
  className: PropTypes.string,
  group1410103762: PropTypes.string,
  vector: PropTypes.string,
};

export default ViewReward;
