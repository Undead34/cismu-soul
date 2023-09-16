import { PiListPlus, PiPushPinFill, PiMusicNotesSimple, PiHeartStraight } from "react-icons/pi";

export default function LeftSidebarBottom() {
  return (
    <div className="flex flex-1 flex-col gap-1 rounded-lg bg-[#23232d] px-1 py-2">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 rounded-sm p-2 text-left ">
          <div className="text-lg">
            <PiListPlus />
          </div>
          <div>Listas de reproducción</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <button className="flex items-center gap-2 rounded-sm p-2 hover:bg-[#404053]">
          <div>
            <div className="bg-gradient-dark flex h-12 w-12 items-center justify-center text-3xl">
              <PiHeartStraight />
            </div>
          </div>

          <div className="flex-1 truncate text-left">
            <div className="w-full truncate text-sm font-bold">Canciones favoritas</div>
            <div className="flex items-center gap-1 text-xs">
              <PiPushPinFill width={12} height={12} />
              <div className="flex-1 truncate">Lista{" • "}48 canciones</div>
            </div>
          </div>
        </button>

        <button className="flex items-center gap-2 rounded-sm p-2 hover:bg-[#404053]">
          <div>
            <div className="bg-gradient-dark flex h-12 w-12 items-center justify-center bg-[#5e5e79] text-3xl">
              <PiMusicNotesSimple />
            </div>
          </div>

          <div className="flex-1 truncate text-left">
            <div className="w-full truncate text-sm font-bold">Mi lista n.º 1</div>
            <div className="flex items-center gap-1 text-xs">
              <div className="flex-1 truncate">Lista{" • "}52 canciones</div>
            </div>
          </div>
        </button>

        <button className="flex items-center gap-2 rounded-sm p-2 hover:bg-[#404053]">
          <div>
            <img
              className="rounded object-cover"
              draggable={false}
              width={48}
              height={48}
              src="https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"
            />
          </div>

          <div className="flex-1 truncate text-left">
            <div className="w-full truncate text-sm font-bold">Moonlight</div>
            <div className="flex items-center gap-1 text-xs">
              <div className="flex-1 truncate">Lista{" • "}12 canciones</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
