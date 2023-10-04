import { Virtualized } from "@table-library/react-table-library/virtualized";
import * as ReactTable from "@table-library/react-table-library/table";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTheme } from "@table-library/react-table-library/theme";
import React, { useEffect, useState } from "react";
import { IMusic } from "src/types/shared/Music";

import { AiOutlineClockCircle } from "react-icons/ai";
import { PiDotsThree, PiHeart, PiPlay } from "react-icons/pi";
import { Link } from "react-router-dom";

const data = [
  {
    id: "001",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
  {
    id: "002",
    title: "MV LUVORATORRRRRY",
    album: "LUVORATORRRRRY",
    artist: "Reolれをる",
    file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
  },
];

export default function MusicView() {
  // useState Hooks
  const [musics, setMusics] = useState<IMusic[]>(data);

  // Hooks
  const theme = useTheme({
    ...getTheme(),
    Table:
      "--data-table-library_grid-template-columns: minmax(0px, max-content) repeat(3, minmax(0px, 1fr)) minmax(0px, min-content);",
  });

  // Table Data
  const tableData = { nodes: musics };

  return (
    <>
      <ReactTable.Table data={tableData} theme={theme} layout={{ custom: true }}>
        {(nodes: IMusic[]) => {
          return (
            <>
              <ReactTable.Header>
                <ReactTable.HeaderRow className="!bg-[#23232d] !text-white">
                  <ReactTable.HeaderCell className="!mb-4 !border-[#404053] !pb-3">
                    Canción
                  </ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !border-[#404053] !pb-3">
                    Artista
                  </ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !border-[#404053] !pb-3">
                    Álbum
                  </ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !border-[#404053] !pb-3">
                    Añadido
                  </ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !border-[#404053] !pb-3">
                    <div className="flex justify-center">
                      <AiOutlineClockCircle />
                    </div>
                  </ReactTable.HeaderCell>
                </ReactTable.HeaderRow>
              </ReactTable.Header>
              <ReactTable.Body>
                {nodes.map((music) => {
                  return (
                    <ReactTable.Row
                      className="select-none !bg-[#23232d] !text-white hover:!bg-[#404053]"
                      key={music.id}
                      item={music}
                    >
                      <ReactTable.Cell className="!rounded-l !border-none">
                        <div className="flex justify-center gap-4">
                          <div className="relative cursor-pointer">
                            <div className="absolute flex h-full w-full items-center justify-center hover:bg-black hover:bg-opacity-60">
                              <PiPlay className="block" />
                            </div>
                            <img
                              draggable={false}
                              className="select-none rounded-sm"
                              width={42}
                              height={42}
                              src="https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"
                            />
                          </div>
                          <div className="flex items-center">
                            <Link className="hover:underline" to={"#"}>
                              {music.title}
                            </Link>
                          </div>
                          <div className="flex items-center gap-4 text-xl">
                            <PiHeart />
                            <PiDotsThree />
                          </div>
                        </div>
                      </ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">
                        <Link className="hover:underline" to={"#"}>
                          {music.artist}
                        </Link>
                      </ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">
                        <Link className="hover:underline" to={"#"}>
                          {music.album}
                        </Link>
                      </ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">18 jul 2023</ReactTable.Cell>
                      <ReactTable.Cell className="!rounded-r !border-none">3:20</ReactTable.Cell>
                    </ReactTable.Row>
                  );
                })}
              </ReactTable.Body>
            </>
          );
        }}
      </ReactTable.Table>
    </>
  );
}
