import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function MainViewNavbar() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.navigation.canGoBack) {
      navigate(-1);
    }
  };

  const goForward = () => {
    if (window.navigation.canGoForward) {
      navigate(1);
    }
  };

  return (
    <div className="skeleton-main-view pointer-events-none z-20 m-2 my-0 h-16">
      <div className="flex h-full w-full items-center justify-between gap-2 p-6">
        <div className="flex gap-2 text-base text-white">
          <button
            onClick={goBack}
            disabled={!window.navigation.canGoBack}
            className={`pointer-events-auto rounded-[50%] p-2 ${
              window.navigation.canGoBack ? "bg-[#343446]" : "cursor-not-allowed bg-[#181820]"
            }`}
          >
            <PiCaretLeftBold />
          </button>
          <button
            onClick={goForward}
            disabled={!window.navigation.canGoForward}
            className={`pointer-events-auto rounded-[50%] p-2 ${
              window.navigation.canGoForward ? "bg-[#343446]" : "cursor-not-allowed bg-[#181820]"
            }`}
          >
            <PiCaretRightBold />
          </button>
        </div>
        <div className="h-9 w-9 rounded-[50%] bg-[#39394a] hover:scale-105">
          <button className="m-1">
            <img
              draggable={false}
              className="pointer-events-auto h-full w-full select-none rounded-[50%] object-cover"
              src="https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
