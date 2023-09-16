import { PiMusicNotes, PiCompass, PiFolders, PiMagnifyingGlass } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function LeftSidebarTop() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-lg bg-[#23232d] px-1 py-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]"
        >
          <div className="text-lg">
            <PiMusicNotes />
          </div>
          <div>Música</div>
        </button>
        <button
          onClick={() => navigate("/explore")}
          className="flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]"
        >
          <div className="text-lg">
            <PiCompass />
          </div>
          <div>Explorar</div>
        </button>
        <button
          onClick={() => navigate("/library")}
          className="flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]"
        >
          <div className="text-lg">
            <PiFolders />
          </div>
          <div>Biblioteca</div>
        </button>
        <button
          onClick={() => navigate("/search")}
          className="flex items-center gap-3 rounded-sm p-2 hover:bg-[#404053]"
        >
          <div className="text-lg">
            <PiMagnifyingGlass />
          </div>
          <div>Buscar</div>
        </button>
      </div>
    </div>
  );
}
