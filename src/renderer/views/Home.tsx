import * as ReactTable from "@table-library/react-table-library/table";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTheme } from "@table-library/react-table-library/theme";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

interface IMusic {
  id: string;
  title: string;
  artist: string;
  album: string;
  file: string;
}

export default function MusicView() {
  const theme = useTheme(getTheme());
  const [musics, setMusics] = useState<IMusic[]>([
    {
      id: "001",
      title: "MV LUVORATORRRRRY",
      album: "LUVORATORRRRRY",
      artist: "Reolれをる",
      file: "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
    },
  ]);

  return (
    <div>
      <ReactTable.Table data={{ nodes: musics }} theme={theme}>
        {(nodes: IMusic[]) => {
          return (
            <>
              <ReactTable.Header>
                <ReactTable.HeaderRow className="!bg-[#23232d] !text-white">
                  <ReactTable.HeaderCell className="!mb-4 !pb-3">#</ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !pb-3">Título</ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !pb-3">Album</ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !pb-3">Fecha</ReactTable.HeaderCell>
                  <ReactTable.HeaderCell className="!mb-4 !pb-3">Options</ReactTable.HeaderCell>
                </ReactTable.HeaderRow>
              </ReactTable.Header>
              <ReactTable.Body>
                {nodes.map((music) => {
                  return (
                    <ReactTable.Row
                      className="!bg-[#23232d] !text-white hover:!bg-[#404053] "
                      key={music.id}
                      item={music}
                    >
                      <ReactTable.Cell className="!border-none">{1}</ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">
                        {music.title} {music.artist}
                      </ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">{music.album}</ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">18 jul 2023</ReactTable.Cell>
                      <ReactTable.Cell className="!border-none">1 2 3</ReactTable.Cell>
                    </ReactTable.Row>
                  );
                })}
              </ReactTable.Body>
            </>
          );
        }}
      </ReactTable.Table>
    </div>
  );
}

// interface IArtist {
//   gid: string;
//   name: string;
//   artist_name: string;
//   description: string;
//   artist_image: string;
//   history: string;
// }

// interface IAlbum {
//   gid: string;
//   name: string;
//   artist: IArtist[];
//   label: string;
//   date: { year: 2021; month: 5; day: 7 };
//   cover_group: {
//     image: [
//       {
//         file_id: string;
//         size: "DEFAULT";
//         width: 300;
//         height: 300;
//       },
//       {
//         file_id: string;
//         size: "SMALL";
//         width: 64;
//         height: 64;
//       },
//       {
//         file_id: string;
//         size: "LARGE";
//         width: 640;
//         height: 640;
//       },
//     ];
//   };
// }

// interface IMusic {
//   private_id: string;
//   public_id: string;
//   has_lyrics: boolean;
//   canonical_uri: "https://cismu.com/track/random_public_id";
//   language_of_performance: string[];
//   artists: IArtist[];
//   album: IAlbum;
//   files: {
//     online: [
//       {
//         file_id: string;
//         format: "OGG_VORBIS_320";
//       },
//       {
//         file_id: string;
//         format: "AAC_24";
//       },
//     ];
//     offline: [
//       {
//         file_id: string;
//         format: string;
//         path: string;
//       },
//     ];
//   };
//   preview: [
//     {
//       file_id: string;
//       preview_url: string;
//       format: string;
//     },
//   ];
//   metadata: {
//     title: string;
//     duration: number;
//     cover_group: {
//       image: [
//         {
//           file_id: string;
//           size: "DEFAULT";
//           width: 300;
//           height: 300;
//         },
//         {
//           file_id: string;
//           size: "SMALL";
//           width: 64;
//           height: 64;
//         },
//         {
//           file_id: string;
//           size: "LARGE";
//           width: 640;
//           height: 640;
//         },
//       ];
//     };
//     lyrics?: {
//       id: string;
//       uri: string;
//     };
//     external_id: { type: "isrc"; id: string }[];
//     original_audio: { uuid: string };
//     original_title: string;
//   };
// }
