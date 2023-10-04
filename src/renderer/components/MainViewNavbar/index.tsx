import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MainViewNavbar() {
  const [showMenu, setMenu] = useState(false)

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
            className={`pointer-events-auto rounded-[50%] p-2 ${window.navigation.canGoBack ? "bg-[#343446]" : "cursor-not-allowed bg-[#181820]"
              }`}
          >
            <PiCaretLeftBold />
          </button>
          <button
            onClick={goForward}
            disabled={!window.navigation.canGoForward}
            className={`pointer-events-auto rounded-[50%] p-2 ${window.navigation.canGoForward ? "bg-[#343446]" : "cursor-not-allowed bg-[#181820]"
              }`}
          >
            <PiCaretRightBold />
          </button>
        </div>
        <div className="relative">
          <div className="h-9 w-9 rounded-[50%] bg-[#39394a] hover:scale-105">
            <button className="m-1" onClick={() => setMenu(!showMenu)}>
              <img
                draggable={false}
                className="pointer-events-auto h-full w-full select-none rounded-[50%] object-cover"
                src="https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"
              />
            </button>
          </div>

          <div className={`absolute transition-all top-[120%] right-0 flex-col gap-1 bg-[#181820] w-40 text-white rounded-sm p-2 pointer-events-auto select-none ${showMenu ? "flex" : "hidden"}`}>
            <div className="p-2 hover:bg-[#23232d] rounded-sm">Cuenta</div>
            <div className="p-2 hover:bg-[#23232d] rounded-sm">Perfil</div>
            <div className="p-2 hover:bg-[#23232d] rounded-sm">Preferencias</div>
            <hr className="my-1" />
            <div className="p-2 hover:bg-[#23232d] rounded-sm">Cerrar sesión</div>
          </div>
        </div>
      </div>
    </div>
  );
}
